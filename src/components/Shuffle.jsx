import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Shuffle = ({
  text,
  className = "",
  style = {},
  shuffleDirection = "right",
  duration = 0.35,
  ease = "power3.out",
  threshold = 0.1,
  rootMargin = "-100px",
  tag = "p",
  textAlign = "center",
  colorFrom,
  colorTo,
  triggerOnce = true,
  respectReducedMotion = true,
  triggerOnHover = true,
  stagger = 0.03,
}) => {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ref.current || !text) return;

    // Respect reduced motion
    if (
      respectReducedMotion &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setReady(true);
      return;
    }

    const el = ref.current;

    // Split text into chars
    const split = new SplitType(el, { types: "chars" });

    const chars = split.chars;

    // GSAP animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: `top ${(1 - threshold) * 100}% ${rootMargin}`,
        once: triggerOnce,
      },
      onComplete: () => setReady(true),
    });

    tl.fromTo(
      chars,
      {
        opacity: 0,
        x: shuffleDirection === "right" ? 40 : -40,
        color: colorFrom || "inherit",
      },
      {
        opacity: 1,
        x: 0,
        duration,
        ease,
        stagger,
        color: colorTo || "inherit",
      }
    );

    // Optional hover trigger
    if (triggerOnHover) {
      const hoverAnim = () => {
        gsap.fromTo(
          chars,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, stagger: 0.02 }
        );
      };
      el.addEventListener("mouseenter", hoverAnim);
      return () => {
        el.removeEventListener("mouseenter", hoverAnim);
        split.revert();
        tl.kill();
      };
    }

    return () => {
      split.revert();
      tl.kill();
    };
  }, [text, duration, ease, shuffleDirection, stagger, colorFrom, colorTo]);

  const baseTw =
    "inline-block whitespace-normal break-words will-change-transform uppercase leading-none";
  const commonStyle = {
    textAlign,
    fontFamily: `'Press Start 2P', sans-serif`,
    ...style,
  };

  const classes = `${baseTw} ${ready ? "visible" : "invisible"} ${className}`.trim();
  const Tag = tag || "p";

  return React.createElement(Tag, { ref: ref, className: classes, style: commonStyle }, text);
};

export default Shuffle;
