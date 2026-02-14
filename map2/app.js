// app.js - registra el Service Worker (PWA)
(() => {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", async () => {
    try {
      const reg = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
      // Opcional: console.log("SW registrado:", reg.scope);
    } catch (e) {
      console.warn("No se pudo registrar el SW:", e);
    }
  });
})();
