# MyPage component 명세

## entry point

MyPage component는 MyPageLink링크를 통해 접근 할 수 있습니다.

## MyPage component의 기본 요소들
- ProfilePanel       : 사용자 profile panel.
  - ProfileImg       : 사용자 사진.
  - ProfileComment   : 사용자 자기소개 글.
- AuthPanel          : 사용자 인증정보 panel.
  - Account          : 사용자 기본 email. 사용자 ID이자 읽기전용값.
  - currentPW        : 새 password 입력 전 현재 password를 확인 받기 위한 input.
    - changePWButton : currentPW에 올바른 값이 기입 된 후 이 button을 click하면 newPW와 newPWConfirm, SubmitButton, ResetButton이 표시됩니다.
      - newPW        : 새 password 기입 input.
      - newPWConfirm : 새 password 확인 input.
      - SubmitButton : 새 password 전송 button.
      - ResetButton  : 새 password inputs 초기화 하기 button.
- RecipeBookGroup           : 특정 RecipeBook의 묶음 입니다.
  - MyRecentReadListPreview : 사용자가 최근에 읽은 recipe들의 list의 미리보기. 제목 click시 더 자세한 RecipeBook으로 이동.
  - MyRecipeListPreview     : 사용자가 작성한 recipe들의 list의 미리보기. 제목 click시 더 자세한 RecipeBook으로 이동.
  - MyBookMarkedListPreview : 사용자가 즐겨찾기 추가한 recipe들의 list의 미리보기. 제목 click시 더 자세한 RecipeBook으로 이동.
  - MyRepliedListkPreview   : 사용자가 댓글 또는 후기글을 작성한 recipe들의 list의 미리보기. 제목 click시 더 자세한 RecipeBook으로 이동.
  - MyScoredListPreview     : 사용자가 평점을 준 recipe들의 list의 미리보기. 제목 click시 더 자세한 RecipeBook으로 이동.

## MyPage component의 내가 나의 MyPage를 방문한 상태에 추가되는 요소들

- sns button group
  - FacebookButton : Facebook 계정 인증 진입 button.
  - GoogleButton   : Google 계정 인증 진입 button.
  - NaverButton    : Naver 계정 인증 진입 button.
  - KakaoButton    : Kakao 계정 인증 진입 button.