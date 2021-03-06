# 명세서 작성 의도

본 작성자가 말하는 '명세서'는 'spec_'접두어로 시작하는 이름을 가진 .md문서들을 지칭합니다.
본 문서에서는 모든 명세서가 갖는 공통의 성질과 이용방법을 말하고자 합니다.

각 명세서들은 최상위 component에 1:1 대응합니다.
즉 프로젝트 내에는 최소한 명세서 개수 만큼의 component들이 존재하게 될 것입니다.

## 명세하는 것

각 명세서들은 그들이 대응하는 최상위 component가
- 어떤 요소들을 포함하고 있어야 하는지 명세합니다.
- 해당 요소들이 어떤 조건하에서 보여지거나 감춰져야 하는지 명세합니다.

## 명세하지 않는 것

- component에 포함된 요소들의 위치, 크기, 색상 등 구체적인 styling에 대해선 거의 언급하지 않습니다.
- component에 포함된 요소들 중 어떤것들이 하위 component로 추출되어야 하는지 마크업 요소로 남겨져도 충분한지에 대해 언급하지 않습니다.

## 결론

이러한 접근법은 '학습'이 본 프로젝트의 주제라고 상정했기 때문에 내린 결론이며 이를 위해 개발자의 창의성을 해치지 않고 진정한 의미에서의 '학습'이 진행될 수 있으리라 기대합니다. 명세서들이 명세하지 않는 styling 문제와 component 나누기에 대해선 개인적 연구와 팀원간 합의가 필요할 것입니다.

## 명세서 목록

- [Header](./spec_header.md)
- personal func. entries
  - [Login](./spec_login.md)
  - [Join](./spec_join.md)
  - [FindPW](./spec_find_pw.md)
- [MyPage](./spec_mypage.md)
- [RecipeBook](./spec_recipe_book.md)
- [Recipe](./spec_recipe.md)