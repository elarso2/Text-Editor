const butInstall = document.getElementById("buttonInstall");

// Event handler for before install
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

// Event handler for installation
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

// clear prompt after install
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
