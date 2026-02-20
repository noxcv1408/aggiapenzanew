import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [outerPos, setOuterPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    setVisible(true);

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea")) {
        setHovering(true);
      }
    };
    const onOut = () => setHovering(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  useEffect(() => {
    let raf: number;
    const follow = () => {
      setOuterPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));
      raf = requestAnimationFrame(follow);
    };
    follow();
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  if (!visible) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-primary"
        style={{
          width: 6,
          height: 6,
          left: pos.x - 3,
          top: pos.y - 3,
        }}
      />
      <div
        className={`pointer-events-none fixed z-[9998] rounded-full border border-primary transition-all duration-300 ${
          hovering ? "" : "cursor-breathe"
        }`}
        style={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          left: outerPos.x - (hovering ? 24 : 16),
          top: outerPos.y - (hovering ? 24 : 16),
          backgroundColor: hovering ? "rgba(255,255,255,0.08)" : "transparent",
        }}
      />
    </>
  );
};

export default CustomCursor;
