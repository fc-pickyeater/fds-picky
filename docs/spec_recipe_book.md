# specification of 'RecipeBook'

- RecipeBook은 RecipeItem의 순서없는 집합이다. 
  - view 관점에서 RecipeBook과 RecipeItem의 관계는 list와 list item의 관계.
- RecipeBook이 구성되는 경우는 다음과 같다. (: 앞은 RecipeBook의 이름)
  - keyword 검색
    - [keyword]RecipeBook:  사용자 임의 입력 keyword
    - [keyword]RecipeBook:  자동 집계된 인기 keyword
  - rankedRecipeBook:       자동 집계된 인기 RecipeItem의 모음
  - 사용자 행위 누적
    - repliedRecipeBook:    사용자가 reply한 RecipeItem의 모음
    - bookmarkedRecipeBook: 사용자가 bookmark한 RecipeItem의 모음
    - scoredRecipeBook:     사용자가 score한 RecipeItem의 모음
    - likedRecipeBook:      사용자가 like한 RecipeItem의 모음
    - recentRecipeBook:     사용자가 **최근** read한 RecipeItem의 모음
    - myRecipeBook:         사용자가 write한 RecipeItem의 모음

## Recipe

- RecipeItem는 RecipeBook의 item으로 표시되기 위한 Recipe의 축약표현이다.
- RecipeItem은 다음 상태에 따라 외형이 변한다.
  - logined=true AND current_RecipeBook=myRecipeBook