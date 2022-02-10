.SHELLFLAGS = -e -c
.ONESHELL:
.SILENT:

update_dependencies:
	find . -name "package-lock.json" -type f -prune -exec rm -rf '{}' +
# 	npx lerna exec "ncu -a"
	npx lerna exec "npm install"

# 	ncu -a
	npm i

# 	cd pipeline && ncu -a && npm i

bootstrap:
	npm install
	npx lerna bootstrap --reject-cycles

build:
	npx lerna run --stream build || fail

test: build
	npx lerna run --stream lint || fail
	cd packages
	for PACKAGE in `find packages -type d -maxdepth 1 -mindepth 1` ;\
	do \
	   echo Testing $$PACKAGE; \
	   cd $$PACKAGE; \
	   npx jest; \
	   cd ../.. ;\
	done

package: test
	npx lerna run --stream package || fail

bump_version:
	npx lerna version

publish:
	find . -name "*@`jq -r ".version" lerna.json`.jsii.tgz" -exec npm publish '{}' +

clean:
	find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
	find . -name "dist" -type d -prune -exec rm -rf '{}' +
