"use strict";

const catOrDogFunction = require("./functions/catOrDog");

const functions = require("firebase-functions");
const f = functions.region("europe-west1").https;
const catOrDog = f.onRequest(catOrDogFunction);

module.exports = { catOrDog };
