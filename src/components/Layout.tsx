import type { FC, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { AdSlot, SponsoredSmartlink, useAdScripts } from "./ads/AdSlot";
import { SITE } from "../site";
import { pageForPath } from "../seo/pages";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  const location = useLocation();
  const page = pageForPath(location.pathname || "/");
  useAdScripts();
  const isHome = location.pathname === "/";

  return (
    <div id="app" className="wf-site">
      <header className="banner wf-header">
        <AdSlot slot="header728x90" className="ad-header" label="Sponsored" />
        <div className="preamble">Pick · convert · copy</div>
        <h1>{page.h1}</h1>
        <p className="wf-lead">{page.intro}</p>
        <nav className="wf-nav" aria-label="Main">
          <Link to="/">Picker</Link>
          <Link to="/hex-color-picker">HEX guide</Link>
          <Link to="/color-picker-from-image">From image</Link>
          <Link to="/rgb-to-hex">RGB to HEX</Link>
        </nav>
        {isHome ? <AdSlot slot="homeTop728x90" className="ad-home-top" /> : null}
      </header>

      <div className="wf-body">
        <main className="wf-main">{children}</main>
        <aside className="wf-sidebar" aria-label="Sidebar">
          <AdSlot slot="sidebar160x600" className="ad-sidebar" />
        </aside>
      </div>

      <AdSlot slot="betweenToolContent728x90" className="ad-mid" />
      <AdSlot slot="mobileSticky320x50" className="ad-mobile-sticky" label="Sponsored" />
      <AdSlot slot="nativeBelowResult" className="ad-native" />
      <AdSlot slot="content300x250" className="ad-content" />

      <footer>
        <div className="footer-links">
          <span>
            <a href={SITE.hubUrl} rel="noopener noreferrer">
              web-free.site
            </a>
          </span>
          <span className="divider">|</span>
          <span>
            <Link to="/about">About</Link>
            {" · "}
            <Link to="/privacy">Privacy</Link>
            {" · "}
            <Link to="/terms">Terms</Link>
            {" · "}
            <Link to="/contact">Contact</Link>
          </span>
          <span className="divider">|</span>
          <span>
            MIT{" "}
            <a href={SITE.upstreamRepo} rel="noopener noreferrer">
              color-picker
            </a>{" "}
            by{" "}
            <a href={SITE.upstreamUrl} rel="noopener noreferrer">
              {SITE.upstreamAuthor}
            </a>
          </span>
        </div>
        <SponsoredSmartlink />
      </footer>
      <div id="ad-social-bar-root" className="ad-social-root" />
      <div id="ad-popunder-root" className="ad-popunder-root" hidden />
    </div>
  );
};