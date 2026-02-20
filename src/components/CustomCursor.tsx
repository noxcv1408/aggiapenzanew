import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) return;
    setVisible(true);

    // All position tracking via plain vars — zero React re-renders on move
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let isHovering = false;
    let rafId: number;

    const applyHover = (h: boolean) => {
      if (isHovering === h) return;
      isHovering = h;
      const ring = ringRef.current;
      if (!ring) return;
      const size = h ? 48 : 32;
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.backgroundColor = h ? "rgba(255,255,255,0.08)" : "transparent";
      ring.classList.toggle("cursor-breathe", !h);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Inner dot: zero lag — update synchronously in event handler
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX - 3}px`;
        dotRef.current.style.top = `${mouseY - 3}px`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      applyHover(!!t.closest("a, button, [role='button'], input, textarea"));
    };

    // Single persistent RAF — never cancelled/restarted on mouse move
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      const ring = ringRef.current;
      if (ring) {
        const offset = isHovering ? 24 : 16;
        ring.style.left = `${ringX - offset}px`;
        ring.style.top = `${ringY - offset}px`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Inner dot — position set directly via DOM, no re-renders */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] rounded-full bg-primary"
        style={{ width: 6, height: 6 }}
      />
      {/* Outer ring — RAF smooth follow, CSS transitions only for size/color */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] rounded-full border border-primary cursor-breathe"
        style={{
          width: 32,
          height: 32,
          transition: "width 300ms, height 300ms, background-color 300ms",
        }}
      />
    </>
  );
};

export default CustomCursor;
