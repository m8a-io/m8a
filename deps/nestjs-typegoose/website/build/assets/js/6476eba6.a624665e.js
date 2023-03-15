"use strict";
(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [827],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return p;
        },
        kt: function () {
          return m;
        },
      });
      const o = n(7294);
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function a(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function s(e) {
        for (let t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function i(e, t) {
        if (e == null) return {};
        let n,
          o,
          r = (function (e, t) {
            if (e == null) return {};
            let n,
              o,
              r = {},
              a = Object.keys(e);
            for (o = 0; o < a.length; o++)
              (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          const a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (n = a[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var l = o.createContext({}),
        c = function (e) {
          let t = o.useContext(l),
            n = t;
          return e && (n = typeof e === "function" ? e(t) : s(s({}, t), e)), n;
        },
        p = function (e) {
          const t = c(e.components);
          return o.createElement(l.Provider, { value: t }, e.children);
        },
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            const t = e.children;
            return o.createElement(o.Fragment, {}, t);
          },
        },
        u = o.forwardRef(function (e, t) {
          const n = e.components,
            r = e.mdxType,
            a = e.originalType,
            l = e.parentName,
            p = i(e, ["components", "mdxType", "originalType", "parentName"]),
            u = c(n),
            m = r,
            g = u["".concat(l, ".").concat(m)] || u[m] || d[m] || a;
          return n
            ? o.createElement(g, s(s({ ref: t }, p), {}, { components: n }))
            : o.createElement(g, s({ ref: t }, p));
        });
      function m(e, t) {
        const n = arguments,
          r = t && t.mdxType;
        if (typeof e === "string" || r) {
          const a = n.length,
            s = new Array(a);
          s[0] = u;
          const i = {};
          for (const l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
          (i.originalType = e),
            (i.mdxType = typeof e === "string" ? e : r),
            (s[1] = i);
          for (let c = 2; c < a; c++) s[c] = n[c];
          return o.createElement.apply(null, s);
        }
        return o.createElement.apply(null, n);
      }
      u.displayName = "MDXCreateElement";
    },
    2175: function (e, t, n) {
      n.r(t),
        n.d(t, {
          assets: function () {
            return p;
          },
          contentTitle: function () {
            return l;
          },
          default: function () {
            return m;
          },
          frontMatter: function () {
            return i;
          },
          metadata: function () {
            return c;
          },
          toc: function () {
            return d;
          },
        });
      var o = n(7462),
        r = n(3366),
        a = (n(7294), n(3905)),
        s = ["components"],
        i = { id: "usage", title: "Basic Usage" },
        l = void 0,
        c = {
          unversionedId: "usage",
          id: "usage",
          title: "Basic Usage",
          description: "Check out this example project if you need help.",
          source: "@site/docs/usage.md",
          sourceDirName: ".",
          slug: "/usage",
          permalink: "/nestjs-typegoose/docs/usage",
          draft: !1,
          editUrl:
            "https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/usage.md",
          tags: [],
          version: "current",
          frontMatter: { id: "usage", title: "Basic Usage" },
          sidebar: "someSidebar",
          previous: {
            title: "Installation",
            permalink: "/nestjs-typegoose/docs/install",
          },
          next: {
            title: "Testing",
            permalink: "/nestjs-typegoose/docs/testing",
          },
        },
        p = {},
        d = [
          {
            value: "Connecting to the MongoDB database",
            id: "connecting-to-the-mongodb-database",
            level: 2,
          },
          {
            value: "Creating a Database Model",
            id: "creating-a-database-model",
            level: 2,
          },
          {
            value: "Creating the service",
            id: "creating-the-service",
            level: 2,
          },
          {
            value: "Connecting with the API",
            id: "connecting-with-the-api",
            level: 2,
          },
          {
            value: "Providing the model for our services",
            id: "providing-the-model-for-our-services",
            level: 2,
          },
        ],
        u = { toc: d };
      function m(e) {
        const t = e.components,
          n = (0, r.Z)(e, s);
        return (0, a.kt)(
          "wrapper",
          (0, o.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "admonition",
            { type: "note" },
            (0, a.kt)(
              "p",
              { parentName: "admonition" },
              "Check out this ",
              (0, a.kt)(
                "a",
                {
                  parentName: "p",
                  href: "https://github.com/kpfromer/nestjs-typegoose/tree/master/example",
                },
                "example project"
              ),
              " if you need help."
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "You can check out the ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "example"),
            " project for more details."
          ),
          (0, a.kt)(
            "p",
            null,
            "We will be creating a ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "CatsModule"),
            ", a ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "Cat"),
            " database model, a ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "CatsService"),
            ", and a ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "CatsController"),
            "."
          ),
          (0, a.kt)(
            "h2",
            { id: "connecting-to-the-mongodb-database" },
            "Connecting to the MongoDB database"
          ),
          (0, a.kt)(
            "p",
            null,
            "First, we will connect to the mongo database using ",
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "TypegooseModule.forRoot"
            ),
            ". We will import the ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "CatsModule"),
            " that we will create shortly."
          ),
          (0, a.kt)(
            "p",
            null,
            "If you want to have more connections to different databases read about how to do that ",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "/nestjs-typegoose/docs/multiple-connections",
              },
              "here"
            ),
            "."
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "app.module.ts")
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              'import { Module } from "@nestjs/common";\nimport { TypegooseModule } from "@m8a/nestjs-typegoose";\nimport { CatsModule } from "./cat.module.ts";\n\n@Module({\n  imports: [\n    TypegooseModule.forRoot("mongodb://localhost:27017/nest", {\n      useNewUrlParser: true\n    }),\n    CatsModule\n  ]\n})\nexport class ApplicationModule {}\n'
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "Here we are connecting to ",
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "mongodb://localhost:27017/nest"
            ),
            ". To learn more about MongoDB URI's see the official ",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "https://docs.mongodb.com/manual/reference/connection-string/",
              },
              "mongodb article"
            ),
            "."
          ),
          (0, a.kt)(
            "h2",
            { id: "creating-a-database-model" },
            "Creating a Database Model"
          ),
          (0, a.kt)(
            "p",
            null,
            "We now need to create a database model that describes the data we want to store. In this case, it will be cats with names. Read more about Typegoose ",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "https://typegoose.github.io/typegoose/",
              },
              "on their website"
            ),
            "."
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "cat.model.ts")
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              'import { prop } from "@typegoose/typegoose";\n\nexport class Cat {\n  @prop({ required: true })\n  name: string;\n}\n'
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "creating-the-service" },
            "Creating the service"
          ),
          (0, a.kt)(
            "p",
            null,
            "We need to create a service to handle the business logic of creating, reading, updating, and deleting (CRUD) entities, or cats, in the database."
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "cats.service.ts")
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              'import { Injectable } from "@nestjs/common";\nimport { InjectModel } from "@m8a/nestjs-typegoose";\nimport { Cat } from "./cat.model";\nimport { ReturnModelType } from "@typegoose/typegoose";\n\n@Injectable()\nexport class CatsService {\n  constructor(\n    @InjectModel(Cat) private readonly catModel: ReturnModelType<typeof Cat>\n  ) {}\n\n  async create(createCatDto: { name: string }): Promise<Cat> {\n    const createdCat = new this.catModel(createCatDto);\n    return await createdCat.save();\n  }\n\n  async findAll(): Promise<Cat[] | null> {\n    return await this.catModel.find().exec();\n  }\n}\n'
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "connecting-with-the-api" },
            "Connecting with the API"
          ),
          (0, a.kt)(
            "p",
            null,
            "Now we have the service created we need to connect this with the actual API calls. The ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "CatsController"),
            " will receive GET and POST requests on the URL ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "/cats"),
            " and will get and create cats respectively."
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "cats.controller.ts")
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              'import { Controller, Get, Post, Body } from "@nestjs/common";\nimport { CatsService } from "./cats.service";\nimport { Cat } from "./cats.model.ts";\n\n@Controller("cats")\nexport class CatsController {\n  constructor(private readonly catsService: CatsService) {}\n\n  @Get()\n  async getCats(): Promise<Cat[] | null> {\n    return await this.catsService.findAll();\n  }\n\n  @Post()\n  async create(@Body() cat: Cat): Promise<Cat> {\n    return await this.catsService.create(cat);\n  }\n}\n'
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "providing-the-model-for-our-services" },
            "Providing the model for our services"
          ),
          (0, a.kt)(
            "p",
            null,
            "We have to make sure we provide the needed models to our service with ",
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "TypegooseModule.forFeature"
            ),
            " for the ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "InjectModel"),
            " to work. This helps prevents unauthorized access to other models."
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "cat.module.ts")
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              'import { Module } from "@nestjs/common";\nimport { TypegooseModule } from "@m8a/nestjs-typegoose";\nimport { Cat } from "./cat.model";\nimport { CatsController } from "./cats.controller";\nimport { CatsService } from "./cats.service";\n\n@Module({\n  imports: [TypegooseModule.forFeature([Cat])],\n  controllers: [CatsController],\n  providers: [CatsService]\n})\nexport class CatsModule {}\n'
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "That's it, you have created a simple working api with ",
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "@m8a/nestjs-typegoose"
            ),
            "!"
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
