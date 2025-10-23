# Chartmeister JSON Schema

This repository contains the official JSON schema for `.chartmeister` files, ensuring consistency and validation across all Chartmeister applications.

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
import Ajv from 'ajv';
import schema from './chartmeister-schema.json';

const ajv = new Ajv();
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
     "version": 2,
     ...
   }
   ```

2. Your IDE will now provide:
   - Auto-completion
   - Type validation
   - Error highlighting
   - Documentation tooltips

### Programmatic Usage

```typescript
import { validateChartmeisterFile } from '@chartmeister/validation';

const result = validateChartmeisterFile(chartmeisterData);
if (result.valid) {
  console.log('Valid chartmeister file');
} else {
  console.error('Validation errors:', result.errors);
}
```

## Schema Versioning

The schema follows semantic versioning:

- **Major version changes**: Breaking changes to the format
- **Minor version changes**: New optional properties
- **Patch version changes**: Documentation updates, bug fixes

### Current Version: 2

- **Version 1**: Initial format with basic chart support
- **Version 2**: Enhanced format with improved color handling for segmented bars

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
- [Chartmeister Format Guide](https://github.com/danielsinewe/chartmeister/docs/json-schema.md)
