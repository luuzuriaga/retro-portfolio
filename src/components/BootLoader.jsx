// src/components/BootLoader.jsx
import { useEffect, useState } from "react";
import circleGif from "../assets/gif/circle.gif";

export default function BootLoader({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 3000); // show for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center text-green-300 text-sm sm:text-lg font-mono">
      <div className="flex flex-col items-center gap-4">
        <img src={circleGif} alt="Booting..." className="w-full h-32 sm:h-44" />
        <p>Initiating synchronization…</p>
      </div>
    </div>
  );
}
