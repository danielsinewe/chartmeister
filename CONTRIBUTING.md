# Contributing to Chartmeister

Thank you for your interest in contributing to the Chartmeister library! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Setup

```bash
# Fork and clone the repository
git clone https://github.com/your-username/chartmeister.git
cd chartmeister

# Install dependencies
npm install

# Validate the schema
npm run validate:all
```

## 📝 Types of Contributions

### 1. Schema Improvements
- Add new properties to the JSON schema
- Improve validation rules
- Update documentation

### 2. Example Charts
- Add new example chart files
- Improve existing examples
- Create chart templates

### 3. Documentation
- Improve README files
- Add API documentation
- Create tutorials

### 4. Bug Fixes
- Fix schema validation issues
- Correct documentation errors
- Improve example files

## 🔧 Development Workflow

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Update schema files
   - Add example charts
   - Update documentation

3. **Test your changes**
   ```bash
   npm run validate:all
   npm test
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new chart example"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Format

Use conventional commits:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions/changes
- `chore:` - Maintenance tasks

## 📋 Schema Development

### Adding New Properties

1. **Update the schema** in `chartmeister-schema.json`
2. **Add documentation** in `README-schema.md`
3. **Create examples** in `charts/` or `templates/`
4. **Update tests** to validate new properties

### Schema Guidelines

- Use descriptive property names
- Provide clear descriptions
- Set appropriate constraints (min/max values)
- Include examples in documentation
- Maintain backward compatibility when possible

## 📊 Example Charts

### Adding New Examples

1. **Create JSON file** in appropriate directory:
   - `charts/examples/` - General examples
   - `charts/business/` - Business use cases
   - `charts/finance/` - Financial charts
   - `templates/` - Reusable templates

2. **Follow naming convention**:
   - Use kebab-case: `my-chart.json`
   - Be descriptive: `quarterly-revenue.json`

3. **Validate your chart**:
   ```bash
   npm run validate
   ```

### Example Chart Structure

```json
{
  "type": "chartmeister",
  "version": 3,
  "source": "chartmeister-app",
  "elements": [...],
  "appState": {
    "chartVisual": {
      "title": "Chart Title",
      "data": [...]
    }
  }
}
```

## 🧪 Testing

### Validation Tests

```bash
# Validate all charts
npm run validate:all

# Validate specific directory
npm run validate
```

### Manual Testing

1. **Test with the app**:
   - Import your chart into [chartmeister.ai](https://chartmeister.ai)
   - Verify it renders correctly
   - Check all visual properties

2. **Test schema changes**:
   - Ensure backward compatibility
   - Validate existing charts still work
   - Test new properties work correctly

## 📚 Documentation

### README Updates

- Keep the main README up to date
- Add new examples to the chart categories
- Update installation instructions
- Maintain the quick start guide

### Schema Documentation

- Document all new properties in `README-schema.md`
- Provide clear examples
- Explain use cases
- Include validation rules

## 🚀 Release Process

### Version Bumping

We use semantic versioning:
- **Major** (1.0.0 → 2.0.0): Breaking changes
- **Minor** (1.0.0 → 1.1.0): New features
- **Patch** (1.0.0 → 1.0.1): Bug fixes

### Creating Releases

```bash
# Patch release (bug fixes)
npm run release:patch

# Minor release (new features)
npm run release:minor

# Major release (breaking changes)
npm run release:major
```

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow the project's coding standards

## 📞 Getting Help

- **Issues**: [GitHub Issues](https://github.com/danielsinewe/chartmeister/issues)
- **Discussions**: [GitHub Discussions](https://github.com/danielsinewe/chartmeister/discussions)
- **Email**: daniel@chartmeister.ai

## 🎉 Recognition

Contributors will be recognized in:
- README contributors section
- Release notes
- Project documentation

Thank you for contributing to Chartmeister! 🚀
