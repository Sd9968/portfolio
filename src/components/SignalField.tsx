"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
};

/**
 * Full-bleed atmospheric field — nodes drift and gently pull toward the cursor.
 */
export function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let nodes: Node[] = [];
    let raf = 0;
    let running = true;
    const pointer = { x: -9999, y: -9999, active: false };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((w * h) / 24000);
      nodes = Array.from({ length: Math.max(22, Math.min(count, 48)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: 1.2 + Math.random() * 2.4,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside =
        x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      pointer.x = x;
      pointer.y = y;
      pointer.active = inside;
    };

    const draw = () => {
      if (!running) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      if (pointer.active) {
        const spotlight = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          220,
        );
        spotlight.addColorStop(0, "rgba(212, 87, 42, 0.16)");
        spotlight.addColorStop(0.45, "rgba(15, 42, 36, 0.06)");
        spotlight.addColorStop(1, "rgba(221, 229, 234, 0)");
        ctx.fillStyle = spotlight;
        ctx.fillRect(0, 0, w, h);
      }

      const linkDist = Math.min(170, w * 0.2);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        if (pointer.active && !reduced) {
          const dx = pointer.x - a.x;
          const dy = pointer.y - a.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < 220) {
            const force = (1 - dist / 220) * 0.045;
            a.vx += (dx / dist) * force;
            a.vy += (dy / dist) * force;
          }
        }

        a.vx *= 0.99;
        a.vy *= 0.99;
        a.x += a.vx;
        a.y += a.vy;
        a.pulse += 0.02;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        a.x = Math.max(0, Math.min(w, a.x));
        a.y = Math.max(0, Math.min(h, a.y));

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const alpha = (1 - d / linkDist) * 0.28;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(15, 42, 36, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        if (pointer.active) {
          const pd = Math.hypot(a.x - pointer.x, a.y - pointer.y);
          if (pd < 140) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.strokeStyle = `rgba(212, 87, 42, ${(1 - pd / 140) * 0.35})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        const glow = 0.45 + Math.sin(a.pulse) * 0.25;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r + glow, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(212, 87, 42, 0.14)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(15, 42, 36, 0.6)";
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="signal-field" aria-hidden="true" />;
}
