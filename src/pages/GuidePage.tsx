import type { FC } from "react";
import { Link } from "react-router-dom";
import { Picker } from "../components/Picker";
import { ImageColorPicker } from "../components/ImageColorPicker";
import { pageForPath } from "../seo/pages";

export const GuidePage: FC<{ path: string }> = ({ path }) => {
  const page = pageForPath(path);
  return (
    <article className="wf-guide">
      {page.faq.length > 0 ? (
        <section className="wf-faq" aria-label="FAQ">
          <h2 className="visually-hidden">FAQ</h2>
          {page.faq.map((f) => (
            <div key={f.q} className="wf-faq-item">
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </section>
      ) : null}
      {path === "/color-picker-from-image" ? (
        <>
          <ImageColorPicker />
          <p className="wf-guide-note">
            Sampled colors sync with the main picker below.{" "}
            <Link to="/">Open full picker</Link>.
          </p>
        </>
      ) : null}
      <form onSubmit={(e) => e.preventDefault()}>
        <Picker />
      </form>
    </article>
  );
};