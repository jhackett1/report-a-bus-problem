# Report a bus problem

**[ON THE WEB HERE](https://thirsty-noether-ab7efc.netlify.com/)**

Simple one-page app to report delays and cancellations, and optionally sign up for email updates.

Made with `create-react-app`.

It posts data to an endpoint which is intended to be a Zapier webhook that then handles the submission, but could theoretically be anything.

## Run it locally

Node and npm are needed.

Make sure the `REACT_APP_FORM_ENDPOINT` [environment variable](https://create-react-app.dev/docs/adding-custom-environment-variables) is set.

```
npm i
npm run dev
```

## Deploying it to the web

Suitable for all sorts of static hosting. Just serve the /build directory.

```
npm run build
```

## To do

- add manifest file and service worker for offline installs ✅
- add social metadata ✅
- add static snapshot integration ✅
