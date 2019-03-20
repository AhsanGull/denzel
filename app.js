const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

#const CONNECTION_URL = ;
const DATABASE_NAME = "denzel";

const imdb = require('./src/imdb');
const DENZEL_IMDB_ID = 'nm0000243';