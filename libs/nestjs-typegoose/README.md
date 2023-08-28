# nestjs-typegoose

[![NPM](https://nodei.co/npm/@m8a/nestjs-typegoose.png)](https://nodei.co/npm/@m8a/nestjs-typegoose/)

[![npm version](https://badge.fury.io/js/@m8a%2Fnestjs-typegoose.svg)](https://badge.fury.io/js/@m8a%2Fnestjs-typegoose)
[![Build Status](https://travis-ci.org/kpfromer/nestjs-typegoose.svg?branch=master)](https://travis-ci.org/kpfromer/nestjs-typegoose)
[![Coverage Status](https://coveralls.io/repos/github/kpfromer/nestjs-typegoose/badge.svg?branch=master)](https://coveralls.io/github/kpfromer/nestjs-typegoose?branch=master)
![npm](https://img.shields.io/npm/dm/nestjs-typegoose)
![npm bundle size](https://img.shields.io/bundlephobia/min/nestjs-typegoose)

## Description

**NOTE:** this is a fork of [nestjs-typegoose](https://github.com/kpfromer/nestjs-typegoose). We and another dependency we use needed this package to be up-to-date and since the original maintainer hadn't kept up with the updating for over a year, we've decided to take over the package. We are very grateful for the work put into the original package and give kpfromer full credit for the work.

**What does this package do?** It injects [typegoose](https://github.com/@typegoose/typegoose) models for [nest](https://github.com/nestjs/nest) components (mainly services). This module is very similar to [@nestjs/mongoose.](https://docs.nestjs.com/techniques/mongodb) however, Typegoose goes much further in terms of TypeScript support for Mongoose.

Using Typegoose removes the need for having a Model interface and more.

## Installation

```bash
npm install --save @m8a/nestjs-typegoose
```

or

```
yarn add @m8a/nestjs-typegoose
```

## Documentation

[Here is the full documentation describing all basic and advanced features.](https://nestjs-typegoose.m8a.io)

## Basic usage

You can checkout the `example` project for more details.

**app.module.ts**

```typescript
import { Module } from "@nestjs/common";
import { TypegooseModule } from "@m8a/nestjs-typegoose";
import { CatsModule } from "./cat.module.ts";

@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost:27017/nest", {
      useNewUrlParser: true,
    }),
    CatsModule,
  ],
})
export class ApplicationModule {}
```

Create class that describes your schema

**cat.model.ts**

```typescript
import { prop } from "@typegoose/typegoose";
import { IsString } from "class-validator";

export class Cat {
  @IsString()
  @prop({ required: true })
  name: string;
}
```

Inject Cat for `CatsModule`

**cat.module.ts**

```typescript
import { Module } from "@nestjs/common";
import { TypegooseModule } from "@m8a/nestjs-typegoose";
import { Cat } from "./cat.model";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";

@Module({
  imports: [TypegooseModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```

Get the cat model in a service

**cats.service.ts**

```typescript
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@m8a/nestjs-typegoose";
import { Cat } from "./cat.model";
import { ReturnModelType } from "@typegoose/typegoose";

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat) private readonly catModel: ReturnModelType<typeof Cat>
  ) {}

  async create(createCatDto: { name: string }): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }

  async findAll(): Promise<Cat[] | null> {
    return await this.catModel.find().exec();
  }
}
```

Finally, use the service in a controller!

**cats.controller.ts**

```typescript
import { Controller, Get, Post, Body } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { Cat } from "./cats.model.ts";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async getCats(): Promise<Cat[] | null> {
    return await this.catsService.findAll();
  }

  @Post()
  async create(@Body() cat: Cat): Promise<Cat> {
    return await this.catsService.create(cat);
  }
}
```

### Added in 11.1.0

You can now inject a connection inside of your services, when needed.

```typescript
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@m8a/nestjs-typegoose';
import { Connection } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectConnection() private connection: Connection) {}
}

```

## Requirements

1.  @typegoose/typegoose +9
2.  @nestjs/common +8
3.  @nestjs/core +8

## License

@m8a/nestjs-typegoose is [MIT licensed](LICENSE).
