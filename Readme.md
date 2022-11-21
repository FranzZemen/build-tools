# Read Me

This<sup>1</sup> is a base scaffolding package for building and publishing javascript and/or typescript applications to a single
CommonJS and ECMAScript distribution.

# Features

| Feature    | Short Description                        | First Available In |   Label   |
|------------|------------------------------------------|:------------------:|:---------:|
|||||
| bootstrap  | Supports bootstrapping                   |       0.0.1        | Pre-Alpha |
| mocha      | Supports mocha test framework*           ||
| md         | Supports markdown source                 |       0.0.1        | Pre-Alpha |
| json       | Supports json source                     |       0.0.1        | Pre-Alpha |
| typescript | Supports Typescript source               |       0.0.1        | Pre-Alpha |
| ECMAScript | Supports Javascript source               |       0.0.1        | Pre-Alpha |
| [yarn][]   | Supports the yarn package manager >= 2.0 |       0.0.1        | Pre-Alpha |
| [pnpm][]   | Supports the pnpm package manager        |       0.0.1        | Pre-Alpha |
| [npm]]     | Supports the npm package manager         |       0.0.1        | Pre-Alpha |

# Critical Dependencies

Ensure the dependencies are properly installed at the minimum version listed.  Prior versions may work, they just haven't
been tested.  Report any successes or issues with these!

- **[nodejs][]**
- **Package Manager** ([npm][] | [pnpm][] | [yarn][] | [no package manager][])

| Critical Dependency | Supported Versions                                            |
|---------------------|---------------------------------------------------------------|
| [nodejs][]          | LTS Versions since 16:  >= 16.13.0 <= 16.18.1<br/>>= 18.12.0  |
| [npm][]             | If using npm, >= 5.2                                          |
| [pnpm][]            | If using pnpm, >= 7.17                                        |
| [yarn][]            | If using yarn, >= 3.30                                        |                                                             

# Other Dependencies

| Dependency | Usage                     | Supported Versions |
|------------|---------------------------|--------------------|
| Typescript | Include typescript source | >= 4.0.2           |
| Mocha      | Test with mocha           | >= 10.0.0          |



3. Installing this package will install typescript locally. If you want to run tsc globally, install typescript
   globally. If you have it installed globally, compare typescript versions to better understand issues, if they occur.

# Creating a project and bootstrapping

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
