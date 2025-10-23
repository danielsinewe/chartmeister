# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability, please follow these steps:

### 1. **DO NOT** create a public GitHub issue

Security vulnerabilities should be reported privately to avoid exposing users to potential risks.

### 2. Report via email

Send an email to **daniel@chartmeister.ai** with the following information:

- **Subject**: `[SECURITY] Brief description of the vulnerability`
- **Description**: Detailed explanation of the vulnerability
- **Impact**: How this could affect users
- **Steps to reproduce**: If applicable
- **Suggested fix**: If you have ideas for a solution

### 3. What to expect

- **Acknowledgment**: We'll acknowledge receipt within 48 hours
- **Investigation**: We'll investigate and assess the severity
- **Response**: We'll provide a timeline for fixes
- **Credit**: We'll credit you in security advisories (if desired)

### 4. Disclosure timeline

- **Initial response**: Within 48 hours
- **Status update**: Within 7 days
- **Fix release**: Within 30 days (for high severity)
- **Public disclosure**: After fix is released

## Security Considerations

### Schema Validation

The Chartmeister library primarily deals with JSON schema validation. Security considerations include:

- **JSON Schema Injection**: Malicious schema properties
- **File Size Limits**: Large files causing DoS
- **Validation Bypass**: Incorrect schema validation

### Best Practices

When using the Chartmeister library:

1. **Validate input**: Always validate JSON before processing
2. **Size limits**: Implement reasonable file size limits
3. **Sanitization**: Sanitize user input in chart data
4. **Updates**: Keep the library updated to latest version

### Dependencies

We regularly audit our dependencies for security vulnerabilities:

- **ajv-cli**: JSON schema validation
- **Node.js**: Runtime environment

## Security Updates

Security updates are released as:

- **Patch releases** (2.0.11 → 2.0.12) for security fixes
- **Minor releases** (2.0.x → 2.1.0) for security improvements
- **Major releases** (2.x → 3.0) for breaking security changes

## Contact

For security-related questions or concerns:

- **Email**: daniel@chartmeister.ai
- **GitHub**: [@danielsinewe](https://github.com/danielsinewe)
- **Website**: [chartmeister.ai](https://chartmeister.ai)

Thank you for helping keep Chartmeister secure! 🔒
