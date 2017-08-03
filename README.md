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

2. picky_cookbook origin remote 연결하기

현재 위치가 picky_cookbook directory인지 확인 후 진행해 주세요.

하나의 remote repository에 하나의 master branch를 두고 여러 local repository가 각자의 dev branch를 운영하는 방식으로 프로젝트를 진행합니다.
따라서 forked remote repository는 사용하지 않습니다.

아래 명령어를 차례로 입력합니다.
``` bash
$ git init

$ git add *

$ git commimt -m "initial"

$ git remote add origin https://github.com/fc-pickyeater/fds-picky.git

$ git fetch --all

$ git reset --hard origin/master

HEAD is now at 8264960 initial env. ver.1
```
마지막 행과 같은 message가 뜨면 개발 환경 설정이 완료 된 것입니다.
이후 dev branch와 그 하위 branch들을 생성하여 작업을 시작하면 됩니다.
아래 명령어들로 의존 모듈을 설치하고 개발 모드를 시작할 수 있습니다.

``` bash
$ npm install
$ npm run dev
```


## VSCode에서 ESLint - airBnb style 사용시 주의사항

'end of line' style이 LF가 아니면 ESLint는 오류를 발생시키고 compile이 되지 않습니다.
그러나 VSCode의 기본 설정은 CRLF입니다.
이를 피하기 위해 VSCode 설정파일을 엽니다.
파일(F) -> 기본 설정(P) -> 설정  을 클릭하여 setting.jason 파일이 열리면 오른쪽 사용자 설정란의 { } 내부에 다음을 추가해 줍니다.
이때 이미 존재하는 행과의 사이에 ,를 잊지 맙시다.
``` json
"files.eol": "\n"
```

또한 이미 CRLF로 작성된 파일은 LF로 바꿔줘야 합니다.
명령어 팔레트 ( 보기(V) -> 명령어 팔레트 )에 'Change End of Line Sequence' 명령을 수행하여 LF를 선택해 주면 현재 열린 파일의 행 끝이 LF로 변합니다.

또 도저히 ESLint의 에러 이유를 찾을 수 없는 경우 오류를 발생시키는 해당 파일의 최상단에 아래 주석문을 삽입해 주면 임시로 문제를 덮어둘 수 있습니다.

``` javascript
/* eslint-disable */
```