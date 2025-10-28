# Chartmeister Library

[![npm version](https://badge.fury.io/js/chartmeister.svg)](https://badge.fury.io/js/chartmeister)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/danielsinewe/chartmeister/workflows/CI/badge.svg)](https://github.com/danielsinewe/chartmeister/actions)
[![GitHub stars](https://img.shields.io/github/stars/danielsinewe/chartmeister.svg)](https://github.com/danielsinewe/chartmeister/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/danielsinewe/chartmeister.svg)](https://github.com/danielsinewe/chartmeister/issues)

The official open-source library for the `.chartmeister` file format - a JSON-based standard for saving and loading chart data and visual configurations. Version 6 includes enhanced schema validation, examples, and comprehensive documentation.

## What is this?

This repository contains:
- **JSON Schema**: Official schema for `.chartmeister` files (`chartmeister-schema.json`)
- **Documentation**: Complete documentation for the file format
- **Sample Charts**: Example `.chartmeister` files for different use cases
- **Templates**: Chart templates for common scenarios

The `.chartmeister` format is used by the [Chartmeister application](https://chartmeister.ai) to save and load chart configurations with full visual fidelity.

## Chart Categories

### Examples
- **sample.json** - Basic waterfall chart example (used by chartmeister.ai)
- **openai.json** - OpenAI SWE-bench chart (used by chartmeister.ai/openai)
- **basic-waterfall.json** - Simple waterfall chart with revenue/costs
- **segmented-bar.json** - Segmented bar chart example

### Business
- **sales-waterfall.json** - Business sales waterfall chart

### Finance
- **quarterly-revenue.json** - Quarterly revenue analysis chart

### Templates
- **startup-metrics.json** - Startup financial metrics template
- **project-timeline.json** - Project timeline and progress template

## How to Use

### Quick Start
1. Download any JSON file from this repository
2. Open the [Chartmeister application](https://chartmeister.ai)
3. Import the JSON file to visualize the chart

### For Developers
```bash
# Install the library
npm install chartmeister

# Validate your chartmeister files
npm run validate

# Use in your application
const schema = require('chartmeister/chartmeister-schema.json');
```

### For Designers
- Browse the examples in the `charts/` directory
- Use templates from the `templates/` directory
- Customize colors, labels, and layouts
- Export as `.chartmeister` files

## JSON Schema

The `.chartmeister` file format is defined by a comprehensive JSON schema. See [chartmeister-schema.json](./chartmeister-schema.json) for the complete specification.

### Quick Start

```json
{
  "type": "chartmeister",
  "version": 6,
  "source": "chartmeister-app",
  "elements": [
    {
      "id": "bar-1",
      "type": "bar",
      "x": 100,
      "y": 200,
      "width": 50,
      "height": 100,
      "chartData": {
        "label": "Revenue",
        "value": 50,
        "type": "positive",
        "color": "#4CAF50"
      }
    }
  ],
  "appState": {
    "chartVisual": {
      "title": "My Chart",
      "showTitle": true
    }
  },
  "files": {}
}
```

For complete documentation, see:
- [Getting Started Guide](./docs/getting-started.md)
- [Schema Documentation](./README-schema.md)
- [JSON Schema](./chartmeister-schema.json)

## Contributing

We welcome contributions! Please:

1. Fork this repository
2. Add your chart JSON files
3. Submit a pull request

## License

MIT License - see LICENSE file for details.
