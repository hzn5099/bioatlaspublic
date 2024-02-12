# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.0.8] - 2023-09-06
### Hotfix
- BA-49 Fix admin nav link.

## [1.0.7] - 2023-08-30
### Added
- BA-45 Put slide import behind websso authentication.
- BA-46 Add slide import page for admin users.

### Changes
- OS-268 Updated stash repositories to pennstatehealth.

## [1.0.6] - 2023-02-27
### Changes
- BA-39 Refactor the project to build and deploy with gitlab ci.
- BA-40 Changes to about and index.

## [1.0.5] - 2020-12-21

### Added

- BA-33 Add Error Handling to bulk import script.

## [1.0.4] - 2020-12-02

### Added

- BA-33 Users can import slides at bulk.
- BA-34 Add instructions for bulk upload and table update scripts or sys admin.

## [1.0.3] - 2020-05-12

### Added

- BA-31 Users can import slides manually using the import scripts.

## [1.0.2] - 2020-04-01

### Fixed

- OS-189 Fix build server slowdowns due to ssh agent cleanup.
- BA-26 Merged prod code base with betas code base.

## [1.0.1] - 2020-01-03

### Bug Fix

 - BA-22 fixed The Anatomy Reference page, where the page isn't loading.
 - BA-28 search page was showing duplicate results and atlases.

## [1.0.0] - 2019-12-18

### Added

- BA-1 Setup BioAtlas gitlab repository.
- BA-11 Setup RPM Packaging.
- BA-12 Setup BioAtlas documentation.
- BA-16 Add config files for selinux permissions.
- BA-17 Comment out labeling feature.
- BA-18 Add iamalive.html

### Changed

- BA-19 Improve installation and upgrade instructions.

### Security

- BA-2 Remove licensed image from repository.
- BA-3 Modified the bioatlas.conf template in the ansible to deny access to config.php file.
- BA-4 Remove sensitive information from the webroot.
- BA-13 Fix cross-site-scripting vulnerabilites.
- BA-5 Moved sync, .INCLUDE, .EXCLUDE file outside of the webroot.

[Unreleased]: https://toolchest.med.psu.edu/research-informatics/bioatlas/tree/develop
[1.0.0]: https://toolchest.med.psu.edu/research-informatics/bioatlas/tree/1.0.0
[1.0.1]: https://toolchest.med.psu.edu/research-informatics/bioatlas/tree/1.0.1
[1.0.2]: https://toolchest.med.psu.edu/research-informatics/bioatlas/tree/1.0.2
[1.0.3]: https://toolchest.med.psu.edu/research-informatics/bioatlas/tree/1.0.3
[1.0.4]: https://toolchest.med.psu.edu/research-informatics/bioatlas/tree/1.0.4
[1.0.7]: https://toolchest.med.psu.edu/research-informatics/bioatlas/tree/1.0.7
