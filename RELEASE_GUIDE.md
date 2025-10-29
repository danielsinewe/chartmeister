# Chartmeister Release Guide

This guide documents how to cut and publish releases for the Chartmeister library (schema + utilities).

## 🚀 Release Process

1. Ensure `main` is green and `CHANGELOG.md` is up to date.
2. Bump the version:

   ```bash
   npm version <patch|minor|major>
   ```

3. Build the distributable and verify the output:

   ```bash
   npm install
   npm run build
   npm pack --dry-run
   ```

4. Commit the changes, push, and create a tag (for example `v6.0.0`).
5. Publish:

   ```bash
   npm publish --access public
   ```

6. Draft GitHub release notes from the changelog.

Automations are optional—the process above works locally and in CI.

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
- [ ] Bump `version` in `package.json`
- [ ] Run `npm install`
- [ ] Run `npm run build`
- [ ] `npm pack --dry-run` to inspect the tarball
- [ ] Publish (`npm publish --access public`)
- [ ] Create Git tag / GitHub release

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
