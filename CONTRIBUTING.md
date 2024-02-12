# Contributing

## Scope

This document covers the basic information required to get started and submit
code changes to this project. Supporting libraries will be installed, but are
not discussed in detail here.

## Code Quality

Adhere to the following code style guidelines:

- [PHP][php]
- [CSS][css]
- [HTML][html]
- [Markdown][markdown style]
- [Linting] [linting]

Follow the [seven rules of a great Git commit message][git]. Update unit tests
to account for your changes prior to submitting a merge request for review.

Commits are to follow the [seven rules of a great Git commit message][git].
Update unit tests to account for your changes prior to submitting a merge
request for review. Instructions on creating a merge request in gitlab can be
found in the [GitLab Documentation][merge guide]. More details on development
best practices can be found at our [Development Guide][dev guide]. The CI/CD
system includes automated linting, so be sure to lint your code before you
submit a merge request. Code that fails linting will not pass review, so it is
best to proactively check, rather than wait for the system to notify you of
easily checked problems.

## Getting started

### Setting up an environment

Make sure you have a good foundation in [PHP][php] and [SQL][MySql] before starting.
Then setup your development environment.

- Use a supported platform as listed in the [installation procedure][install].
- Install MySql Server 5.7.27.
- Install PHP 5.4.x.

### Installing MySql Server 5.7.27

- Note that this installation process is directed at a local mac environment.
- Go to https://dev.mysql.com/downloads/mysql/. Select the 5.7.27 version and download the mac .dmg package installation.
- Run the .dmg installer and follow the directions to install MySql to your machine. The installer will give you a root password,
  make sure to remember it as it will be needed later on.
- After finishing the installation, go to the system preferences and select the new MySql tab at the bottom
- Make sure that the server is running
- You can now navigate your terminal and run the shell and sql commands using mysql.

### Installing PHP 5.4.x.

- Note that this installation process is directed at a local mac environment.
- Newer Mac OS's come with a newer version of PHP already installed, however BioAtlas requires the older 5.4.x version.
- Install the PHP package by opening the terminal and entering `curl -s https://php-osx.liip.ch/install.sh | bash -s 5.4`.
- After the package is finished installing, you may add the php bin to your path that way you don't have to use the full php bin
  path when running commands. `export PATH=/usr/local/php5/bin:$PATH`

- Configure the config.php file to match your database connection credentials.
- Run the server: `php -S localhost:8000`.

### Running the servers

Now let's make sure everything is working by running the application locally:

- Configure the config.php file to match your database connection credentials.
- Run the mysql shell and create the bioatlas database.
```bash
    CREATE DATABASE bioatlas
    USE DATABASE bioatlas
```
- Populate your mysql database with the dump file included in the repository. Currently, the sql scripts to create the necessary
  tables to use the website do not work correctly, so the dump file must be used.
```bash
    USE DATABASE bioatlas
    source **PATH_TO_BIOATLAS_REPO/bioatlas/zfatlasDump/zfatlas.dump
    SHOW tables # Verify that the tables have been created
```
- Run the server: `php -S localhost:8000`.
- Navigate to localhost:8000 to access the website.

Note that most changes to the code will automatically reload; so, you can see
your changes instantly.

### Updating to the latest version

By default, git will have you running the official release rather than the
latest in development code. To update to the latest version of the application:

-   Ensure you have the latest code: `git checkout develop && git pull`

### Making changes

You can now submit changes to the application:

-   Follow the steps from the updating to the latest version section.
-   Work on a feature branch: `git checkout -b <FEATURE>`
-   Make code changes, write tests, and update documentation.
-   Lint the code: We are abiding by the coding guidelines specifies in the [PEAR][pear] standards.
    The linter we use is the PHP Code Sniffer.
    Run the linter: `phpcs -d memory_limit=500M bioatlas/zfatlasDump/labels/`
    The linter has a command to fix some of the issues found in the linter:
    `phpcbf -d memory_limit=500M bioatlas/zfatlasDump/labels/`
-   Follow the steps from the running the servers section and test your code.
-   Create a merge request.
-   Reference the merge request(s) in the associated Jira task, before moving
    the task to review.

## Build Process

GitLab uses an automated process to build this application. That process
results in an rpm file containing all of the necessary items for production
deployment. It is recommended to simply retrieve the build artifacts from
GitLab, but the manual build process is listed here

### Manual Package Creation

-   Follow the steps from the setting up an environment section.

-   Build a package. We recommend rpms. The bioatlas.spec file creates the RPM package, run it by
    running the Makefile `make`

-   Copy the rpm file to the RI repository.

## Documentation

Keeping the project documentation up to date is an important part of our
development process. Be sure to check on and update the required documents as
the task requires.

Update the documentation listed in the further reading section of the
[README][readme] as needed.


[dev guide]: https://sharepoint.hersheymed.net/it/teams/research/Documents/development-best-practices.docx
[php]: https://www.php-fig.org/
[oswap]: https://www.owasp.org/index.php/Testing_for_SQL_Server
[css]: https://google.github.io/styleguide/htmlcssguide.html#CSS
[git]: https://chris.beams.io/posts/git-commit/#seven-rules
[html]: https://www.w3schools.com/html/html5_syntax.asp
[install]: INSTALL.md
[linting]: https://github.com/squizlabs/PHP_CodeSniffer
[markdown style]: http://www.cirosantilli.com/markdown-style-guide/
[pear]: https://pear.php.net/manual/en/standards.php
[readme]: README.md
