# Read Me

This is a base scaffolding package for building and publishing javascript and/or typescript applications to a single
CommonJS and ECMAScript distribution.

# Features

| Feature    | Short Description                        | First Available In |   Label   |
|------------|------------------------------------------|:------------------:|:---------:|
|||||
| bootstrap  | Supports bootstrapping                   |       0.0.1        | Pre-Alpha |
| mocha      | Supports mocha test framework*           |       0.0.1        | Pre-Alpha |
| md         | Supports markdown source                 |       0.0.1        | Pre-Alpha |
| json       | Supports json source                     |       0.0.1        | Pre-Alpha |
| typescript | Supports Typescript source               |       0.0.1        | Pre-Alpha |
| ECMAScript | Supports Javascript source               |       0.0.1        | Pre-Alpha |
| [yarn][]   | Supports the yarn package manager >= 2.0 |       0.0.1        | Pre-Alpha |
| [pnpm][]   | Supports the pnpm package manager        |       0.0.1        | Pre-Alpha |
| [npm]]     | Supports the npm package manager         |       0.0.1        | Pre-Alpha |

# Critical Dependencies

Critical dependencies mean that functionality internal to build-tools depends on these in a way that would
render build-tools useless without them.

- **[nodejs][]**
- **Package Manager** ([npm][] | [pnpm][] | [yarn][] | [no package manager][])

| Critical Dependency | Supported Versions<sup>1</sup>                               | Bootstrap?<sup>2</sup> |
|---------------------|--------------------------------------------------------------|:----------------------:|
| [nodejs][]          | LTS Versions since 16:  >= 16.13.0 <= 16.18.1<br/>>= 18.12.0 |           No           |
| [npm][]             | If using npm, >= 5.2                                         |           No           |
| [pnpm][]            | If using pnpm, >= 7.17                                       |           No           |
| [yarn][]            | If using yarn, >= 3.30                                       |           No           |                                                             

1. Prior versions may work, they just haven't been tested.  Report any successes or issues with these!
2. Indicates whether the bootstrapping process can install these dependencies:
   1. No: Must be installed prior to using build-tools
   2. Local: Can be installed by the bootstrapping process, and will be installed locally
   3. Global: Can be installed by the bootstrapping process, and will be installed globally

# Feature Dependencies

Feature dependencies extend the build-tools usability.  Letting build-tools know you're using them allows 
build-tools to properly configure itself.  

By default, build-tools will install the latest version.Prior versions may work, they just haven't been tested. Report
any successes or issues with these!

| Dependency     | Usage                     | Supported Versions<sup>1</sup> | Bootstrap?<sup>2</sup> |
|----------------|---------------------------|--------------------------------|:----------------------:|
| [Typescript][] | Include typescript source | >= 4.0.2                       |         Local          |
| [Mocha][]      | Test with mocha framework | >= 10.0.0                      |         Local          |
| [Chai][]       | Assert with chai          | >= 4.3.7                       |         Local          |
| [Jest][]       | Test with Jest framework  | >= 29.3.1                      |         Local          |  
| [Jasmine][]    | Jasmine                   | >= 4.5                         |         Local          |

1. Prior versions may work, they just haven't been tested.  Report any successes or issues with these!
2. Indicates whether the bootstrapping process can install these dependencies:
   1. No: Must be installed prior to using build-tools
   2. Local: Can be installed by the bootstrapping process, and will be installed locally
   3. Global: Can be installed by the bootstrapping process, and will be installed globally

# General Dependencies

General dependencies, most commonly the various packages required by a project should be installed using the package 
manager of choice.

# Limitations



# Install

```` javascript
npm i gulp-base --save-dev
````

# Creating or converting an existing repo

Use these instructions as a guide for creating or converting an existing repo to gulp-base. The instructions are
written for a new repo, however can easily be followed to understand how to convert an existing repo.

## Dependencies

1. **Nodejs** Ensure the latest stable [node release][] is installed. Versions
   earlier than 16.x.x have not been tested, but let us know if they work or what issues you encounter!
2. **NPM** Ensure you have NPM >= 5.2 installed so that npx is supported. If not, you will have to use alternative
   commands.
3. Install gulp-cli globally per gulp.js. Needs to be >= 4.0
4. If desired, per [typescript instructions][], install typescript globally

3. Installing this package will install typescript locally. If you want to run tsc globally, install typescript
   globally. If you have it installed globally, compare typescript versions to better understand issues, if they occur.
4. Per gulp.js instructions, install gulp-cli globally.

## Optionally, automatically create the scaffolding with defaults and user input where needed

```` 
npx gbscaffold
````

## Install gulp-base

```` 
npm i gulp-base --save-dev
````

The scaffolding consists of directories, base packages and files. Some defaults are requested as part of running
gbscaffold, while others are assumed. All defaults can be overriden in the final scaffolding. The scaffolding
created is described below in [Scaffolding][]

# Scaffolding

## Directories Created

- [project]

[//]: # (Page Links)

[scaffolding]:    #scaffolding
[nodejs]:         https://www.nodejs.org
[typescript]:     https://www.typescriptlang.org/download
[npm]:            https://docs.npmjs.com/getting-started
[yarn]:           https://yarnpkg.com/getting-started/install
[pnpm]:           https://pnpm.io/installation  
[mocha]:          https://mochajs.org/#installation
[chai]:           https://www.chaijs.com/
[jest]:           https://jestjs.io/docs/getting-started
[jasmine]:        https://jasmine.github.io/pages/getting_started.html
