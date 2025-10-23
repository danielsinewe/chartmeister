#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to create a proper chartmeister file structure
function createProperChartmeisterFile() {
  return {
    "type": "chartmeister",
    "version": 2,
    "source": "chartmeister-app",
    "elements": [
      {
        "id": "example-bar",
        "type": "bar",
        "x": 0,
        "y": 0,
        "width": 100,
        "height": 40,
        "strokeColor": "#000000",
        "strokeWidth": 1,
        "locked": false,
        "customData": {
          "originalData": {
            "id": "example-bar",
            "label": "Example Bar",
            "value": 100,
            "type": "positive"
          }
        }
      }
    ],
    "appState": {
      "viewModeEnabled": false,
      "theme": "light",
      "activeTool": {
        "type": "selection"
      },
      "zoom": {
        "value": 1
      },
      "scrollX": 0,
      "scrollY": 0,
      "chartVisual": {
        "title": "Example Chart",
        "subtitle": "Chart Description",
        "showTitle": true,
        "showSubtitle": true,
        "titleSize": {
          "width": 200,
          "height": 40
        },
        "legend": {
          "entries": [
            {
              "label": {
                "text": "Example"
              },
              "color": "#2f5f98"
            }
          ],
          "alignment": "center",
          "layout": "horizontal",
          "position": {
            "x": 0,
            "y": 0
          },
          "size": {
            "width": 100,
            "height": 40
          }
        },
        "chart": {
          "border": {
            "color": "#000000",
            "width": 1
          },
          "connectors": {
            "visible": true,
            "strokeWidth": 2,
            "color": "#000000"
          },
          "percentAnnotations": {
            "visible": true,
            "color": "#000000"
          },
          "valueLabels": {
            "visible": true,
            "position": "top"
          },
          "categoryLabels": {
            "visible": true,
            "position": "bottom"
          },
          "yAxis": {
            "visible": true,
            "minValue": 0,
            "maxValue": 100,
            "title": "Value",
            "tickLength": 5,
            "gridLines": false
          },
          "xAxis": {
            "labelRotation": 0
          },
          "layout": {
            "barWidth": 40
          }
        }
      }
    },
    "files": {}
  };
}

// Function to fix a JSON file
function fixJsonFile(filePath) {
  try {
    const content = createProperChartmeisterFile();
    
    // Customize based on file name
    const fileName = path.basename(filePath, '.json');
    
    if (fileName.includes('basic-waterfall')) {
      content.elements = [
        {
          "id": "start-bar",
          "type": "bar",
          "x": 0,
          "y": 0,
          "width": 100,
          "height": 40,
          "strokeColor": "#2f5f98",
          "strokeWidth": 1,
          "locked": false,
          "customData": {
            "originalData": {
              "id": "start-bar",
              "label": "Starting Value",
              "value": 1000,
              "type": "start"
            }
          }
        },
        {
          "id": "revenue-bar",
          "type": "bar",
          "x": 120,
          "y": 0,
          "width": 100,
          "height": 40,
          "strokeColor": "#2d8bba",
          "strokeWidth": 1,
          "locked": false,
          "customData": {
            "originalData": {
              "id": "revenue-bar",
              "label": "Revenue",
              "value": 500,
              "type": "positive"
            }
          }
        },
        {
          "id": "costs-bar",
          "type": "bar",
          "x": 240,
          "y": 0,
          "width": 100,
          "height": 40,
          "strokeColor": "#41b8d5",
          "strokeWidth": 1,
          "locked": false,
          "customData": {
            "originalData": {
              "id": "costs-bar",
              "label": "Costs",
              "value": -200,
              "type": "negative"
            }
          }
        }
      ];
      content.appState.chartVisual.title = "Basic Waterfall Chart";
      content.appState.chartVisual.subtitle = "Revenue vs Costs Analysis";
    }
    
    // Write back the fixed content
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    console.log(`✅ Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// Find all JSON files in charts and templates directories
const chartsDir = path.join(__dirname, '..', 'charts');
const templatesDir = path.join(__dirname, '..', 'templates');

function findJsonFiles(dir) {
  const files = [];
  if (fs.existsSync(dir)) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory()) {
        files.push(...findJsonFiles(fullPath));
      } else if (item.name.endsWith('.json')) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

// Fix all JSON files
const allFiles = [
  ...findJsonFiles(chartsDir),
  ...findJsonFiles(templatesDir)
];

console.log(`Found ${allFiles.length} JSON files to fix:`);
allFiles.forEach(file => console.log(`  - ${file}`));

allFiles.forEach(fixJsonFile);

console.log('\n🎉 All files fixed!');
