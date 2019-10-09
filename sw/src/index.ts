
async function main() {
  const swc = window.navigator.serviceWorker;

  if (swc) {
    await swc.register('/sw.js');
    document.querySelector('body main').textContent = 'Service worker is on.';
  }
}

main();
