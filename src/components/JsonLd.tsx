import type { FC } from "react";
import type { SeoPage } from "../seo/pages";
import { canonicalFor } from "../seo/pages";
import { SITE } from "../site";

interface Props {
  page: SeoPage;
}

export const JsonLd: FC<Props> = ({ page }) => {
  const url = canonicalFor(page.path);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: SITE.name,
        url,
        applicationCategory: "DesignApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        inLanguage: "en",
      },
      ...(page.faq.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: page.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]
        : []),
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
};