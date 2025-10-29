# Chartmeister Release Guide

This guide documents how to cut and publish releases for the Chartmeister library (schema + utilities).

## 🚀 Release Process

1. Ensure `main` is green and `CHANGELOG.md` is up to date.
2. Bump the version locally (this updates `package.json` and creates a tag):

   ```bash
   npm version <patch|minor|major>
   git push origin main --follow-tags
   ```

3. Pushing a tag like `v6.0.1` automatically triggers `.github/workflows/release.yml`, which:
   - installs dependencies with `npm ci`
   - runs `npm run build`
   - publishes the package via npm trusted publishing (`npm publish --provenance --access public`)

4. Optionally draft GitHub release notes from the changelog (the workflow does not create a release automatically).

Manual `npm publish` is no longer required.

## 📦 Package Contents (v6)

```
chartmeister/
├── dist/                     # CJS + ESM bundles and type definitions
├── chartmeister-schema.json  # Schema (version 6)
├── examples/                 # Canonical .chartmeister files
├── README.md                 # Package overview
├── README-schema.md          # Schema usage notes
├── CHANGELOG.md              # Release history
└── LICENSE                   # MIT
```

## 🔧 package.json Highlights

```json
{
  "name": "chartmeister",
  "version": "6.0.0",
  "type": "module",
  "main": "dist/index.cjs",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "chartmeister-schema.json",
    "examples",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "build": "tsup src/index.ts --dts --format cjs,esm --sourcemap",
    "prepublishOnly": "npm run build"
  }
}
```

## ✅ Release Checklist

- [ ] Update `CHANGELOG.md`
- [ ] Run `npm version <patch|minor|major>`
- [ ] Push `main` and the new `v*` tag (`git push origin main --follow-tags`)
- [ ] (Optional) Inspect the workflow run and draft GitHub release notes

## 🎯 Version Strategy

- **Major**: Breaking schema changes or API removals
- **Minor**: Backward-compatible schema additions / new utilities
- **Patch**: Bug fixes, documentation or tooling updates

Keep the schema `version` field in sync with the npm package version for clarity.

## 🔗 Usage Recap

```ts
import { schema, schemaVersion, validate } from "chartmeister";
import schemaJson from "chartmeister/chartmeister-schema.json" with { type: "json" };

const { valid, errors } = validate(fileUnderTest);
```

Example files ship at `chartmeister/examples/*.chartmeister`.

## 🧪 Smoke Test Before Publishing

```bash
npm pack --dry-run
mkdir -p /tmp/chartmeister-release-test
cd /tmp/chartmeister-release-test
npm install ../chartmeister-<version>.tgz
node -e "const lib = require('chartmeister/dist/index.cjs'); console.log(lib.schemaVersion);"
```

## 📈 Release History

See [`CHANGELOG.md`](./CHANGELOG.md) for detailed release notes.
