# RecipeBook component 명세

## entry point

keyword 검색과 모든 ~ListLink 접미사를 갖는 link를 통해 접근 가능합니다.

## RecipeBook component의 기본 요소들

- BookTitle         : Book의 제목. keyword 또는 entry link에 따라 달라집니다.
- BookPage          : 하나의 book page. BookPageIndicator로 최초, 이전, 다음, n번째 BookPage로 이동.
  - BookItem  : recipe data의 표현형중 하나로 일종의 list인 RecipeBook page의 list item입니다.
    - ItemNumber    : page 안에서의 순번.
    - ItemThumbNail : Item 미리보기 이미지.
    - ItemTitle     : Item 제목.
    - ItemNumOfLike : Item이 얼마나 많은 '좋아요'를 받았는지 나타냅니다.
    - ItemScore     : Item이 받은 평균 평점을 나타냅니다.
    - ItemNumOfRe   : Item이 얼마나 많은 '댓글'/'후기글'을 받았는지 나타냅니다.
- BookPageIndicator : page 전환 link들의 묶음
  - BookFirstPage   : 첫 page로 가는 link
  - BookPrevPage    : 이전 page로 가는 link
  - BookNextPage    : 다음 page로 가는 link
  - BookNthPage     : n번째 page로 가는 link. 하나 이상이 존재하게 됩니다.
- BookOptions       : 검색 결과에 대한 filtering/ordering options panel
  - OrderingGroup   : 선택, 해제하여 오름차순, 내림차순을 설정할 수 있는 조건들의 group. 하나 이상의 조건을 선택할 경우 각 조건들간의 논리값 결합은 AND 연산 된다.
    - Recent        : 최신순. 오름차순/나림차순. 기본값.
    - Dictionary    : 사전순. 오름차순/나림차순.
    - Score         : 평점순. 오름차순/나림차순.
    - Reply         : 댓글 개수 순. 오름차순/나림차순.
    - BookMark      : 북마크 개수 순. 오름차순/나림차순.
  - FilteringGroup  : 특정 주제를 포함, 제외하게 만드는 조건들의 group.
    - Scored        : 내가 평점을 준 Recipe를 포함/제외.
    - BookMarked    : 내가 book mark한 Recipe를 포함/제외.
    - Replied       : 내가 댓글을 남긴 Recipe를 포함/제외.

## RecipeBook component의 login 상태 추가 요소들

- BookPage
  - BookItem
    - ItemBookMarked    : Item이 현재 사용자에 의해 bookmark 되었는지를 나타냅니다.
    - ItemBookMarkeMemo : Item이 현재 사용자에 의해 bookmark 되었으며 그에 대한 memo가 작성 되어 있을 경우 작성된 메모 그 자체를 표시해 줍니다.

## RecipeBook component의 MyRecipeList 상태 추가 요소들

MyRecipeListLink를 통해 진입한 경우 RecipeBook은 아래와 같은 추가 요소들을 표시합니다. 

- CreateRecipeButton    : 새 Recipe 작성 화면으로 가는 link.
- SelectAllCheckBox     : 모든 item을 선택하는 checkbox.
- DeleteAllButton       : 모든 selected item을 삭제하는 button.
- BookPage
  - BookItem
    - SelectCheckBox    : 해당 Item 하나를 선택하는 checkbox.
    - EditButton        : 해당 Item 수정 화면으로 가는 link button.
    - DeleteButton      : 해당 Item 하나를 삭제하는 button.