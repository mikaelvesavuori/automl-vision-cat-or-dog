# GCP AutoML Vision: Cat or dog?

Use AutoML Vision the determine if an image is of a dog or a cat. Contains both backend code and a frontend that uses an input element so you can provide your own image.

Requires that you train a model to detect the change, as I cannot get GCP to export the model (else I'd add it to the repo).

**Note**: This is based on a fairly old example and this code may (or may not) work as intended, though it is cleaned and pruned at time of commit.

## Prerequisites

- You need to have a Google Cloud Platform account
- You may need to activate the Cloud Vision API
- You need to train a model in AutoML Vision (in our case, to understand what a dog and a cat looks like)

## Setup

1. Ensure that your AutoML model is deployed and running
2. Add your own project ID, credentials file path and model ID to `serverless.yml`
3. If you want to use the frontend demo code, you need to edit `frontend/index.html` (set the `PROJECT_ID` variable)

## Deployment

1. Install local dependencies with `npm install`
2. Run `sls deploy`
