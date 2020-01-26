"use strict";

const cors = require("cors")({ origin: true });
const automl = require("@google-cloud/automl");

// SET THESE TO YOUR VALUES
const PROJECT_ID = "";
const REGION = "europe-west1";
const MODEL_ID = "";

const catOrDogPredictor = new automl.PredictionServiceClient(config);

exports.catOrDog = async (req, res) => {
  cors(req, res, async function() {
    const name = client.modelPath(PROJECT_ID, REGION, MODEL_ID);

    const payload = {
      image: {
        imageBytes: req.body
      }
    };

    const request = {
      name,
      payload
    };

    const response = await client
      .predict(request)
      .then(responses => {
        return JSON.stringify(responses);
      })
      .catch(err => {
        console.error(err);
      });

    res.header("Access-Control-Allow-Origin", "*");
    res.status(200);
    res.send({
      body: JSON.stringify(response)
    });
  });
};
