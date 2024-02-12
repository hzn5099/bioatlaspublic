# Guidebook

## Contents
1. [Context](#context)
1. [Quality Attributes](#quality-attributes)
1. [Constraints](#constraints)
1. [Principles](#principles)
1. [Software Architecture](#software-architecture)
1. [Code](#code)
1. [Data](#data)
1. [Infrastructure Architecture](#infrastructure-architecture)
1. [Deployment](#deployment)
1. [Development Environment](#development-environment)
1. [Operation and Support](#operation-and-support)
1. [Decision Log](#decision-log)

## Context
### Purpose
This document provides a brief introductory overview of the atlas project
system, specifically focused on the BioAtlas Zebrafish, and is intended to capture
and convey the significant architectural decisions made on the system, as well
as to introduce the system to new developers.

### Background
This section provides information about the Background of BioAtlas Zebrafish.

The primary purpose of Bioatlas Zebrafish Virtual Slides is to provide
infrastructure for service as a central repository for digital histological
sections of normal and abnormal zebrafish tissue that allows progressive
magnification and labeling in a manner that is coordinated with existing
anatomical and phenotypic ontologies. The next goals for this project are to
plan for scanning of slide collections, and to customize the database structure
to a more scalable format.

### Customer
This section provides information about the customer of BioAtlas Zebrafish.

Jake Gittlen Laboratories for Cancer Research
Primary Contact: Keith Cheng

### Functional Overview
This section provides information about the functional overview of BioAtlas
Zebrafish.

### Primary Functions
This section provides information about the primary functions of BioAtlas
Zebrafish.

1. Enable users to view high-resolution imagery with a significantly reduced
   download time.
2. Allow users to pan and magnify slides in a manner similar to a traditional
   microscope but offer constant context with respect to the remainder of the
   slide, labeling, comparison, and collaborative possibilities beyond the
   limitations of physical microscopy.

## Quality Attributes
This section provides information about the quality attributes of the BioAtlas
application.

- All user interface text will be presented in English only
- The BioAtlas page is public facing with no login/authentication


## Constraints
This section provides information about the constraints of the BioAtlas
application.

- Size of Software Development team:
    - 4 developers
    - 1 System Analyst
- Skill profile of the Software Development Team
    - PHP, Python, Javascript, Web Principles
- Framework: PHP 5
- Source Control: GIT

## Principles
This section provides information about the principles of the BioAtlas
application.

- Before removing previously written code, attempt to understand why something
  was done that way.
- Consistency with existing code can be preferable to modern code standards,
  with the caveat, try not to make code worse
- Uses an older version of PHP and MYSQL so be aware of any obsolete code.
- Comments can be very useful, and should be noted, but can also present
  information in a misleading or incorrect fashion, or be outdated.


## Software Architecture
This section provides information about the software architecture of BioAtlas
Zebrafish.

## Code
This section provides information about the customer of BioAtlas Zebrafish.

1. The Bioatlas repository is a vendor provided code. To make changes, pull the
   code from the gitlab repository, push your
   changes to a feature branch, and merge to develop.
1. Make sure to follow coding guidelines and best practices.
1. The site is written in PHP 5.4.x and uses a MySQL 5.7.27 database.

## Data
There is a dump file that is included with the bioatlas code, located in
bioatlas/zfatlasDump/zfatlas.dump. The file creates the
necessary tables and populates them with test data.

## Infrastructure Architecture
This section provides information about the architecture of the infrastructure
of BioAtlas Zebrafish.

** TO DO IN BA-8 **

## Deployment
This section provides information about the deployment of BioAtlas Zebrafish.

** TO DO IN BA-8 **


## Development Environment
This section provides information about the development environment of
BioAtlas Zebrafish.

Instructions to set up a environment on your local machine for development,
please refer to the [contributing.md](contributing.md)


## Operation and Support
This section provides information about the operation and support aspects of
the BioAtlas application.

- Errors are logged into service now, which can then be linked to tasks in JIRA
- The database is backed up and stored in the servers bak partition


## Decision Log
This section provides a log of the decisions made regarding the BioAtlas
application.

- Base code changes will be kept in a base code change log, to be maintained by
developers as base code changes are added.
