# Chartmeister (Schema + Examples)

[![npm version](https://img.shields.io/npm/v/chartmeister.svg)](https://www.npmjs.com/package/chartmeister)

[![npm version](https://badge.fury.io/js/chartmeister.svg)](https://badge.fury.io/js/chartmeister)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Authoritative JSON schema for `.chartmeister` files plus canonical examples and the lightweight utilities used by [chartmeister.ai](https://chartmeister.ai).

## Contents

- `chartmeister-schema.json` – schema v6 for `.chartmeister` files
- `examples/` – canonical chart files (`default.chartmeister`, `openai.chartmeister`)
- `dist/` – runtime helpers and type definitions (`validate`, `schemaVersion`, `schema`)

## Install

```bash
npm install chartmeister
```

## Usage

```ts
import { schema, schemaVersion, validate } from "chartmeister";

// Validate a chartmeister file
const result = validate(file);
if (!result.valid) {
  console.error(result.errors);
}

// Load the schema directly (Node >= 18)
import schemaJson from "chartmeister/chartmeister-schema.json" assert { type: "json" };
```

## Schema v6 highlights

- Font size overrides for value labels, category labels, axis labels, and legend labels (typography harmonization)
- `about` metadata block for provenance (title, description, authors, license, timestamps)
- Legend layout controls (`legendMaxWidth`, icon shape overrides)
- Clarified anchored totals and label docking for segmented bars

See the full schema in [`chartmeister-schema.json`](./chartmeister-schema.json).

## Examples

- [`examples/default.chartmeister`](./examples/default.chartmeister) – baseline waterfall chart
- [`examples/openai.chartmeister`](./examples/openai.chartmeister) – OpenAI SWE-bench chart

Open the Chartmeister app, import one of the example files, and iterate from there.

## Development

```bash
npm install
npm run build
```

Building requires Node.js 18+ and produces CommonJS + ESM bundles in `dist/`.

## License

MIT License – see [LICENSE](./LICENSE).
