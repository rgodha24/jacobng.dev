export function viewport(
  element: Element,
  { onEnter, onExit }: { onEnter: () => void; onExit: () => void }
) {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting
          ? onEnter()
          : (() => {
            onExit();
          })();
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  );

  obs.observe(element);

  return {
    destroy() {
      obs.unobserve(element);
      obs.disconnect();
    },
  };
}
