


const bodyElement = document.body;

const wrapper = document.querySelector('.wrapper');


const slidesArea = document.querySelector('.slides-area');


const slidesCount = slidesArea.childElementCount;


const slidesCountMinusOne = slidesCount - 1;


const nextButton = document.querySelector('.button-next');


const paginationsArea = document.querySelector('.paginations-area');


let slidePosition = 0;


let moveValue = 0;


let unit = 'px';


let updateWrapperWidth;
let createPaginationItems;


nextButton.addEventListener('click', (event) => {

  moveToNextSlide();
});


window.addEventListener('resize', (event) => {

  updateWrapperWidth(wrapper.offsetWidth);
});


function moveToNextSlide() {

  if(slidePosition == slidesCountMinusOne) {

    getStartedActions();
  }else { // Else

    slidePosition++;


    moveValue += wrapper.offsetWidth;
  }


  slidesArea.style.marginLeft = `-${moveValue}${unit}`;


  updateNextButton();
  createPaginationItems();
};


(updateWrapperWidth = function (width) {

  width = width || wrapper.offsetWidth;


  slidesArea.style.width = `${width * slidesCount}${unit}`;
  

  if(slidePosition > 0) {

    moveValue = width;


    slidesArea.style.marginLeft = `-${width}${unit}`;


    if(slidePosition === slidesCountMinusOne) {

      slidesArea.style.marginLeft = `-${width * slidesCountMinusOne}${unit}`;
    }
  }
})();


function updateNextButton() {

  nextButton.classList.add('button-next--fade');

  setTimeout(() => {

    nextButton.classList.remove('button-next--fade');
  }, 500);


  setTimeout(() => {

    if(slidePosition == slidesCountMinusOne) {

      nextButton.textContent = 'Get Started';
    }else { // Else

      nextButton.textContent = 'Next';
    }
  }, 550);
};


(createPaginationItems = function () {

  paginationsArea.innerHTML = '';


  for (let i = 0; i < slidesCount; i++) {

    const paginationItem = '<span class="paginations-area__item"></span>';


    paginationsArea.innerHTML += paginationItem;
  };


  paginationsArea.children[slidePosition].classList.add('paginations-area__item--current');
})();


function getStartedActions() {
    window.location.href = "/login" 

  wrapper.classList.add('wrapper--has-fade');
};