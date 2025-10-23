# Getting Started with Chartmeister

Welcome to the Chartmeister library! This guide will help you get started with the `.chartmeister` file format.

## What is Chartmeister?

Chartmeister is a JSON-based file format for saving and loading chart data and visual configurations. It's designed to be:

- **Human-readable**: Easy to understand and edit
- **Version-controlled**: Track changes in Git
- **Portable**: Works across different applications
- **Extensible**: Support for custom properties

## Quick Start

### 1. Install the Library

```bash
npm install chartmeister
```

### 2. Validate Your Files

```bash
# Validate all chart files
npm run validate:all

# Validate specific files
npx ajv validate -s chartmeister-schema.json -d your-file.chartmeister
```

### 3. Use in Your Application

```javascript
const schema = require('chartmeister/chartmeister-schema.json');

// Validate a chartmeister file
const ajv = new Ajv();
const validate = ajv.compile(schema);
const isValid = validate(yourChartData);
```

## File Structure

A basic `.chartmeister` file looks like this:

```json
{
  "version": 2,
  "type": "chartmeister",
  "source": "chartmeister-app",
  "elements": [
    {
      "id": "bar-1",
      "type": "bar",
      "x": 0,
      "y": 0,
      "width": 100,
      "height": 40,
      "label": "My Bar",
      "value": 100,
      "color": "#2f5f98"
    }
  ],
  "title": {
    "text": "My Chart",
    "subtitle": "Chart Description"
  }
}
```

## Examples

### Basic Waterfall Chart

```json
{
  "version": 2,
  "type": "chartmeister",
  "source": "chartmeister-app",
  "elements": [
    {
      "id": "start",
      "type": "bar",
      "x": 0,
      "y": 0,
      "width": 100,
      "height": 40,
      "label": "Start",
      "value": 1000,
      "color": "#2f5f98"
    },
    {
      "id": "revenue",
      "type": "bar",
      "x": 120,
      "y": 0,
      "width": 100,
      "height": 40,
      "label": "Revenue",
      "value": 500,
      "color": "#2d8bba"
    },
    {
      "id": "costs",
      "type": "bar",
      "x": 240,
      "y": 0,
      "width": 100,
      "height": 40,
      "label": "Costs",
      "value": -200,
      "color": "#41b8d5"
    }
  ]
}
```

### Segmented Bar Chart

```json
{
  "version": 2,
  "type": "chartmeister",
  "source": "chartmeister-app",
  "elements": [
    {
      "id": "segmented-bar",
      "type": "bar",
      "x": 0,
      "y": 0,
      "width": 200,
      "height": 60,
      "label": "Performance",
      "value": 100,
      "backgroundColor": "#ffffff",
      "segments": [
        {
          "label": "With thinking",
          "value": 60,
          "color": "#2f5f98"
        },
        {
          "label": "Without thinking",
          "value": 40,
          "color": "#2d8bba"
        }
      ]
    }
  ]
}
```

## Best Practices

### 1. Use Semantic IDs

```json
{
  "id": "revenue-q1",
  "type": "bar",
  "label": "Q1 Revenue"
}
```

### 2. Consistent Color Scheme

Use the official Chartmeister colors:
- `#2f5f98` - Primary blue
- `#2d8bba` - Secondary blue
- `#41b8d5` - Light blue
- `#6ce5e8` - Accent blue

### 3. Meaningful Labels

```json
{
  "label": "Q1 2024 Revenue",
  "subtitle": "First quarter performance"
}
```

### 4. Version Control

Always include version information:

```json
{
  "version": 2,
  "type": "chartmeister",
  "source": "chartmeister-app"
}
```

## Validation

The library includes comprehensive validation:

```bash
# Validate all files
npm run validate:all

# Validate specific directory
npx ajv validate -s chartmeister-schema.json -d charts/**/*.json
```

## Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Add your chart examples
4. Run validation: `npm run validate:all`
5. Submit a pull request

## Resources

- [JSON Schema](./chartmeister-schema.json) - Complete schema definition
- [Examples](./charts/) - Sample chart files
- [Templates](./templates/) - Chart templates
- [Chartmeister App](https://chartmeister.ai) - Visual editor

## Support

- [GitHub Issues](https://github.com/danielsinewe/chartmeister/issues)
- [Documentation](./README-schema.md)
- [Chartmeister App](https://chartmeister.ai)
