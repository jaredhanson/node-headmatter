# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2024-03-25

### Added
- `check()` function for checking if text begins with front matter delimiter.
- Optional third `delim` argument to `parse()`, defaulting to `'---'`.

### Changed
- Renamed `head` property of object returned from `parse()` to `front`.

## [0.0.2] - 2018-09-13

### Changed

- `head` property of object returned from `parse()` defaults to an empty object,
rather than `undefined`, when no front matter is present.

## [0.0.1] - 2018-09-13

- Initial release.

[Unreleased]: https://github.com/jaredhanson/node-headmatter/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/jaredhanson/node-headmatter/compare/v0.0.2...v0.1.0
[0.0.2]: https://github.com/jaredhanson/node-headmatter/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/jaredhanson/node-headmatter/releases/tag/v0.0.1
