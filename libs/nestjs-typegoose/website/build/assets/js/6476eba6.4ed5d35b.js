'use strict'
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [827],
  {
    4760: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => r,
          metadata: () => i,
          toc: () => l
        })
      var o = n(1527),
        s = n(8627)
      const r = { id: 'usage', title: 'Basic Usage' },
        a = void 0,
        i = {
          id: 'usage',
          title: 'Basic Usage',
          description: 'Check out this example project if you need help.',
          source: '@site/docs/usage.md',
          sourceDirName: '.',
          slug: '/usage',
          permalink: '/docs/usage',
          draft: !1,
          unlisted: !1,
          editUrl: 'https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/usage.md',
          tags: [],
          version: 'current',
          frontMatter: { id: 'usage', title: 'Basic Usage' },
          sidebar: 'someSidebar',
          previous: { title: 'Installation', permalink: '/docs/install' },
          next: { title: 'Testing', permalink: '/docs/testing' }
        },
        c = {},
        l = [
          { value: 'Connecting to the MongoDB database', id: 'connecting-to-the-mongodb-database', level: 2 },
          { value: 'Creating a Database Model', id: 'creating-a-database-model', level: 2 },
          { value: 'Creating the service', id: 'creating-the-service', level: 2 },
          { value: 'Connecting with the API', id: 'connecting-with-the-api', level: 2 },
          {
            value: 'Providing the model for our services',
            id: 'providing-the-model-for-our-services',
            level: 2
          }
        ]
      function d(e) {
        const t = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ...(0, s.a)(),
          ...e.components
        }
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(t.admonition, {
              type: 'note',
              children: (0, o.jsxs)(t.p, {
                children: [
                  'Check out this ',
                  (0, o.jsx)(t.a, {
                    href: 'https://github.com/kpfromer/nestjs-typegoose/tree/master/example',
                    children: 'example project'
                  }),
                  ' if you need help.'
                ]
              })
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'You can check out the ',
                (0, o.jsx)(t.code, { children: 'example' }),
                ' project for more details.'
              ]
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'We will be creating a ',
                (0, o.jsx)(t.code, { children: 'CatsModule' }),
                ', a ',
                (0, o.jsx)(t.code, { children: 'Cat' }),
                ' database model, a ',
                (0, o.jsx)(t.code, { children: 'CatsService' }),
                ', and a ',
                (0, o.jsx)(t.code, { children: 'CatsController' }),
                '.'
              ]
            }),
            '\n',
            (0, o.jsx)(t.h2, {
              id: 'connecting-to-the-mongodb-database',
              children: 'Connecting to the MongoDB database'
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'First, we will connect to the mongo database using ',
                (0, o.jsx)(t.code, { children: 'TypegooseModule.forRoot' }),
                '. We will import the ',
                (0, o.jsx)(t.code, { children: 'CatsModule' }),
                ' that we will create shortly.'
              ]
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'If you want to have more connections to different databases read about how to do that ',
                (0, o.jsx)(t.a, { href: '/docs/multiple-connections', children: 'here' }),
                '.'
              ]
            }),
            '\n',
            (0, o.jsx)(t.p, { children: (0, o.jsx)(t.strong, { children: 'app.module.ts' }) }),
            '\n',
            (0, o.jsx)(t.pre, {
              children: (0, o.jsx)(t.code, {
                className: 'language-typescript',
                children:
                  'import { Module } from "@nestjs/common";\nimport { TypegooseModule } from "@m8a/nestjs-typegoose";\nimport { CatsModule } from "./cat.module.ts";\n\n@Module({\n  imports: [\n    TypegooseModule.forRoot("mongodb://localhost:27017/nest", {\n      useNewUrlParser: true\n    }),\n    CatsModule\n  ]\n})\nexport class ApplicationModule {}\n'
              })
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'Here we are connecting to ',
                (0, o.jsx)(t.code, { children: 'mongodb://localhost:27017/nest' }),
                ". To learn more about MongoDB URI's see the official ",
                (0, o.jsx)(t.a, {
                  href: 'https://docs.mongodb.com/manual/reference/connection-string/',
                  children: 'mongodb article'
                }),
                '.'
              ]
            }),
            '\n',
            (0, o.jsx)(t.h2, { id: 'creating-a-database-model', children: 'Creating a Database Model' }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'We now need to create a database model that describes the data we want to store. In this case, it will be cats with names. Read more about Typegoose ',
                (0, o.jsx)(t.a, {
                  href: 'https://typegoose.github.io/typegoose/',
                  children: 'on their website'
                }),
                '.'
              ]
            }),
            '\n',
            (0, o.jsx)(t.p, { children: (0, o.jsx)(t.strong, { children: 'cat.model.ts' }) }),
            '\n',
            (0, o.jsx)(t.pre, {
              children: (0, o.jsx)(t.code, {
                className: 'language-typescript',
                children:
                  'import { prop } from "@typegoose/typegoose";\n\nexport class Cat {\n  @prop({ required: true })\n  name: string;\n}\n'
              })
            }),
            '\n',
            (0, o.jsx)(t.h2, { id: 'creating-the-service', children: 'Creating the service' }),
            '\n',
            (0, o.jsx)(t.p, {
              children:
                'We need to create a service to handle the business logic of creating, reading, updating, and deleting (CRUD) entities, or cats, in the database.'
            }),
            '\n',
            (0, o.jsx)(t.p, { children: (0, o.jsx)(t.strong, { children: 'cats.service.ts' }) }),
            '\n',
            (0, o.jsx)(t.pre, {
              children: (0, o.jsx)(t.code, {
                className: 'language-typescript',
                children:
                  'import { Injectable } from "@nestjs/common";\nimport { InjectModel } from "@m8a/nestjs-typegoose";\nimport { Cat } from "./cat.model";\nimport { ReturnModelType } from "@typegoose/typegoose";\n\n@Injectable()\nexport class CatsService {\n  constructor(\n    @InjectModel(Cat) private readonly catModel: ReturnModelType<typeof Cat>\n  ) {}\n\n  async create(createCatDto: { name: string }): Promise<Cat> {\n    const createdCat = new this.catModel(createCatDto);\n    return await createdCat.save();\n  }\n\n  async findAll(): Promise<Cat[] | null> {\n    return await this.catModel.find().exec();\n  }\n}\n'
              })
            }),
            '\n',
            (0, o.jsx)(t.h2, { id: 'connecting-with-the-api', children: 'Connecting with the API' }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'Now we have the service created we need to connect this with the actual API calls. The ',
                (0, o.jsx)(t.code, { children: 'CatsController' }),
                ' will receive GET and POST requests on the URL ',
                (0, o.jsx)(t.code, { children: '/cats' }),
                ' and will get and create cats respectively.'
              ]
            }),
            '\n',
            (0, o.jsx)(t.p, { children: (0, o.jsx)(t.strong, { children: 'cats.controller.ts' }) }),
            '\n',
            (0, o.jsx)(t.pre, {
              children: (0, o.jsx)(t.code, {
                className: 'language-typescript',
                children:
                  'import { Controller, Get, Post, Body } from "@nestjs/common";\nimport { CatsService } from "./cats.service";\nimport { Cat } from "./cats.model.ts";\n\n@Controller("cats")\nexport class CatsController {\n  constructor(private readonly catsService: CatsService) {}\n\n  @Get()\n  async getCats(): Promise<Cat[] | null> {\n    return await this.catsService.findAll();\n  }\n\n  @Post()\n  async create(@Body() cat: Cat): Promise<Cat> {\n    return await this.catsService.create(cat);\n  }\n}\n'
              })
            }),
            '\n',
            (0, o.jsx)(t.h2, {
              id: 'providing-the-model-for-our-services',
              children: 'Providing the model for our services'
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'We have to make sure we provide the needed models to our service with ',
                (0, o.jsx)(t.code, { children: 'TypegooseModule.forFeature' }),
                ' for the ',
                (0, o.jsx)(t.code, { children: 'InjectModel' }),
                ' to work. This helps prevents unauthorized access to other models.'
              ]
            }),
            '\n',
            (0, o.jsx)(t.p, { children: (0, o.jsx)(t.strong, { children: 'cat.module.ts' }) }),
            '\n',
            (0, o.jsx)(t.pre, {
              children: (0, o.jsx)(t.code, {
                className: 'language-typescript',
                children:
                  'import { Module } from "@nestjs/common";\nimport { TypegooseModule } from "@m8a/nestjs-typegoose";\nimport { Cat } from "./cat.model";\nimport { CatsController } from "./cats.controller";\nimport { CatsService } from "./cats.service";\n\n@Module({\n  imports: [TypegooseModule.forFeature([Cat])],\n  controllers: [CatsController],\n  providers: [CatsService]\n})\nexport class CatsModule {}\n'
              })
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                "That's it, you have created a simple working api with ",
                (0, o.jsx)(t.code, { children: '@m8a/nestjs-typegoose' }),
                '!'
              ]
            })
          ]
        })
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, s.a)(), ...e.components }
        return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e)
      }
    },
    8627: (e, t, n) => {
      n.d(t, { Z: () => i, a: () => a })
      var o = n(959)
      const s = {},
        r = o.createContext(s)
      function a(e) {
        const t = o.useContext(r)
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function i(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : a(e.components)),
          o.createElement(r.Provider, { value: t }, e.children)
        )
      }
    }
  }
])
