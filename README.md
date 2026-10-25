# Dino Crossing v1.2.20 PWA

This is the original v1.2.20 game packaged as a Progressive Web App. No gameplay changes were made.

## Publish on GitHub Pages
1. Create a public GitHub repository, e.g. `dino-crossing`.
2. Upload the CONTENTS of this folder to the repository root: `index.html`, `sw.js`, `manifest.webmanifest`, and the `icons` folder.
3. In repository Settings > Pages, select Deploy from a branch, `main`, folder `/ (root)`, then Save.
4. Wait for deployment and open the resulting `https://YOUR-USERNAME.github.io/dino-crossing/` link in Chrome on your Android phone.
5. Chrome menu (three dots) > Install app or Add to Home screen.

## Important notes
- The first launch needs internet because the game imports Three.js from jsDelivr (or unpkg as a fallback). After a successful online load, the service worker caches the engine for later offline use. Refresh online once after installing to make sure the engine is cached under service-worker control.
- Saved game progress uses browser localStorage. Installing from a new website origin does NOT automatically transfer progress from a previously downloaded HTML file.
- Updating the hosted game requires publishing updated files and updating the CACHE string in `sw.js`.
- Opening `index.html` directly as a file does not enable PWA installation or the service worker. HTTPS hosting is required.
