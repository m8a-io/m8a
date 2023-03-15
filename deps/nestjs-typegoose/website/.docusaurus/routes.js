import React from "react";
import ComponentCreator from "@docusaurus/ComponentCreator";

export default [
  {
    path: "/nestjs-typegoose/docs",
    component: ComponentCreator("/nestjs-typegoose/docs", "258"),
    routes: [
      {
        path: "/nestjs-typegoose/docs/async-configuration",
        component: ComponentCreator(
          "/nestjs-typegoose/docs/async-configuration",
          "eb5"
        ),
        exact: true,
        sidebar: "someSidebar",
      },
      {
        path: "/nestjs-typegoose/docs/discriminators",
        component: ComponentCreator(
          "/nestjs-typegoose/docs/discriminators",
          "df5"
        ),
        exact: true,
        sidebar: "someSidebar",
      },
      {
        path: "/nestjs-typegoose/docs/faq",
        component: ComponentCreator("/nestjs-typegoose/docs/faq", "cc5"),
        exact: true,
        sidebar: "someSidebar",
      },
      {
        path: "/nestjs-typegoose/docs/install",
        component: ComponentCreator("/nestjs-typegoose/docs/install", "f37"),
        exact: true,
        sidebar: "someSidebar",
      },
      {
        path: "/nestjs-typegoose/docs/multiple-connections",
        component: ComponentCreator(
          "/nestjs-typegoose/docs/multiple-connections",
          "f80"
        ),
        exact: true,
        sidebar: "someSidebar",
      },
      {
        path: "/nestjs-typegoose/docs/schema-options",
        component: ComponentCreator(
          "/nestjs-typegoose/docs/schema-options",
          "9c7"
        ),
        exact: true,
        sidebar: "someSidebar",
      },
      {
        path: "/nestjs-typegoose/docs/testing",
        component: ComponentCreator("/nestjs-typegoose/docs/testing", "17e"),
        exact: true,
        sidebar: "someSidebar",
      },
      {
        path: "/nestjs-typegoose/docs/usage",
        component: ComponentCreator("/nestjs-typegoose/docs/usage", "e44"),
        exact: true,
        sidebar: "someSidebar",
      },
    ],
  },
  {
    path: "/nestjs-typegoose/",
    component: ComponentCreator("/nestjs-typegoose/", "fcd"),
    exact: true,
  },
  {
    path: "*",
    component: ComponentCreator("*"),
  },
];
