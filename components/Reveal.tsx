"use client";

import { useCallback, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: Props) {
  const [visible, setVisible] = useState(false);

  const setRef = useCallback((node: Element | null) => {
    if (!node || visible) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    obs.observe(node);
  }, [visible]);

  const Element = Tag as React.ElementType;
  return (
    <Element
      ref={setRef}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Element>
  );
}
