var selectedLink = null;

// 링크 클릭 시 호출되는 함수
function selectLink(link) {
  // 선택된 링크가 있으면 이전 스타일을 제거
  if (selectedLink) {
    selectedLink.classList.remove("selected");
  }

  // 새로운 링크를 선택하고 스타일을 적용
  selectedLink = link;
  selectedLink.classList.add("selected");
}

 

jQuery(document).ready(function($) {
  $(".scroll").click(function() {
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
});


jQuery(document).ready(function($) {

  $(".scroll").click(function(){
  
  /* event.preventDefault(); */
  
  
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  
  });
  
  });
  
  
  //메뉴 클릭시 자연스러운 스크롤 이동