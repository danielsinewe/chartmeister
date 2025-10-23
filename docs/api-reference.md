# Chartmeister API Reference

This document provides a comprehensive reference for the Chartmeister library API.

## Installation

```bash
npm install chartmeister
```

## Schema Validation

### Basic Validation

```javascript
const ajv = require('ajv');
const schema = require('chartmeister/chartmeister-schema.json');

const validate = ajv.compile(schema);
const isValid = validate(yourChartData);

if (!isValid) {
  console.log(validate.errors);
}
```

### Using AJV CLI

```bash
# Validate a single file
npx ajv validate -s chartmeister-schema.json -d your-chart.json

# Validate multiple files
npx ajv validate -s chartmeister-schema.json -d charts/**/*.json
```

## Schema Structure

### Root Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | string | ✅ | Must be "chartmeister" |
| `version` | integer | ✅ | Schema version (currently 3) |
| `source` | string | ✅ | Must be "chartmeister-app" |
| `elements` | array | ✅ | Chart elements |
| `appState` | object | ✅ | Application state |
| `files` | object | ✅ | File attachments |

### Elements

Each element in the `elements` array has the following structure:

```typescript
interface ChartmeisterElement {
  id: string;
  type: "bar" | "connector" | "annotation" | "title" | "subtitle" | "legend";
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  strokeColor?: string;
  backgroundColor?: string;
  strokeWidth?: number;
  locked?: boolean;
  customData?: Record<string, any>;
  chartData?: {
    label?: string;
    value?: number;
    type?: 'start' | 'positive' | 'negative' | 'total';
    cumulative?: number;
    editable?: boolean;
    showValueLabel?: boolean;
    showCategoryLabel?: boolean;
    color?: string;
    borderColor?: string;
    borderWidth?: number;
    segments?: Array<{
      id: string;
      label?: string;
      value: number;
      color?: string;
      borderColor?: string;
      borderWidth?: number;
      locked?: boolean;
      showValueLabel?: boolean;
      valueLabelOffsetX?: number;
      valueLabelOffsetY?: number;
    }>;
    computeTotal?: boolean;
    anchorToBaseline?: boolean;
  };
}
```

### App State

The `appState` object contains application configuration:

```typescript
interface ChartmeisterAppState {
  viewBackgroundColor: string;
  currentItemStrokeColor: string;
  currentItemBackgroundColor: string;
  currentItemFillStyle: string;
  currentItemStrokeWidth: number;
  currentItemStrokeStyle: string;
  currentItemRoughness: number;
  currentItemOpacity: number;
  currentItemFontFamily: number;
  currentItemFontSize: number;
  currentItemTextAlign: string;
  currentItemStartArrowhead: string | null;
  currentItemEndArrowhead: string | null;
  scrollX: number;
  scrollY: number;
  zoom: { value: number };
  gridSize: number | null;
  viewModeEnabled: boolean;
  theme: "light" | "dark";
  selectedElementIds: Record<string, boolean>;
  selectedGroupIds: Record<string, boolean>;
  editingGroupId: string | null;
  editingLinearElement: any | null;
  selectedElements: {
    elements: any[];
    appState: any;
  };
  chartState: {
    selectedBar: string | null;
    selectedConnector: number | null;
    selectedSegment: string | null;
    selectedPercentAnnotation: number | null;
    hoveredElement: string | null;
    editingLabel: string | null;
    editingValue: string | null;
    editingSegmentValue: string | null;
    isDragging: boolean | null;
    draggingSegment: string | null;
    showLockIcon: string | null;
    guides: any[];
    selectedGuideId: string | null;
    contextMenu: any | null;
  };
  chartVisual: {
    title: string;
    subtitle: string;
    showTitle: boolean;
    showSubtitle: boolean;
    showLegend: boolean;
    showYAxis: boolean;
    showYAxisName: boolean;
    showYAxisLine: boolean;
    showYAxisTicks: boolean;
    showYAxisLabels: boolean;
    showXAxis: boolean;
    showXAxisName: boolean;
    showXAxisLine: boolean;
    showXAxisTicks: boolean;
    showXAxisLabels: boolean;
    showBackgroundGrid: boolean;
    hiddenLegendColors: string[];
    legendEntries: Array<{
      color: string;
      label: string;
      shape: "square" | "circle" | "diamond" | "triangle";
    }>;
    legendIconShapes: Record<string, string>;
    titleAlignment: "center" | "justify" | "start" | "end";
    subtitleAlignment: "center" | "justify" | "start" | "end";
    legendAlignment: "center" | "justify" | "start" | "end";
    legendLayout: "horizontal" | "vertical";
    legendMaxWidth: number;
    legendPosition: { x: number; y: number };
    legendSize: { width: number; height: number };
    xAxisLabelRotation: number;
    autoRotationEnabled: boolean;
    dynamicPositioningEnabled: boolean;
    titleVerticalPosition: number;
    subtitleVerticalPosition: number;
    legendVerticalPosition: number;
    chartBorder: {
      color: string;
      width: number;
      type: "solid" | "dashed" | "dotted";
    };
    cornerRadius: number;
    topCornerRadius: number;
    bottomCornerRadius: number;
    separateCornerRadius: boolean;
    connectors: {
      visible: boolean;
      strokeWidth: number;
      strokeDasharray: string;
      color: string;
    };
    percentAnnotations: {
      visible: boolean;
      color: string;
      fontSize: number;
      fontWeight: number;
    };
    valueLabels: {
      visible: boolean;
      position: "top" | "bottom" | "left" | "right" | "center";
      color: string;
      fontSize: number;
      fontWeight: number;
      offset: number;
      format: "%" | "$" | "€" | "£" | "¥" | "number";
    };
    categoryLabels: {
      visible: boolean;
      position: "top" | "bottom" | "left" | "right" | "center";
      color: string;
      fontSize: number;
      fontWeight: number;
      offset: number;
    };
    yAxis: {
      visible: boolean;
      minValue: number;
      maxValue: number;
      tickInterval: number;
      color: string;
      fontSize: number;
      fontWeight: number;
      tickLength: number;
      gridLines: boolean;
      title: string;
    };
    xAxis: {
      labelRotation: number;
    };
    layout: {
      barWidth: number;
      barSpacing: number;
      chartWidth: number;
      chartHeight: number;
      marginTop: number;
      marginBottom: number;
      marginLeft: number;
      marginRight: number;
    };
  };
}
```

