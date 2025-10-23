# Chartmeister Release Guide

This guide explains how releases and packages work for the Chartmeister library.

## 🚀 Release Process

### Automated Releases

The library uses GitHub Actions for automated releases:

1. **Tag Creation**: Create a git tag (e.g., `v2.0.12`)
2. **GitHub Actions**: Automatically triggers release workflow
3. **Validation**: Runs schema validation and tests
4. **NPM Publishing**: Publishes to npm registry
5. **GitHub Release**: Creates GitHub release with changelog

### Manual Release Steps

```bash
# 1. Update version in package.json
npm version patch  # or minor, major

# 2. Create and push tag
git tag -a v2.0.12 -m "Release v2.0.12: Description"
git push origin v2.0.12

# 3. GitHub Actions will handle the rest
```

## 📦 Package Contents

The npm package includes:

```
chartmeister@2.0.11/
├── chartmeister-schema.json    # JSON Schema (33.5kB)
├── README-schema.md           # Schema documentation
├── README.md                  # Main documentation
├── LICENSE                    # MIT license
├── charts/                    # Example charts
│   ├── business/
│   ├── examples/
│   └── finance/
├── templates/                 # Chart templates
└── docs/                      # API documentation
```

**Total Size**: 8.7 kB (compressed), 60.5 kB (unpacked)

## 🔧 NPM Configuration

### Package.json Settings

```json
{
  "name": "chartmeister",
  "version": "2.0.11",
  "main": "chartmeister-schema.json",
  "files": [
    "chartmeister-schema.json",
    "README-schema.md",
    "LICENSE",
    "charts/**/*",
    "templates/**/*"
  ],
  "scripts": {
    "prepublishOnly": "npm run validate:all"
  }
}
```

### Publishing Requirements

- **NPM Token**: `NPM_TOKEN` secret in GitHub repository
- **Validation**: All charts must validate before publishing
- **Version**: Semantic versioning (semver)

## 📋 Release Checklist

### Before Release

- [ ] Update `CHANGELOG.md`
- [ ] Run `npm run validate:all`
- [ ] Test with app integration
- [ ] Update version in `package.json`
- [ ] Create release notes

### Release Process

- [ ] Create git tag
- [ ] Push tag to GitHub
- [ ] Verify GitHub Actions workflow
- [ ] Check npm package publication
- [ ] Verify GitHub release creation

### After Release

- [ ] Test package installation
- [ ] Update app to use new version
- [ ] Announce release (if major)

## 🎯 Version Strategy

### Semantic Versioning

- **Major** (3.0.0): Breaking schema changes
- **Minor** (2.1.0): New features, backward compatible
- **Patch** (2.0.12): Bug fixes, documentation updates

### Release Types

1. **Patch Releases**: Bug fixes, documentation
2. **Minor Releases**: New schema features
3. **Major Releases**: Breaking changes

## 🔗 Package Usage

### Installation

```bash
npm install chartmeister
```

### Usage

```javascript
const schema = require('chartmeister/chartmeister-schema.json');
const ajv = require('ajv');
const validate = ajv.compile(schema);

// Validate a chart
const isValid = validate(chartData);
```

### Import Examples

```javascript
// Schema validation
const schema = require('chartmeister/chartmeister-schema.json');

// Example charts
const openaiChart = require('chartmeister/charts/examples/openai.json');

// Templates
const projectTemplate = require('chartmeister/templates/project-timeline.json');
```

## 🚨 Troubleshooting

### Common Issues

1. **Publishing Fails**: Check NPM_TOKEN secret
2. **Validation Errors**: Run `npm run validate:all`
3. **Version Conflicts**: Ensure version is unique
4. **Permission Denied**: Check npm login status

### GitHub Actions

- **Workflow**: `.github/workflows/release.yml`
- **Triggers**: Tag push events
- **Secrets**: `NPM_TOKEN` required
- **Validation**: Automatic schema validation

## 📊 Package Statistics

- **Downloads**: Tracked on npmjs.com
- **Size**: 8.7 kB (compressed)
- **Files**: 13 files included
- **Dependencies**: None (zero dependencies)
- **License**: MIT

## 🔄 Update Process

### For App Integration

```bash
# Update app to latest version
npm install chartmeister@latest

# Or specific version
npm install chartmeister@2.0.11
```

### For Library Development

```bash
# Install locally for development
npm install

# Run validation
npm run validate:all

# Test package
npm pack --dry-run
```

## 📈 Release History

- **v2.0.11**: Initial release with comprehensive schema
- **Future**: Automated releases via GitHub Actions

## 🎉 Success Metrics

- ✅ **Schema Validation**: All charts validate
- ✅ **NPM Publishing**: Package published successfully
- ✅ **GitHub Release**: Release created with changelog
- ✅ **App Integration**: App uses library successfully
- ✅ **Documentation**: Complete API reference available
