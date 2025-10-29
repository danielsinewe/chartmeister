# Contributing to Chartmeister

Thank you for helping improve Chartmeister! This document outlines how to work on the schema, utilities, and examples that ship in the npm package.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm
- Git

### Setup
```bash
git clone https://github.com/danielsinewe/chartmeister.git
cd chartmeister
npm install
npm run build
```

`npm run build` bundles the library (CJS + ESM + types) and validates that the TypeScript definitions compile.

## 🧩 What You Can Work On
- **Schema** & migrations (`chartmeister-schema.json`, `src/index.ts`)
- **Examples** (`examples/*.chartmeister`)
- **Documentation** (`README.md`, `README-schema.md`, docs/*)
- **Tooling** (build config, release docs)

## 🔄 Workflow
1. Create a feature branch: `git checkout -b feature/my-improvement`
2. Make changes (schema, docs, examples, etc.)
3. Run checks:
   ```bash
   npm run build
   npx ajv-cli validate -s chartmeister-schema.json -d "examples/*.chartmeister"
   ```
4. Commit with a conventional message (e.g. `feat: add axis label font overrides`)
5. Push and open a pull request

## 🏗 Schema Changes
1. Update `chartmeister-schema.json`
2. Document new fields in `README-schema.md`
3. If runtime helpers need to expose the change, adjust `src/index.ts`
4. Regenerate the build: `npm run build`
5. Add/adjust example files to demonstrate the new capability (keep them minimal but valid)

## 📁 Examples
- Place canonical examples in `examples/`
- Use the `.chartmeister` extension (they must be valid JSON)
- Include all required schema fields (`type`, `version`, `source`, `elements`, `appState`, `files`)
- Validate with `npx ajv-cli ...`

## 📝 Documentation
- Update `README.md` for high-level changes
- Extend `docs/` guides when adding new concepts
- Keep the changelog current (`CHANGELOG.md`)

## 🧪 Testing Checklist
- `npm run build`
- `npx ajv-cli validate -s chartmeister-schema.json -d "examples/*.chartmeister"`
- Optional: import the example into [chartmeister.ai](https://chartmeister.ai) to smoke test visuals

## 🚢 Releases
See [`RELEASE_GUIDE.md`](./RELEASE_GUIDE.md) for the full workflow. In short:
```bash
npm version <patch|minor|major>
npm run build
npm publish --access public
```

Thanks for making Chartmeister better!
