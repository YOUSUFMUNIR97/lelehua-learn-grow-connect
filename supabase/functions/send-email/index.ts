import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  formType: "contact" | "join";
  userEmail: string;
  userName: string;
  formData: Record<string, string>;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY not configured");
    }

    const { formType, userEmail, userName, formData }: EmailRequest = await req.json();

    const adminEmail = "wajeehamasood570@gmail.com";
    const fromEmail = "LeLeHua <noreply@lelehua.com>";

    // 1. Send confirmation email to user
    let userSubject: string;
    let userHtml: string;

    if (formType === "contact") {
      userSubject = "Thank you for contacting LeLeHua! 🌺";
      userHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #e85d75; font-size: 28px;">LeLeHua</h1>
          </div>
          <h2 style="color: #333;">Thank you, ${userName}!</h2>
          <p style="color: #555; line-height: 1.6;">
            We've received your message and appreciate you reaching out to us. 
            Our team will review your inquiry and get back to you within 24-48 hours.
          </p>
          <div style="background: #f9f0f2; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #555; margin: 0;"><strong>Your message:</strong></p>
            <p style="color: #666; margin: 5px 0 0;">${formData.message || ""}</p>
          </div>
          <p style="color: #555; line-height: 1.6;">
            In the meantime, feel free to explore our <a href="https://lelehua.com/resources" style="color: #e85d75;">resources</a> 
            or follow us on social media!
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="color: #999; font-size: 12px; text-align: center;">
            © LeLeHua | Bilingual Learning Community<br/>
            <a href="https://lelehua.com" style="color: #e85d75;">lelehua.com</a>
          </p>
        </div>
      `;
    } else {
      userSubject = "Welcome to LeLeHua! 🌺";
      userHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #e85d75; font-size: 28px;">LeLeHua</h1>
          </div>
          <h2 style="color: #333;">Welcome to our community, ${userName}!</h2>
          <p style="color: #555; line-height: 1.6;">
            Thank you for joining LeLeHua! We're thrilled to have you and your family 
            as part of our bilingual learning community.
          </p>
          <div style="background: #f9f0f2; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #e85d75; margin-top: 0;">What's Next?</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li>Check out our <a href="https://lelehua.com/resources" style="color: #e85d75;">bilingual resources</a></li>
              <li>Explore our <a href="https://lelehua.com/stories" style="color: #e85d75;">stories</a></li>
              <li>Follow us on social media for daily tips</li>
            </ul>
          </div>
          <p style="color: #555; line-height: 1.6;">
            We'll be in touch soon with more information about our programs and upcoming events!
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="color: #999; font-size: 12px; text-align: center;">
            © LeLeHua | Bilingual Learning Community<br/>
            <a href="https://lelehua.com" style="color: #e85d75;">lelehua.com</a>
          </p>
        </div>
      `;
    }

    // Send to user
    const userEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [userEmail],
        subject: userSubject,
        html: userHtml,
      }),
    });

    if (!userEmailRes.ok) {
      const err = await userEmailRes.text();
      console.error("Failed to send user email:", err);
      throw new Error(`Failed to send confirmation email: ${err}`);
    }

    // 2. Send notification email to admin
    let adminSubject: string;
    let adminHtml: string;

    if (formType === "contact") {
      adminSubject = `New Contact Form: ${formData.subject || "No Subject"}`;
      adminHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
          <h2 style="color: #e85d75;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${userEmail}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Subject</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.subject || "N/A"}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Message</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.message}</td></tr>
          </table>
        </div>
      `;
    } else {
      adminSubject = `New Member Registration: ${formData.parentName}`;
      adminHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
          <h2 style="color: #e85d75;">New Member Registration</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Parent Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.parentName}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${userEmail}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.phone || "N/A"}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Child's Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.childName}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Child's Age</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.childAge}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Languages</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.languages || "N/A"}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Message</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.message || "N/A"}</td></tr>
          </table>
        </div>
      `;
    }

    const adminEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [adminEmail],
        subject: adminSubject,
        html: adminHtml,
      }),
    });

    if (!adminEmailRes.ok) {
      const err = await adminEmailRes.text();
      console.error("Failed to send admin email:", err);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