## Validation Examples

### Valid Chart Structure

```json
{
  "type": "chartmeister",
  "version": 3,
  "source": "chartmeister-app",
  "elements": [
    {
      "id": "bar-1",
      "type": "bar",
      "x": 0,
      "y": 0,
      "width": 40,
      "height": 100,
      "chartData": {
        "label": "Start",
        "value": 100,
        "type": "start",
        "cumulative": 100,
        "editable": true,
        "showValueLabel": true,
        "showCategoryLabel": true
      }
    }
  ],
  "appState": {
    "viewBackgroundColor": "#ffffff",
    "theme": "light",
    "chartVisual": {
      "title": "My Chart",
      "showTitle": true,
      "showLegend": true
    }
  },
  "files": {}
}
```

### Common Validation Errors

1. **Missing required properties**:
   ```json
   {
     "error": "Missing required property: 'type'"
   }
   ```

2. **Invalid element type**:
   ```json
   {
     "error": "Invalid element type: 'invalid-type'"
   }
   ```

3. **Invalid color format**:
   ```json
   {
     "error": "Color must match pattern: ^#[0-9A-Fa-f]{6}$"
   }
   ```

## Migration

### Version 2 to 3

The main change in version 3 is the `anchorToBaseline` property for total bars:

```javascript
// Before (version 2)
{
  "chartData": {
    "type": "total",
    "computeTotal": true
  }
}

// After (version 3)
{
  "chartData": {
    "type": "total",
    "computeTotal": true,
    "anchorToBaseline": true
  }
}
```

## Best Practices

1. **Always validate** your chart data before processing
2. **Use semantic versioning** for schema changes
3. **Test with real data** from your application
4. **Keep examples updated** when schema changes
5. **Document breaking changes** clearly

## Troubleshooting

### Common Issues

1. **Schema validation fails**: Check that all required properties are present
2. **Color validation errors**: Ensure colors are in hex format (#RRGGBB)
3. **Type errors**: Verify element types are from the allowed enum
4. **Version mismatches**: Ensure you're using the correct schema version

### Getting Help

- **GitHub Issues**: [Report bugs or request features](https://github.com/danielsinewe/chartmeister/issues)
- **Documentation**: [Full documentation](https://github.com/danielsinewe/chartmeister#readme)
- **Examples**: [Example charts](https://github.com/danielsinewe/chartmeister/tree/main/charts)
