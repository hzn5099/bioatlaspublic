# Ansible BioAtlas Role

Example command to run a playbook against bioatlas:
`ansible-playbook -i <storename> site.yml --ask-become-pass --ask-vault-pass --ask-pass`

The following are special variables that need to be set for BioAtlas, using bioatlas-dev as an example:
```yml
# host_vars/<hostname>/vars.yml

# Contains the location for the database server.
mysql_host: psh01com3biodb1.pennstatehealth.net
mysql_port: 3306
# Name of the database.
mysql_db: bioatlas-dev
# Login information for the BioAtlas user with basic read/write privileges.
mysql_user: bioatlas-dev
mysql_pass: '{{ vault_user_pass }}'
# Login information for the BiosAtlas user with admin privileges.
mysql_admin: bioatlas-dev-admin
mysql_admin_pass: '{{ vault_admin_pass }}'
```
