# japan.razuvaev.me

The game is a standalone static application. There is no API server, login, database or secret required. Client game saves and language preference remain in each browser's localStorage. External data comes from OpenFreeMap/OSM, Wikipedia and ExchangeRate-API.

## Integrate into the existing /razuvaev project

Copy the verified `source/` release bundle into a dedicated `japan/` folder. Keep its `assets/`, `scripts/`, tests and licenses. Do not put it into the portfolio's Vue source or replace the portfolio's index page.

Add `"build:japan": "node japan/scripts/build-static.mjs"` to the root package.json and append `npm run build:japan` to the existing build command. The current Gitea workflow builds `/home/friendly/repo/razuvaev`; the game output will be `japan/dist`. A suggested separate Nginx virtual host is included, but the actual server and TLS configuration must first be confirmed.

Create only the `japan` DNS record in the existing Cloudflare zone, pointing it to the confirmed hosting origin. Do not change the apex or existing portfolio records. Set up a valid HTTPS certificate using the existing hosting method. Check the public HTTPS URL and its manifest after deployment.

## GitHub Pages alternative

The original `.github/workflows/pages.yml` also supports the static game. In repository Pages settings, choose GitHub Actions. For GitHub Pages specifically, set custom domain `japan.razuvaev.me`, and make the `japan` CNAME point to `razuv.github.io` (not `razuv.github.io/jp`). Enable HTTPS after DNS/certificate verification. Do not apply both hosting configurations simultaneously.

No live domain or server changes are made by building this package. Build: `node scripts/build-static.mjs /path/to/output`. Run tests: `node --test tests/*.test.cjs`.
