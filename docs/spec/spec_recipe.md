# Recipe compnent 명세

## entry point

RecipeBookItem으로 부터 연결 됩니다.

## Recipe component의 기본 요소들

- RecipeTitle      : Recipe의 제목.
- StepIndicator    : Recipe의 각 step중 하나로 jump 이동 할 수 있는 control.
- IngredientList   : 재료 list.
  - IngredientItem : 재료 item. 이름, 수량, 수량단위, 열량, 설명.
- StepGroup        : Step의 집합
  - Step           : 하나의 Recipe step
    - OrderNum     : step 순서 번호.
    - Description  : 해당 step에 해야할 일들을 나타냄.
    - StepImage    : step 대표 사진.
    - TimerWidget  : predefined timer
  - ReplyGroup     : 댓글 관련 control group
    - ExpandButton : 댓글 보기/입력 control group이 확장되어 보이도록 만드는 button
    - List         : 댓글 list
    - Input        : 댓글 입력 input
    - SubmitButton : 댓글 전송 button
    - ResetButton  : 댓글 입력 초기화 button
- ReviewGroup      : 후기 작성 control group
  - ReviewInput    : 후기 글 기입 input
  - SubmitButton   : 댓글 전송 button
  - ResetButton    : 댓글 입력 초기화 button
  - GiveScore      : 평점 입력 control

## Recipe component의 내가 작성한 Recipe 상태 추가 요소들

- EditButton   : 현재 Recipe를 수정하기 위한 button. Recipe 수정 화면으로 전환 됩니다.
- DeleteButton : 현재 Recipe를 지우기 위한 button.

## Recipe component가 Edit 상태일때 'editable'되는 요소들

- RecipeTitle
- IngredientList
  - IngredientItem
- StepGroup
  - Step
    - OrderNum     : step 추가, 제거, 순서 바꾸기 명령에 의해 자동으로 바뀝니다.
    - Description
    - StepImage
    - TimerWidget

## Recipe component가 Edit 상태일때 추가되는 요소들

- SubmitButton : Recipe 작성 완료 및 전송 button.
- CancelButton : Recipe 작성 취소 및 이전 화면으로 돌아가기 button.
- ResetButton  : Recipe 작성 초기화 button.
- StepGroup
  - AddStepButton : 모든 editable step 앞, 뒤, 사이에 하나씩 존재하며 click시 해당 위치에 editable step을 하나 추가합니다.
  - Step
    - StepForwardButton : 현재 editable step의 순서를 한단계 앞으로 만듭니다.
    - StepBackwardButton : 현재 editable step의 순서를 한단계 뒤로 만듭니다.

## Recipe component가 Edit 상태일때 표시되지 않는 요소들

- StepIndicator    : Recipe의 각 step중 하나로 jump 이동 할 수 있는 control.
- StepGroup
  - ReplyGroup     : 댓글 관련 control group
    - ExpandButton : 댓글 보기/입력 control group이 확장되어 보이도록 만드는 button
    - List         : 댓글 list
    - Input        : 댓글 입력 input
    - SubmitButton : 댓글 전송 button
    - ResetButton  : 댓글 입력 초기화 button
- ReviewGroup      : 후기 작성 control group
  - ReviewInput    : 후기 글 기입 input
  - SubmitButton   : 댓글 전송 button
  - ResetButton    : 댓글 입력 초기화 button
  - GiveScore      : 평점 입력 control