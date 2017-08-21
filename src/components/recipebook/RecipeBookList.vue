<template lang="pug">
    main.mt-2(role="main")
      .container
        .grid.title-line
          .col.col-d-10.col-t-6
            h2.h2-title 감자 조건에 맞는 레시피가 <em>225개</em> 있습니다.
          .col.col-d-2.col-t-2.col-m-4
            form.filter(id="filter")
              fieldset
                legend 정렬 순서
                select.sort-selector
                  option(value="") 최신순 정렬
                  option(value="1") 인기순 정렬
        .grid
          .col.col-d-12(role="group")
            h2.a11y-hidden 검색결과 리스트
            .col.col-d-12.col-t-8.col-m-4.alpha.omega
              .col.col-d-3.col-t-4.col-m-4.cookbook-items
                .cookbook-item
                  figure.cookbook-img
                    a(href="")
                      img(src="../assets/recipe/list_img.png" alt="감자구이")
                    figcaption.cookbook-txt
                      a(href="")
                        em 감자구이
                        span 초간단 감자구이
                    .etc
                      a.like(href="" title="좋아요")
                        button.btn-like(type="submit") 좋아요
                        span.like-number 123
                      a.comment(href="" title="댓글")
                        button.btn-comment(type="submit") 댓글
                        span.comment-number 123
                      a.score(href="" title="평점")
                        button.btn-score(type="submit") 평점
                        span.score-number 5.3
                    .book-mark
                      button(type="button")
                      
                      
              .col.col-d-3.col-t-4.col-m-4.cookbook-items
                .cookbook-item
                  figure.cookbook-img
                    a(href="")
                      img(src="../assets/recipe/list_img.png" alt="감자구이")
                    figcaption.cookbook-txt
                      a(href="")
                        em 감자구이
                        span 초간단 감자구이
                    .etc
                      a.like(href="" title="좋아요")
                        button.btn-like(type="submit") 좋아요
                        span.like-number 123
                      a.comment(href="" title="댓글")
                        button.btn-comment(type="submit") 댓글
                        span.comment-number 123
                      a.score(href="" title="평점")
                        button.btn-score(type="submit") 평점
                        span.score-number 5.3
                    .book-mark
                      button(type="button")
              .col.col-d-3.col-t-4.col-m-4.cookbook-items
                .cookbook-item
                  figure.cookbook-img
                    a(href="")
                      img(src="../assets/recipe/list_img.png" alt="감자구이")
                    figcaption.cookbook-txt
                      a(href="")
                        em 감자구이
                        span 초간단 감자구이
                    .etc
                      a.like(href="" title="좋아요")
                        button.btn-like(type="submit") 좋아요
                        span.like-number 123
                      a.comment(href="" title="댓글")
                        button.btn-comment(type="submit") 댓글
                        span.comment-number 123
                      a.score(href="" title="평점")
                        button.btn-score(type="submit") 평점
                        span.score-number 5.3
                    .book-mark
                      button(type="button")
              .col.col-d-3.col-t-4.col-m-4.cookbook-items
                .cookbook-item
                  figure.cookbook-img
                    a(href="")
                      img(src="../assets/recipe/list_img.png" alt="감자구이")
                    figcaption.cookbook-txt
                      a(href="")
                        em 감자구이
                        span 초간단 감자구이
                    .etc
                      a.like(href="" title="좋아요")
                        button.btn-like(type="submit") 좋아요
                        span.like-number 123
                      a.comment(href="" title="댓글")
                        button.btn-comment(type="submit") 댓글
                        span.comment-number 123
                      a.score(href="" title="평점")
                        button.btn-score(type="submit") 평점
                        span.score-number 5.3
                    .book-mark
                      button(type="button")
              .col.col-d-3.col-t-4.col-m-4.cookbook-items
                .cookbook-item
                  figure.cookbook-img
                    a(href="")
                      img(src="../assets/recipe/list_img.png" alt="감자구이")
                    figcaption.cookbook-txt
                      a(href="")
                        em 감자구이
                        span 초간단 감자구이
                    .etc
                      a.like(href="" title="좋아요")
                        button.btn-like(type="submit") 좋아요
                        span.like-number 123
                      a.comment(href="" title="댓글")
                        button.btn-comment(type="submit") 댓글
                        span.comment-number 123
                      a.score(href="" title="평점")
                        button.btn-score(type="submit") 평점
                        span.score-number 5.3
                    .book-mark
                      button(type="button")
        .grid
          .col.col-d-12.mt-2
            ul.pagination(role="pagination menu")
              li.p-first
                a(href="#") 
                  span
                    i.left-arrow
                    i.left-arrow
                  | 처음
              li.p-prev
                a(href="#") 
                  span
                    i.left-arrow
                  | 이전
              li.active
                a(href="#") 1
              li
                a(href="#") 2
              li
                a(href="#") 3
              li
                a(href="#") 4
              li
                a(href="#") 5
              li.p-next
                a(href="#") 
                  | 다음  
                  span
                    i.right-arrow
                    i.right-arrow
                                 
              li.p-last
                a(href="#")
                  | 마지막     
                  span
                    i.right-arrow
                             
              
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="sass">
@import "../../sass/stylesheet" 

.sort-selector
  width: 100%
  height: 40px
  padding-left: 5px
  border: 1px solid #e4e4e4
  @include breakpoint(mobile)
    margin-top: $leading

  @include breakpoint(tablet)
    height: 35px  

.cookbook-items
	margin-top: $leading

.cookbook-item
	padding: 10px
	background: #fff
	box-sizing: border-box



.cookbook-img
	position: relative
	img
		width: 100%

.cookbook-txt
	margin-top: $leading
	em
		display: block
		font-size: 16px

.etc
	opacity: 0
	transition: all .3s ease-out 0s
	position: absolute
	bottom: 71px
	width: 100%
	height: 40px
	padding: 10px
	background: rgba(0, 0, 0, 0.5)
	text-align: center
	box-sizing: border-box
	button
		width: 20px
		height: 19px
		border: 0
		margin-right: 5px;
		background-image: url("../assets/icons.png")
		background-color: transparent
		background-repeat: no-repeat
		text-indent: -9999em
	
	span
		line-height: 19px
		color: #fff
	
	@include breakpoint(mobile)
		opacity: 1
	


.cookbook-img:hover .etc
	opacity: 1

.like, .comment, .score
	display: inline-block
	width: 33.3333%

.btn-like
	background-position: 0 -59px
	&:hover
			background-position: 0 -39px
	

.btn-comment
	background-position: 0 -80px

.btn-score
	background-position: 0 -135px


.book-mark
	position: absolute
	top: 5px
	right: 5px
	z-index: 99
	button
		width: 20px
		height: 19px
		border: 0
		background: url("../assets/icons.png") no-repeat 0 -20px

.pagination
	text-align: center
	@include breakpoint(mobile)
		font-size: 1rem
	
	li
		display: inline-block;
	
	li.active a
		background: #1d192c
		color: #fff
	
	li:first-child a
		margin-left: 0
		border-top-left-radius: 4px
		border-bottom-left-radius: 4px
	
	a
		margin: 3px 2px
		padding: 6px 12px
		border: 1px solid #ddd
		color: #454545
		line-height: 1.42857143	

.p-first a, .p-prev a, .p-next a, .p-last a
	padding: 8px 0
	border: 0
	span
		margin-right: 5px	

.left-arrow
	font-family: FontAwesome
	&:before
		content: '\f104'
		display: inline-block	

.right-arrow
	font-family: FontAwesome
	&:before
		content: '\f105'
		display: inline-block
	

</style>
