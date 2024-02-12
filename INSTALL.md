# Installation

BioAtlas runs on [PHP 5.6.x][php]. This system uses Ansible for deployment, but
some manual steps are needed in addition to the Ansible for first time
installation.

## Platforms

We only support RedHat Enterprise Linux 7.X. The application likely works with
any Linux or UNIX variant. You can probably get it to run on Windows too, but
we provide no support for this.

## Procedure

-   Build the application. You can download this from the GitLab artifacts or
    follow the build instructions in the [CONTRIBUTING][contributing] guide.

-   Install the package. We recommend doing this through an RPM repo. If you've
    got your repo setup correctly, you should be able to yum install bioatlas.
    If you choose not to use a repo, you can install the package directly,
    e.g., `yum install bioatlas.rpm`.

-   On the ansible branch, setup ansible variables for your environment. You
    may use the dev and beta environment variables as well as the
    [ansible-readme] as examples.

-   Run Ansible:
    ```bash
    ansible-galaxy install -p roles -r requirements.yml -f -vvvv
    ansible-playbook -i <storename> site.yml --ask-become-pass --ask-vault-pass --ask-pass
    ```

-   Setup ansible variables for your DB server in the research-mysql repo. You
    may use the bioatlas-dev variables and research-mysql [README][research-mysql] as
    examples.

-   Run the research-mysql ansible to configure the DB.

-   Log into the database server, and modify the sql_mode variable in mysql and
    load in the dump files from the old system to the database.
    The dump files should be sourced in this order: 
    1. zfatlas.dump
    2. virtualslide_tiles.dump
    3. zfupdate-20150826.sql
    4. atlasesUpdate-20150904.sql
    5. zfupdate-20150904.sql
    6. zfupdate-20151023.sql
    7. functions.sql
    ```mysql
    SET sql_mode = '';
    set global sql_mode = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
    source {{dump_file}}
    ```

[ansible branch]: https://toolchest.med.psu.edu/research-informatics/bioatlas/tree/ansible/host_vars
[contributing]: CONTRIBUTING.md#build-process
[php]: <https://www.php.net/releases/>
[research-mysql]: https://toolchest.med.psu.edu/research-informatics/research-mysql/tree/master/roles/research-mysql/README.md
[ansible-readme]: https://toolchest.med.psu.edu/research-informatics/bioatlas/tree/ansible/README.md
