import { useState, useEffect, useRef } from 'react';

interface CountUpOptions {
  start?: number;
  duration?: number;
  decimals?: number;
  useEasing?: boolean;
}

export const useCountUp = (
  end: number,
  options: CountUpOptions = {}
) => {
  const {
    start = 0,
    duration = 2000,
    decimals = 0,
    useEasing = true
  } = options;

  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);

  // Intersection Observer para detectar quando o elemento fica visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animação do contador
  useEffect(() => {
    if (!isVisible) return;

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      
      // Função de easing (ease-out)
      const progress = useEasing
        ? 1 - Math.pow(1 - frame / totalFrames, 3)
        : frame / totalFrames;

      const currentCount = Math.round(start + (end - start) * progress);

      if (frame === totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(currentCount);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [isVisible, end, start, totalFrames, frameRate, useEasing]);

  return { count, elementRef };
};