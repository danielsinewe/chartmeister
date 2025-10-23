#!/bin/bash

# Setup script for GitHub CLI authentication
# This script helps set up GitHub CLI for automated releases

echo "🔧 Setting up GitHub CLI for Chartmeister releases..."

# Check if gh is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "   Install it with: brew install gh"
    echo "   Or visit: https://cli.github.com/"
    exit 1
fi

echo "✅ GitHub CLI is installed"

# Check if already authenticated
if gh auth status &> /dev/null; then
    echo "✅ GitHub CLI is already authenticated"
    gh auth status
else
    echo "🔐 Authenticating with GitHub..."
    echo "   This will open a browser window for authentication"
    gh auth login --web
fi

# Test authentication
echo "🧪 Testing GitHub CLI access..."
if gh repo view danielsinewe/chartmeister &> /dev/null; then
    echo "✅ Successfully connected to danielsinewe/chartmeister repository"
else
    echo "❌ Cannot access danielsinewe/chartmeister repository"
    echo "   Make sure you have the necessary permissions"
    exit 1
fi

echo ""
echo "🎉 GitHub CLI setup complete!"
echo ""
echo "You can now use:"
echo "  npm run release:patch   # Create a patch release"
echo "  npm run release:minor   # Create a minor release" 
echo "  npm run release:major   # Create a major release"
echo ""
echo "The release script will automatically:"
echo "  - Update version numbers"
echo "  - Validate the schema"
echo "  - Create git tags"
echo "  - Push to GitHub"
echo "  - Create GitHub releases"
echo "  - Trigger npm publishing via GitHub Actions"
