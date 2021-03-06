# Security Vocabulary

![CI](https://github.com/w3c-ccg/security-vocab/workflows/CI/badge.svg)

This repository contains the [Credentials Community Group][ccg]
Security Vocabulary and a [npm package][security-context] that exports related
contexts and constants.

## Security Vocabulary

Security Vocabulary specification: https://w3c-ccg.github.io/security-vocab/.

## Context Package

The repository contains [JSON-LD][] contexts for the Security Vocabulary.
These are also packaged in a [npm package][security-context] for CommonJS and
ES Modules. To use with NPM and Node.js, use the following:

```
npm install security-context
```

The package exposes two values:

- `contexts`: A Map from context URI to JSON-LD context.
- `constants`: An Object of shorthand keys mapped to context URIs.

```js
const {contexts, constants} = require('security-context');
```

With ES Modules:

```js
// use one of the following forms:
import * as securityvocab1 from 'security-context';
import {default as securityvocab2} from 'security-context';
import {contexts, constants} from 'security-context';
```

[ccg]: https://w3c-ccg.github.io/
[json-ld]: https://json-ld.org/
[security-context]: https://www.npmjs.com/package/security-context
