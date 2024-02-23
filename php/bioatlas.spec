%define appdir /dev/php/bioatlas

Summary: A tool for the examining virtual slides.
Name: %{_name}
Version: %{_version}
Release: %{_release}
License: Proprietary
Source0: %{name}-%{version}.tar.gz
URL: http://bio-atlas.psu.edu
BuildArch: noarch
BuildRoot: %{_tmppath}/%{name}-%{version}-%{release}-root
Requires: httpd24
AutoReq: no

%description
%{summary}

%prep
%setup

%build
checkmodule -M -m selinux/bioatlas.te -o selinux/bioatlas.mod
semodule_package -m selinux/bioatlas.mod -f selinux/bioatlas.fc -o selinux/bioatlas.pp

%install
mkdir -p %{buildroot}%{appdir}
cp -R bioatlas LICENSE selinux %{buildroot}%{appdir}
find %buildroot -type f \( -name '*.so' -o -name '*.so.*' \) -exec chmod 775 {} +

%clean

%files
%defattr(440,bioatlas,bioatlas,550)
%dir %{appdir}
%{appdir}/selinux
%{appdir}/bioatlas
%{appdir}/LICENSE

%pre
if [ "$1" = 1 ]; then
    useradd -d /dev/php/bioatlas -s /sbin/nologin --system bioatlas
    usermod -a -G bioatlas apache
fi

%post
semodule -u %{appdir}/selinux/bioatlas.pp
restorecon -RF %{appdir}

%postun
if [ "$1" = 0 ]; then
    userdel bioatlas
    groupdel bioatlas
    semodule -r bioatlas
fi

