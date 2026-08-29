import { useCallback, useRef } from "react";

/**
 * Attaches an IntersectionObserver to an element and adds `is-visible`
 * when it scrolls into view. Automatically handles DOM remounts (e.g. key changes).
 */
export default function useReveal(options = {}) {
  const observerRef = useRef(null);

  const ref = useCallback(
    (node) => {
      // Clean up previous observer instance if present
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      if (node) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observerRef.current?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15, rootMargin: "0px 0px -8% 0px", ...options },
        );

        observerRef.current.observe(node);
      }
    },
    [options],
  );

  return ref;
}
