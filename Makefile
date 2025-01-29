install:
	npm ci

publish:
	npm publish --dry-run

make lint:
	npx eslint

gendiff -h:
	node bin/gendiff.js -h

gendiff -V:
	node bin/gendiff.js -V