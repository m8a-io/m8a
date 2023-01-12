---
id: install
title: Installation
---

Welcome to the nestjs-typegoose. The Typegoose module/ plugin for NestJS.

This project is a fork of the original [nestjs-typegoose](https://github.com/kpfromer/nestjs-typegoose) and credit where credit is definitely due, practically all of the coding was done by [Kyle Pfromer](https://github.com/kpfromer). Many thanks to him for putting this module together. This project aims to continue that work and to maintain the plugin for the long run. 

:::note
This assumes you have a nestjs project to work with. If you don't it is recommended that you use the [nestjs cli](https://docs.nestjs.com/cli/overview) to jump start an example project to get started using `nestjs-typegoose`.
:::

Using `npm`:

`npm install --save @m8a/nestjs-typegoose`

Using `yarn`:

`yarn add @m8a/nestjs-typegoose`


## Peer Dependencies

nestjs-typegoose requires a few peer dependencies to be install for things to work. You need to install the following:

- `@typegoose/typegoose` +9.13.0-beta.1+
- `@nestjs/common` +9.0.0
- `@nestjs/core` +9.0.0
- `mongoose` +6.7.0

Using `npm`:

`npm install --save @typegoose/typegoose @nestjs/common @nestjs/core mongoose`

Using `yarn`:

`yarn add @typegoose/typegoose @nestjs/common @nestjs/core mongoose`

Now you are ready to get [ready to start](usage.md) using `nestjs-typegoose`!