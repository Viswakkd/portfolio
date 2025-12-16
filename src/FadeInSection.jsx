import { useEffect, useRef, useState } from "react";
import './FadeInSection.css';

export default function FadeInSection({ children }) {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setShow(entry.isIntersecting);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in ${show ? "show" : ""}`}>
      {children}
    </div>
  );
}
