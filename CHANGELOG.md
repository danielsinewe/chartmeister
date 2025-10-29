# Changelog

All notable changes to the Chartmeister library will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- GitHub Actions workflows for CI/CD
- Automated release process
- Schema validation in CI
- Proper semantic versioning

### Changed
- Removed legacy `legendRows` and `legendColumns` properties
- Updated schema to use modern `legendMaxWidth` approach
- Improved schema documentation

### Removed
- Legacy legend layout properties (`legendRows`, `legendColumns`)

## [6.0.0] - 2025-10-29

### Added
- Font size overrides for value labels, category labels, axis labels, and legend labels (typography harmonization)
- Runtime utility bundle (`dist/`) exporting `schema`, `schemaVersion`, `validate`, and `migrate`
- Canonical example charts in `examples/`

### Changed
- Package switched to ESM-first (`type: module`) with dual CJS/ESM exports
- Schema JSON bumped to version 6 with refreshed documentation
- README docs refreshed for the new API and directory layout

### Removed
- Legacy `charts/` and `templates/` directories from the published package

## [5.0.0]

### Added
- `about` metadata block for provenance and licensing information
- Legend typography controls including `legendLabelFontSize`

### Changed
- Clarified schema descriptions for legend layout and typography fields

## [4.0.0]

### Added
- `valueLabelDockMode` heuristic defaults for segmented bars
- Explicit anchored totals behavior for manual total bars

### Changed
- Migrations updated to handle anchored totals automatically

## [3.0.0]

### Added
- Baseline handling fixes for total bars (`anchorToBaseline` defaults)

### Changed
- Schema documentation expanded for total/segment behaviors

## [2.0.0] - 2024-10-23

### Added
- Initial release of Chartmeister library
- JSON Schema for .chartmeister file format
- Example chart files
- Chart templates
- Comprehensive documentation

### Features
- Support for waterfall charts
- Visual configuration options
- Legend customization
- X-axis label rotation
- Corner radius settings
- Responsive legend layout
- Icon shape customization

## [1.0.0] - 2024-10-22

### Added
- Initial schema definition
- Basic chart structure
- Core visual properties
