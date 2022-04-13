import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import Productos from './ProductsQuery.js';