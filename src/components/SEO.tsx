import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
}

const SEO = ({ title, description, canonicalUrl }: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (canonical) {
        canonical.setAttribute("href", canonicalUrl);
      } else {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        canonical.setAttribute("href", canonicalUrl);
        document.head.appendChild(canonical);
      }
    }

    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    // Cleanup function to reset to default when component unmounts
    return () => {
      document.title = "Lelehua";
    };
  }, [title, description, canonicalUrl]);

  return null;
};

export default SEO;
