import type { FC } from "react";
import { SITE } from "../site";

type Kind = "privacy" | "terms" | "about" | "contact";

export const LegalPage: FC<{ kind: Kind }> = ({ kind }) => {
  if (kind === "about") {
    return (
      <article className="wf-legal">
        <p>
          <strong>{SITE.name}</strong> is part of the{" "}
          <a href={SITE.hubUrl}>web-free.site</a> collection of browser-based tools. It helps you
          pick and convert colors without installing software or creating an account.
        </p>
        <p>
          The interactive picker is based on{" "}
          <a href={SITE.upstreamUrl} rel="noopener noreferrer">
            colorpicker.dev
          </a>{" "}
          by {SITE.upstreamAuthor}, licensed under the{" "}
          <a href={SITE.upstreamRepo} rel="noopener noreferrer">
            MIT License
          </a>
          . We keep the LICENSE file in this repository and credit the upstream project in the footer.
        </p>
        <p>
          Enhancements for this deployment (branding, SEO pages, ads placeholders, and hub links) are
          maintained for web-free.site. Color math still runs entirely in your browser via culori.
        </p>
      </article>
    );
  }

  if (kind === "contact") {
    return (
      <article className="wf-legal">
        <p>
          For questions about this site, email{" "}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
        </p>
        <p>
          For the upstream MIT project, see{" "}
          <a href={SITE.upstreamRepo} rel="noopener noreferrer">
            github.com/imathis/color-picker
          </a>
          .
        </p>
      </article>
    );
  }

  if (kind === "privacy") {
    return (
      <article className="wf-legal">
        <p>
          <strong>Local data.</strong> Your chosen colors may be stored in your browser&apos;s local
          storage so sliders remember your settings. Images you upload for sampling are not sent to our
          servers.
        </p>
        <p>
          <strong>Analytics.</strong> We use Cloudflare Web Analytics (privacy-oriented, cookieless
          aggregate metrics) on static pages.
        </p>
        <p>
          <strong>Advertising.</strong> This site may show Adsterra placements. Ad networks may use
          their own cookies or identifiers under their policies. Ad slots are isolated in iframes where
          possible so they do not block color picking.
        </p>
        <p>
          <strong>Referrals.</strong> Links to other web-free.site tools include <code>?ref=color-picker</code>{" "}
          for attribution.
        </p>
      </article>
    );
  }

  return (
    <article className="wf-legal">
      <p>
        {SITE.name} is provided free of charge. You may use it for personal or commercial design work.
        There is no guarantee of availability or accuracy of color conversions across all displays.
      </p>
      <p>
        The software is offered &quot;as is&quot; without warranty. Liability is limited to the extent
        permitted by law. Continued use constitutes acceptance of these terms.
      </p>
    </article>
  );
};