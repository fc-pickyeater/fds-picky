# Header component 명세

## entry point

Header component는 모든 화면에서 접근 할 수 있습니다.
또한 home 화면은 Header component만 존재합니다.

## Header component의 기본 요소들
- Menu                  : hamburger menu.
  - HomeLink            : home 화면으로 가는 link.
  - KeywordRankListLink : home화면으로 가서 KeywordRankList의 위치로 scroll되는 link.
  - RecipeRankListLink  : home화면으로 가서 RecipeRankList의 위치로 scroll되는 link.
- TitleLogo             : title logo.
- LoginLink             : login 화면으로 가는 link.
- JoinLink              : join 화면으로 가는 link.
- SearchInput           : 검색어 입력 요소.

## Header component Home 화면 상태의 추가 요소들
- KeywordRankTextList : 검색어 순위 list. item들은 text로만 되어 있습니다.
  - moreLink          : 더 많은 list item들을 볼 수 있는 link.
- RecipeRankTextList  : 인기 recipe 순위 list. item들은 text로만 되어 있습니다.
  - moreLink          : 더 많은 list item들을 볼 수 있는 link.

## Header component login 상태의 추가 요소들
- Menu
  - MyPageLink           : my page 화면으로 가는 link.
  - MyRecipeWriteLink    : 내 recipe 작성 화면으로 가는 link.
  - MyRecentReadListLink     : 내가 최근에 읽은 recipe들의 list 화면으로 가는 link.
  - MyRecipeListLink     : 내가 작성한 recipe들의 list 화면으로 가는 link.
  - MyBookMarkedListLink : 내가 즐겨찾기 추가한 recipe들의 list 화면으로 가는 link.
  - MyRepliedListLink    : 내가 댓글 또는 후기글을 작성한 recipe들의 list 화면으로 가는 link.
  - MyScoredListLink     : 내가 평점을 준 recipe들의 list 화면으로 가는 link.
- LogoutLink             : logout 할 수 있는 link. 기본 요소 LoginLink의 대체.
- MypageLink             : 기본 요소 JoinLink의 대체.