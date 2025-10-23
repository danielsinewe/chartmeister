#!/bin/bash

echo "🧹 Creating completely clean chartmeister repository..."

# Remove all git history
echo "🗑️  Removing all git history..."
rm -rf .git

# Initialize fresh git repository
echo "🆕 Initializing fresh git repository..."
git init

# Add all files
echo "📁 Adding all files..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial release: Professional chartmeister library

- Complete JSON Schema for .chartmeister file format
- GitHub Actions CI/CD with automated releases  
- Comprehensive documentation and examples
- Modern legend layout with legendMaxWidth
- Professional npm package setup
- Clean repository with no historical baggage

Features:
- Automated semantic versioning
- GitHub CLI integration for releases
- Schema validation with AJV
- Professional documentation
- Example charts and templates"

echo "✅ Fresh repository created successfully!"
echo ""
echo "Next steps:"
echo "1. Add remote: git remote add origin https://github.com/danielsinewe/chartmeister.git"
echo "2. Push: git push -u origin main"
echo "3. Test release: npm run release:patch"
