if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/Pokedex-PWA/sw.js', { scope: '/Pokedex-PWA/' })})}