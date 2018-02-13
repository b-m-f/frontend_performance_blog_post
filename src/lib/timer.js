let timer = { start: Date.now() };

if (typeof window !== "undefined") {
  timer = window.__timer__;
}

export default timer;
