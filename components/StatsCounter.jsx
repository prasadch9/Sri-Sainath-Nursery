"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(value) {
  const match = String(value).match(/^([\d,]+)(.*)$/);
  return {
    target: parseInt(match[1].replace(/,/g, ""), 10),
    suffix: match[2] || "",
  };
}

function CounterItem({ value, label, duration = 1800 }) {
  const { target, suffix } = parseValue(value);
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setCount(target);
      return;
    }

    let frameId;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // fast start, smooth end
        setCount(Math.round(target * eased));
        if (progress < 1) frameId = requestAnimationFrame(tick);
      };
      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [target, duration]);

  return (
    <div ref={ref}>
      <p className="text-3xl font-extrabold text-forest sm:text-4xl">
        {count.toLocaleString("en-US")}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-gray-600">{label}</p>
    </div>
  );
}

export default function StatsCounter({ stats }) {
  return (
    <>
      {stats.map(([value, label]) => (
        <CounterItem key={label} value={value} label={label} />
      ))}
    </>
  );
}