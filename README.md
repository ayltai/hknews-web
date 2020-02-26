# HK News Web

| Category      | Measurement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pipeline      | [![CircleCI](https://img.shields.io/circleci/project/github/ayltai/hknews-web/master.svg?style=flat)](https://circleci.com/gh/ayltai/hknews-web)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Quality       | [![Code Quality](https://img.shields.io/codacy/grade/905ca9343bb94e668420a5a33be855b5.svg?style=flat)](https://app.codacy.com/app/AlanTai/hknews-web/dashboard) [![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/ayltai/hknews-web)](https://lgtm.com/projects/g/ayltai/hknews-web/context:javascript) [![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/ayltai_hknews-web?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_hknews-web) [![Sonar Violations (short format)](https://img.shields.io/sonar/violations/ayltai_hknews-web?format=short&server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_hknews-web) |
| Coverage      | [![Code Coverage](https://img.shields.io/codecov/c/github/ayltai/hknews-web.svg?style=flat)](https://codecov.io/gh/ayltai/hknews-web) [![Sonar Coverage](https://img.shields.io/sonar/coverage/ayltai_hknews-web?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_hknews-web)                                                                                                                                                                                                                                                                                                                                                                                                  |
| Rating        | [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ayltai_hknews-web&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=ayltai_hknews-web) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=ayltai_hknews-web&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=ayltai_hknews-web) [![Sonar Tech Debt](https://img.shields.io/sonar/tech_debt/ayltai_hknews-web?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_hknews-web)                                                                                                                                                                |
| Security      | [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ayltai_hknews-web&metric=security_rating)](https://sonarcloud.io/dashboard?id=ayltai_hknews-web) [![CII Best Practices Tiered Percentage](https://img.shields.io/cii/percentage/3190)](https://bestpractices.coreinfrastructure.org/projects/3190) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ayltai_hknews-web&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=ayltai_hknews-web)                                                                                                                                                                                                |
| Miscellaneous | ![Maintenance](https://img.shields.io/maintenance/yes/2020) [![Release](https://img.shields.io/github/release/ayltai/hknews-web.svg?style=flat)](https://github.com/ayltai/hknews-web/releases) [![License](https://img.shields.io/github/license/ayltai/hknews-web.svg?style=flat)](https://github.com/ayltai/hknews-web/blob/master/LICENSE)

Serves aggregated news from 10+ local news publishers in Hong Kong. Made with ❤

## Features
* Support text, image and video news
* Read news from 10+ local news publishers
* No ads. We hate ads as much as you do

## News Publishers
* [Apple Daily (蘋果日報)](http://hk.apple.nextmedia.com)
* [Oriental Daily (東方日報)](http://orientaldaily.on.cc)
* [Sing Tao (星島日報)](http://std.stheadline.com)
* [Hong Kong Economic Times (經濟日報)](http://www.hket.com)
* [Sing Pao (成報)](https://www.singpao.com.hk)
* [Ming Pao (明報)](http://www.mingpao.com)
* [Headline (頭條日報)](http://hd.stheadline.com)
* [Sky Post (晴報)](http://skypost.ulifestyle.com.hk)
* [Hong Kong Economic Journal (信報)](http://www.hkej.com)
* [RTHK (香港電台)](http://news.rthk.hk)
* [South China Morning Post (南華早報)](http://www.scmp.com/frontpage/hk)
* [The Standard (英文虎報)](http://www.thestandard.com.hk)
* [Wen Wei Po (文匯報)](http://news.wenweipo.com)

## HK News Backend
[hknews-backend](https://github.com/ayltai/hknews-backend)

## HK News Mobile
[hknews-android](https://github.com/ayltai/hknews-android)

## HK News Infrastructure
[hknews-infrastructure](https://github.com/ayltai/hknews-infrastructure)

## Installation
1. Install [NodeJS](https://nodejs.org)
2. Install dependencies
   ```sh
   npm i -D
   ```

## Run development server
1. Refer to [hknews-backend](https://github.com/ayltai/hknews-backend) project to run HK News backend server locally
2. Export environment variables for the API endpoint and project URL
   ```sh
   export REACT_APP_API_ENDPOINT=http://localhost:8080
   ```
3. Start the server
   ```sh
   npm start
   ```

## Run linters
```sh
npm run check
```

## Run unit tests
```sh
npm run test
```

## Run production server
1. Export environment variable for the API endpoint and project URL
   ```sh
   export REACT_APP_API_ENDPOINT=https://hknews.dev
   ```
2. Build for production
   ```sh
   npm run build
   ```
3. Serve production build files
   ```sh
   npm run serve
   ```

## Acknowledgements
This software is made with the support of open source projects:
* [NodeJS](https://nodejs.org)
* [React](https://github.com/facebook/react)
* [Create React App](https://github.com/facebook/create-react-app)
* [React Admin](https://marmelab.com/react-admin)
* [Material UI](https://material-ui.com)
* [react-image-lightbox](https://github.com/frontend-collective/react-image-lightbox)
* [react-timeago](https://github.com/nmn/react-timeago)
* [Stylelint](https://stylelint.io)
* [TSLint](https://palantir.github.io/tslint)
* [Enzyme](https://airbnb.io/enzyme)

... and closed source services:
* [CircleCI](https://circleci.com)
* [SonarCloud](https://sonarcloud.io)
