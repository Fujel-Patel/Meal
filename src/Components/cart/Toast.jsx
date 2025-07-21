import React, { useEffect, useState } from "react";

function Toast({ message, show, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let fadeOut;
    if (show) {
      setVisible(true);
      fadeOut = setTimeout(() => setVisible(false), 2600); // 2.6s visible, 0.4s fade = total 3s
      const autoClose = setTimeout(onClose, 3000);
      return () => {
        clearTimeout(fadeOut);
        clearTimeout(autoClose);
      };
    } else {
      setVisible(false);
    }
  }, [show, onClose]);

  // Mount for fade-out effect
  if (!show && !visible) return null;

  return (
    <div
      className={
        `fixed bottom-8 left-1/2 transform -translate-x-1/2 ` +
        `bg-green-800 text-white py-3 px-6 rounded shadow-lg z-50 ` +
        `transition-opacity duration-500 ` + // 0.5s fade
        (visible ? "opacity-100" : "opacity-0 pointer-events-none")
      }
    >
      {message}
    </div>
  );
}

export default Toast;
