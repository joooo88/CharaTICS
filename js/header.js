


/* 스크롤시 헤더색상변경  */

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });


 /* lang 내려오기 */
 function showItems() {
    var items = document.querySelectorAll("#myList li");
    for (var i = 0; i < items.length; i++) {
      setTimeout(function(index) {
        items[index].classList.add("show");
      }, i * 200, i);
    }
  }
  
  function hideItems() {
    var items = document.querySelectorAll("#myList li");
    for (var i = items.length - 1; i >= 0; i--) {
      setTimeout(function(index) {
        items[index].classList.remove("show");
      }, (items.length - i) * 200, i);
    }
  }



  /* dropdown 클릭시 다운되게하기*/
/*   const button = document.querySelector('.button');

button.addEventListener('click', () => {
  const dropdown = document.querySelector('.dropdown');
  dropdown.style.display = 'block';
});

button.addEventListener('blur', () => {
  const dropdown = document.querySelector('.dropdown');
  dropdown.style.display = '';
});

button.addEventListener('blur', () => {
  const dropdown = document.querySelector('.dropdown');
  
  // 0.2초 뒤에 실행
  setTimeout(() => {
    dropdown.style.display = '';
  }, 200);
}); */



/* function init(){
    document.addEventListener("scroll", scrollEvent);
}

init(); */



/* 
let scrollTop = 0;

window.addEventListener('scroll', function () {
  scrollTop = document.documentElement.scrollTop;
  console.log("스크롤 값: " + scrollTop)
},false) */