import { useRef, useEffect } from "react";

export default function DraggableWindow({ message }) {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    let isDrag = false;
    let startX, startY;

    const down = (e) => {
      isDrag = true;
      startX = e.clientX - box.offsetLeft;
      startY = e.clientY - box.offsetTop;
    };

    const move = (e) => {
      if (!isDrag) return;
      box.style.left = `${e.clientX - startX}px`;
      box.style.top = `${e.clientY - startY}px`;
    };

    const up = () => (isDrag = false);

    box.addEventListener("mousedown", down);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);

    return () => {
      box.removeEventListener("mousedown", down);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <div ref={boxRef} className="holo-confirm">
      <div className="holo-body">{message}</div>
    </div>
  );
}
