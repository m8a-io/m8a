## m8a (my-infinite-apps)

m8a is a platform designed for developing apps extremely fast. It has a ton of opinionation and yes, it will lock you in to a certain "way of doing things". If you want to be free of these things and work on your own at your own pace (namely slow as a snail), then m8a is not for you. If you want to get running fast with a frontend and API you can grow with, then m8a might interest you a lot.

_Be aware!_ m8a is in POC state currently and is unfinished and far even from an MVP alpha. However, if you are interested in where we are heading, please ask any questions in our [Discussion forum](https://github.com/m8a-io/m8a/discussions). Thanks!

## Current Packages

These are the packages currently being published from this repo.
| Package | Description |
| --- | --- |
| @m8a/nestjs-typegoose | This is a fork of `nestjs-typegoose` to keep it up-to-date. |

## Future Packages

These are the packages planned to be published from this repo in the future.
| Package | Description |
| --- | --- |
| @m8a/logger | This is the m8a logger used for the CLI |
| @m8a/cli-local | The plugin with local commands to run an app and api. |
| @m8a/cli-lib | A library of utilities for the CLI. |
| @m8a/cli | The global CLI app for m8a development. |
| @m8a/core | The core library for m8a app development. |
| @m8a/starter-kit-app | A basis of a Quasar app with specific setup for m8a applications |
| @m8a/starter-kit-api | A basis NestJS app with specific setup for m8a apis backends. |

.... and more to come!

## m8a Platform Development

If you'd like to help develop m8a, you'll need to install [Rush](https://rushjs.io/). Rush is a monorepo build manager, which m8a uses for its own development.

To install Rush globally:

`$ npm install -g @microsoft/rush`

Next you'll need to fork and then clone this repo.

We use pnpm as our package manager. Make sure you have at least v7 installed.

Once you have cloned the repo, change to the root directory and carry out these commands:

```
$ rush install

$ rush build
```

Both the install and the build will take a minute or two.
