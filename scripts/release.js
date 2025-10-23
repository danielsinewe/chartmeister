#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const currentVersion = packageJson.version;

console.log(`Current version: ${currentVersion}`);

// Get the type of release (major, minor, patch)
const releaseType = process.argv[2] || 'patch';

if (!['major', 'minor', 'patch'].includes(releaseType)) {
  console.error('Invalid release type. Use: major, minor, or patch');
  process.exit(1);
}

try {
  // Update version in package.json
  console.log(`Updating version to ${releaseType}...`);
  execSync(`npm version ${releaseType}`, { stdio: 'inherit' });
  
  // Get the new version
  const newPackageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const newVersion = newPackageJson.version;
  
  console.log(`New version: ${newVersion}`);
  
  // Validate schema before release
  console.log('Validating schema...');
  execSync('npm run validate:all', { stdio: 'inherit' });
  
  // Create git tag (delete existing if it exists)
  const tagName = `v${newVersion}`;
  console.log(`Creating tag: ${tagName}`);
  try {
    execSync(`git tag -d ${tagName}`, { stdio: 'pipe' });
    console.log(`Deleted existing tag: ${tagName}`);
  } catch (e) {
    // Tag doesn't exist, that's fine
  }
  execSync(`git tag -a ${tagName} -m "Release ${tagName}"`, { stdio: 'inherit' });
  
  // Push changes and tags
  console.log('Pushing changes and tags...');
  execSync('git push origin main', { stdio: 'inherit' });
  execSync(`git push origin ${tagName}`, { stdio: 'inherit' });
  
  // Create GitHub release using gh CLI
  console.log('Creating GitHub release...');
  try {
    execSync(`gh release create ${tagName} --title "Release ${tagName}" --notes "## Changes in ${tagName}

### Installation

\`\`\`bash
npm install chartmeister@${newVersion}
\`\`\`

### Files

- \`chartmeister-schema.json\` - JSON Schema for validation
- \`README-schema.md\` - Schema documentation
- \`charts/\` - Example chart files
- \`templates/\` - Chart templates

### What's New

This release includes the latest schema updates and example charts."`, { stdio: 'inherit' });
    console.log(`✅ GitHub release ${tagName} created successfully!`);
  } catch (ghError) {
    console.log('⚠️  GitHub CLI not available or authenticated. Release created locally.');
    console.log('   You can create the GitHub release manually at:');
    console.log(`   https://github.com/danielsinewe/chartmeister/releases/new?tag=${tagName}`);
  }
  
  console.log(`✅ Release ${tagName} created successfully!`);
  console.log(`📦 The GitHub Action will now publish to npm automatically.`);
  
} catch (error) {
  console.error('❌ Release failed:', error.message);
  process.exit(1);
}
