#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Standard appState and files objects
const standardAppState = {
  "viewModeEnabled": false,
  "theme": "light",
  "activeTool": {
    "type": "selection"
  },
  "zoom": {
    "value": 1
  },
  "scrollX": 0,
  "scrollY": 0
};

const standardFiles = {};

// Function to fix a JSON file
function fixJsonFile(filePath) {
  try {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Ensure required properties exist
    if (!content.type) content.type = "chartmeister";
    if (!content.version) content.version = 2;
    if (!content.source) content.source = "chartmeister-app";
    if (!content.elements) content.elements = [];
    if (!content.appState) content.appState = standardAppState;
    if (!content.files) content.files = standardFiles;
    
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
