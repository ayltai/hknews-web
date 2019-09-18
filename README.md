# HK News Web

[![GitHub Actions](https://github.com/actions/setup-node/workflows/Main%20workflow/badge.svg)](https://github.com/ayltai/hknews-web/actions)
[![CircleCI](https://img.shields.io/circleci/project/github/ayltai/hknews-web/master.svg?style=flat)](https://circleci.com/gh/ayltai/hknews-web)
[![Code Quality](https://img.shields.io/codacy/grade/905ca9343bb94e668420a5a33be855b5.svg?style=flat)](https://app.codacy.com/app/AlanTai/hknews-web/dashboard)
[![Code Coverage](https://img.shields.io/codacy/coverage/905ca9343bb94e668420a5a33be855b5.svg?style=flat)](https://app.codacy.com/app/AlanTai/hknews-web/dashboard)
[![Code Coverage](https://img.shields.io/codecov/c/github/ayltai/hknews-web.svg?style=flat)](https://codecov.io/gh/ayltai/hknews-web)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/3190/badge)](https://bestpractices.coreinfrastructure.org/projects/3190)
[![Release](https://img.shields.io/github/release/ayltai/hknews-web.svg?style=flat)](https://github.com/ayltai/hknews-web/releases)
[![License](https://img.shields.io/github/license/ayltai/hknews-web.svg?style=flat)](https://github.com/ayltai/hknews-web/blob/master/LICENSE)

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

## Development

### Installation
1. Install [NodeJS](https://nodejs.org)
2. Install dependencies
   ```sh
   npm i -D
   ```

### Run development server
```sh
npm start
```

### Run linters
```sh
npm run check
```

### Run unit tests
```sh
npm run test
```

### Run production server
1. Build for production
   ```sh
   npm run build
   ```
2. Serve production build files
   ```sh
   npm run serve
   ```

## Acknowledgements
This software is made with the support of open source projects:
* [NodeJS](https://nodejs.org)
* [React](https://github.com/facebook/react)
* [Create React App](https://github.com/facebook/create-react-app)
* [React Admin](https://github.com/marmelab/react-admin)
* [Typescript](https://github.com/microsoft/TypeScript)
* [Material UI](https://github.com/mui-org/material-ui)
* [react-image-lightbox](https://github.com/frontend-collective/react-image-lightbox)
* [react-timeago](https://github.com/nmn/react-timeago)

... and closed source services:
* [CircleCI](https://circleci.com): Continuous integration and delivery
