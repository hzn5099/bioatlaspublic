# The directory in which to perform the build.
BUILDDIR ?= build
# The directory in which to store artifacts ready for distribution
DISTDIR ?= dist
# The name of the package to build
NAME ?= bioatlas
# The release number represents the version of the package. When we update the
# package but not the software, we increment the release number.
RELEASE ?= 1
# The version of the software to be packaged
VERSION ?= 1.0.8
# The shell used by the makefile must be bash with extended globbing
SHELL := /usr/bin/env bash -O extglob

build: clean
	mkdir "$(BUILDDIR)" "$(DISTDIR)"
	gtar -czvf "build/$(NAME)-$(VERSION).tar.gz" \
            --transform "s,^,/$(NAME)-$(VERSION)/," !(build|builds)
	rpmbuild --define "_topdir %(pwd)/build" \
	    --define "_builddir %{_topdir}" \
            --define "_name $(NAME)" \
            --define "_release $(RELEASE)" \
	    --define "_rpmdir %{_topdir}" \
	    --define '_rpmfilename %%{NAME}-%%{VERSION}-%%{RELEASE}.%%{ARCH}.rpm' \
	    --define "_sourcedir  %{_topdir}" \
	    --define "_specdir %{_topdir}" \
	    --define "_srcrpmdir %{_topdir}" \
            --define "_version $(VERSION)" \
		--quiet \
	    -ba "$(NAME).spec"
	cp "$(BUILDDIR)"/*.noarch.rpm "$(DISTDIR)"

clean:
	rm -rf "$(BUILDDIR)" "$(DISTDIR)"
