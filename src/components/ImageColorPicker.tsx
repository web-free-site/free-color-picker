import type React from "react";
import { useCallback, useRef, useState } from "react";
import { formatRgb, parse } from "culori";
import { useColorStore } from "../utils/colorStore";
import { createColorObject } from "../utils/colorConversion";

function toHex(rgb: { r: number; g: number; b: number; alpha?: number }): string {
  const f = (n: number) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0");
  const a = rgb.alpha !== undefined && rgb.alpha < 1 ? f(rgb.alpha * 255) : "";
  return `#${f(rgb.r)}${f(rgb.g)}${f(rgb.b)}${a}`.toUpperCase();
}

export const ImageColorPicker: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [hint, setHint] = useState("Upload an image, then click a pixel to sample its color.");
  const [sample, setSample] = useState<string | null>(null);
  const setColor = useColorStore((s) => s.setColor);

  const drawImage = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const maxW = 560;
    const scale = Math.min(1, maxW / img.naturalWidth);
    canvas.width = Math.round(img.naturalWidth * scale);
    canvas.height = Math.round(img.naturalHeight * scale);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    setHint("Click the image to pick a color.");
  }, []);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      imgRef.current = img;
      drawImage(img);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const onCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !imgRef.current) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * canvas.height);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const [r, g, b, a] = ctx.getImageData(x, y, 1, 1).data;
    const hex = toHex({ r, g, b, alpha: a / 255 });
    setSample(`${hex} · rgb(${r}, ${g}, ${b})`);
    const parsed = parse(hex);
    if (parsed) {
      const next = createColorObject(formatRgb(parsed) ?? `rgb(${r} ${g} ${b})`, "rgb");
      if (next) setColor(next);
    }
  };

  return (
    <section className="image-picker" aria-label="Pick color from image">
      <p className="image-picker__hint">{hint}</p>
      <label className="image-picker__upload">
        <span>Choose image file</span>
        <input type="file" accept="image/*" onChange={onFile} />
      </label>
      <canvas
        ref={canvasRef}
        className="image-picker__canvas"
        onClick={onCanvasClick}
        role="img"
        aria-label="Uploaded image — click to sample"
      />
      {sample ? <p className="image-picker__sample">Sampled: {sample}</p> : null}
    </section>
  );
};