# Chartmeister JSON Schema

This repository contains the official JSON schema for `.chartmeister` files, ensuring consistency and validation across all Chartmeister applications and integrations.

## Schema Location

- **Schema File**: `chartmeister-schema.json`
- **Repository**: https://github.com/danielsinewe/chartmeister
- **Schema ID**: `https://github.com/danielsinewe/chartmeister/chartmeister-schema.json`

## Usage

### Validation

You can validate `.chartmeister` files against this schema using any JSON Schema validator:

```bash
# Using ajv-cli
npx ajv-cli validate -s chartmeister-schema.json -d your-file.chartmeister

# Using ajv in Node.js
import Ajv from "ajv";
import schema from "./chartmeister-schema.json" assert { type: "json" };

const ajv = new Ajv({ allErrors: true, strict: false });
const validate = ajv.compile(schema);
const valid = validate(yourChartmeisterData);
```

### IDE Support

Most modern IDEs support JSON Schema validation. To enable it:

1. Add the schema reference to your `.chartmeister` files:
   ```json
   {
     "$schema": "https://github.com/danielsinewe/chartmeister/chartmeister-schema.json",
     "type": "chartmeister",
     "version": 6,
     ...
   }
   ```

2. Your IDE will now provide:
   - Auto-completion
   - Type validation
   - Error highlighting
   - Documentation tooltips

### Programmatic Usage

```ts
import { validate } from "chartmeister";

const result = validate(chartmeisterData);
if (!result.valid) {
  console.error("Validation errors", result.errors);
}
```

## Schema Versioning

The schema follows semantic versioning:

- **Major version changes**: Breaking changes to the format
- **Minor version changes**: New optional properties
- **Patch version changes**: Documentation updates, bug fixes

### Current Version: 6

- **Version 6**: Typography harmonization (font size overrides for labels & legend)
- **Version 5**: Metadata block (`about`) and legend typography controls
- **Version 4**: Value label docking & anchored totals behavior
- **Version 3**: Total bar baseline handling fixes
- **Version 2**: Segmented bar color handling fixes
- **Version 1**: Initial format with basic chart support

## Schema Structure

The schema defines the complete structure for `.chartmeister` files:

- **Root Properties**: `type`, `version`, `source`, `elements`, `appState`, `files`
- **Elements**: Chart bars, connectors, annotations, titles, subtitles, legends
- **App State**: Application configuration and state
- **Visual Config**: Chart appearance and layout settings
- **Layout**: Chart dimensions, margins, spacing

## Contributing

When making changes to the schema:

1. Update the version number
2. Add migration notes for breaking changes
3. Update this README
4. Test with existing `.chartmeister` files
5. Update the main Chartmeister application

## Links

- [Chartmeister Documentation](https://github.com/danielsinewe/chartmeister)
- [JSON Schema Specification](https://json-schema.org/)
- [Getting Started Guide](./docs/getting-started.md)
