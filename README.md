# Picky CookBook

## local repository에 이 project 구성하기

1. vue project template 설치
"제작자" 설정값을 "FDS4기7team"으로 통일 했으면 좋겠습니다.
그 외에 아래 설정값은 전부 default 값으로 되어 있으니 엔터 연타로 충분합니다.

``` bash
$ vue init fc-pickyeater/fds-picky-vue-template picky_cookbook

? project 이름 picky_cookbook
? project 설명 Fast Campus front-end dev. school 4기 team 7의 project. 주제는 '음식2: 오늘 뭐먹지?'
? 제작자 FDS4기7team
? Vue 빌드 standalone
? Pug를 사용 하시겠습니까? Yes
? Sass를 사용 하시겠습니까? Yes
? Vue-router를 사용 하시겠습니까? Yes
? Vuex를 사용 하시겠습니까? Yes
? ESLint를 사용 하시겠습니까? Yes
? ESLint pre-set을 선택해 주세요. Airbnb
? unit test를 위한 Karma와 Mocha를 설치 하시겠습니까? Yes
? e2e test를 위한 Nightwatch를 설치 하시겠습니까? Yes

   vue-cli · Generated "picky_cookbook".

   프로젝트 시작하기:

     cd picky_cookbook
     npm install
     npm run dev

   https://vuejs-templates.github.io/webpack 에서 프로젝트 템플릿 사용 방법을 확인할 수 있습니다.

```

위와 같은 message가 출력되면 설치가 정상적으로 종료된 것입니다.
이 후 생성된 picky_cookbook directory로 이동해 주세요

``` bash
$ cd picky_cookbook
```

2. picky_cookbook remote repository 연결하기
현재 위치가 picky_cookbook directory인지 확인 후 진행해 주세요.
아래 명령어를 차례로 입력합니다.
``` bash
$ git init

$ git remote add upstream https://github.com/fc-pickyeater/fds-picky.git
```

package.json의 의존성 항목에 vuex를 추가하였습니다.
따로 pull이나 merge등을 할 필요는 없고 현재 project에 vuex를 설치하면 됩니다.
``` bash
npm install -save vuex
```

아직 이 repository를 clone 하지 않았다면 clone후 다음 명령어를 실행해 주세요
``` bash
npm install
```

또한 vuex 사용을 위해 
./src/store
./stc/index.js
가 있어야 합니다.

더불어
[fds-picky-vue-template](https://github.com/fc-pickyeater/fds-picky-vue-template)
위 template에 vuex 설치 여부 질의 항목이 추가되었습니다.

# Project Structure

vue template docs에서 긁어옴... 차차 번역 하겠습니다.

``` bash
.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── docs/                       # spec등 문서들
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── index.js            # test build entry file
│   │   └── karma.conf.js       # test runner config file
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel config
├── .postcssrc.js               # postcss config
├── .eslintrc.js                # eslint config
├── .editorconfig               # editor config
├── index.html                  # index.html template
└── package.json                # build scripts and dependencies
```

### `build/`

This directory holds the actual configurations for both the development server and the production webpack build. Normally you don't need to touch these files unless you want to customize Webpack loaders, in which case you should probably look at `build/webpack.base.conf.js`.

### `config/index.js`

This is the main configuration file that exposes some of the most common configuration options for the build setup. See [API Proxying During Development](proxy.md) and [Integrating with Backend Framework](backend.md) for more details.

### `docs/`

spec등 문서들

### `src/`

This is where most of your application code will live in. How to structure everything inside this directory is largely up to you; if you are using Vuex, you can consult the [recommendations for Vuex applications](http://vuex.vuejs.org/en/structure.html).

### `static/`

This directory is an escape hatch for static assets that you do not want to process with Webpack. They will be directly copied into the same directory where webpack-built assets are generated.

See [Handling Static Assets](static.md) for more details.

### `test/unit`

Contains unit test related files. See [Unit Testing](unit.md) for more details.

### `test/e2e`

Contains e2e test related files. See [End-to-end Testing](e2e.md) for more details.

### `index.html`

This is the **template** `index.html` for our single page application. During development and builds, Webpack will generate assets, and the URLs for those generated assets will be automatically injected into this template to render the final HTML.

### `package.json`

The NPM package meta file that contains all the build dependencies and [build commands](commands.md).

## vue template 설치시 설정된 사항들

[fds-picky-vue-template](https://github.com/fc-pickyeater/fds-picky-vue-template)

- project 이름 picky_cookbook
- project 설명 (Vue.js project) Fast Campus front-end dev. school 4기 team 7의 project. 주제는 '음식2: 오늘 뭐먹지?'
- 제작자 FDS4기team7
- Vue 빌드 standalone
- Pug를 사용 하시겠습니까? Yes
- Sass를 사용 하시겠습니까? Yes
- Vue-router를 사용 하시겠습니까? Yes
- Vuex를 사용 하시겠습니까? Yes
- ESLint를 사용 하시겠습니까? Yes
- ESLint pre-set을 선택해 주세요. Airbnb
- unit test를 위한 Karma와 Mocha를 설치 하시겠습니까? Yes
- e2e test를 위한 Nightwatch를 설치 하시겠습니까? Yes

## Build Setup

``` bash
# 의존 모듈 설치
npm install

# web server (localhost:8080)로 구동
npm run dev

# 배포를 위한 압축, build
npm run build

# 배포를 위한 압축, build와 bundle analyzer report 보기
npm run build --report

# unit test 수행
npm run unit

# e2e test 수행
npm run e2e

# 모든 test 수행
npm test
```

보다 자세한 사용법은 [가이드](https://vuejs-templates.github.io/webpack/), [vue-loader 문서(한국어 번역)](https://vue-loader.vuejs.org/kr/)를 읽어보세요.