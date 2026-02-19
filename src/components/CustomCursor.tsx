import { useEffect, useState, useCallback } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [outerPos, setOuterPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    // Only on non-touch, non-mobile devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth < 768;
    if (isTouchDevice || isSmallScreen) return;

    // Hide default cursor globally
    document.documentElement.style.cursor = "none";
    const style = document.createElement("style");
    style.id = "custom-cursor-style";
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    setVisible(true);

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, label[for]")) {
        setHovering(true);
      }
    };
    const onOut = () => setHovering(false);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setPos({ x: -100, y: -100 });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.style.cursor = "";
      document.getElementById("custom-cursor-style")?.remove();
    };
  }, []);

  useEffect(() => {
    let raf: number;
    const follow = () => {
      setOuterPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }));
      raf = requestAnimationFrame(follow);
    };
    follow();
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  if (!visible) return null;

  const dotSize = clicking ? 4 : 6;
  const ringSize = hovering ? 48 : clicking ? 24 : 32;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-foreground mix-blend-difference"
        style={{
          width: dotSize,
          height: dotSize,
          left: pos.x - dotSize / 2,
          top: pos.y - dotSize / 2,
          transition: "width 0.15s, height 0.15s",
        }}
      />
      <div
        className="pointer-events-none fixed z-[9998] rounded-full border border-foreground/60 mix-blend-difference"
        style={{
          width: ringSize,
          height: ringSize,
          left: outerPos.x - ringSize / 2,
          top: outerPos.y - ringSize / 2,
          transition: "width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s",
          backgroundColor: hovering ? "rgba(255,255,255,0.1)" : "transparent",
        }}
      />
    </>
  );
};

export default CustomCursor;
