import type React from "react";
import { useMemo, useState } from "react";
import { useColorStore } from "../utils/colorStore";
import { useCopyText } from "../hooks";

const STORAGE_KEY = "wf-color-palette";

export const PaletteExport: React.FC = () => {
  const colorObject = useColorStore((s) => s.colorObject);
  const [entries, setEntries] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as string[]) : [];
    } catch {
      return [];
    }
  });
  const { copyText, copied } = useCopyText();

  const current = useMemo(() => colorObject.hex?.toUpperCase() ?? "#000000", [colorObject.hex]);

  const persist = (next: string[]) => {
    setEntries(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const add = () => {
    if (entries.includes(current)) return;
    persist([...entries, current].slice(-12));
  };

  const clear = () => persist([]);

  const css = entries.length
    ? `:root {\n${entries.map((c, i) => `  --palette-${i + 1}: ${c};`).join("\n")}\n}`
  : "";
  const json = JSON.stringify({ palette: entries }, null, 2);

  return (
    <section className="palette-export" aria-label="Palette export">
      <h2 className="palette-export__title">Palette (local)</h2>
      <p className="palette-export__lead">Save swatches on this device and export as CSS variables or JSON.</p>
      <div className="palette-export__swatches">
        {entries.map((c) => (
          <span key={c} className="palette-export__swatch" style={{ background: c }} title={c} />
        ))}
      </div>
      <div className="palette-export__actions">
        <button type="button" onClick={add}>
          Add current color
        </button>
        <button type="button" onClick={clear}>
          Clear palette
        </button>
      </div>
      <div className="palette-export__outputs">
        <div>
          <h3>CSS</h3>
          <textarea readOnly value={css} rows={4} aria-label="CSS export" />
          <button type="button" onClick={() => copyText(css)} data-copied={copied}>
            Copy CSS
          </button>
        </div>
        <div>
          <h3>JSON</h3>
          <textarea readOnly value={json} rows={4} aria-label="JSON export" />
          <button type="button" onClick={() => copyText(json)}>
            Copy JSON
          </button>
        </div>
      </div>
    </section>
  );
};