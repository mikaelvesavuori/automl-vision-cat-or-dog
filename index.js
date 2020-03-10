"use strict";

const automl = require("@google-cloud/automl");
const client = new automl.PredictionServiceClient();

exports.catOrDog = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Max-Age", "3600");
    res.status(204).send("");
  } else {
    const name = client.modelPath(
      process.env.PROJECT_ID,
      process.env.REGION,
      process.env.MODEL_ID
    );

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

    res.status(200).send({
      body: JSON.stringify(response)
    });
  }
};
