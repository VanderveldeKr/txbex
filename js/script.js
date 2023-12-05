const slides = document.querySelectorAll('.form-slide');
const progressBar = document.querySelector('.progress');
const nextBtns = document.querySelectorAll('.next-btn');
const backBtns = document.querySelectorAll('.back-btn');
const formSlideOne = document.querySelector('.form-slide__one');
const badgeContainer = document.querySelector('.badge-container');
const minSummBlock = document.querySelector('.min-summ');
let currentSlide = 0;
let previousBadge = null;

const showSlide = (slideIndex) => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[slideIndex].classList.add('active');
};

const updateProgress = () => {
  const progress = ((currentSlide + 1) / slides.length) * 100;
  progressBar.style.width = `${progress}%`;
};

nextBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const selectedInput = formSlideOne.querySelector('input:checked');
    if (!selectedInput) {
      return;
    }

    const selectedLabel = selectedInput.nextElementSibling;
    const badge = selectedLabel.querySelector('.badge');

    if (badge) {
      if (badgeContainer.querySelector('.badge')) {
        badgeContainer.removeChild(badgeContainer.querySelector('.badge'));
      }
      badgeContainer.appendChild(badge.cloneNode(true));
      previousBadge = badge.cloneNode(true);
    }

    if (currentSlide === 0) {
    const jaw2Input = document.getElementById('jaw2');
    const jaw3Input = document.getElementById('jaw3');    
    if (jaw2Input && jaw2Input.checked) {
      minSummBlock.textContent = 'минимум: 0,00031 btc';
    } else if (jaw3Input && jaw3Input.checked) {
      minSummBlock.textContent = 'минимум: 11 usdt';
    } else {
      minSummBlock.textContent = 'минимум: 1000 rub';
    }
  }

    currentSlide++;
    showSlide(currentSlide);
    updateProgress();
  });
});

backBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
    updateProgress();
  });
});




jQuery(document).ready(function () {
        
    jQuery('.send-form').click( function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		// form.css('opacity','.5');
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				// form.html(data);
              currentSlide++;
              showSlide(currentSlide);
              updateProgress();
    			},
    			error:	 function() {
            alert("Ошибка отправки формы")
    			}
    		});
    	}
    });


});

// PopUp
const openPopUp = document.querySelectorAll('.open-pop-up');
const closePopUp = document.querySelector('.pop-up__close');
const closePopup= document.querySelector('.close-popup');
const popUp = document.querySelector('.pop-up');
const body = document.querySelector('body');

openPopUp.forEach(b => b.addEventListener('click', function(e) {
  e.preventDefault();
  popUp.classList.add('active-pop-up');
  body.classList.add('scroll-lock'); // Добавление класса для блокировки прокрутки

  closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active-pop-up');
    body.classList.remove('scroll-lock'); // Удаление класса для разблокировки прокрутки
  });
  closePopup.addEventListener('click', () => {
    popUp.classList.remove('active-pop-up');
    body.classList.remove('scroll-lock'); // Удаление класса для разблокировки прокрутки
  });
}));

// PopUpTwo
const openPopUpTwo = document.querySelectorAll('.open-pop-up-two');
const closePopUpTwo = document.querySelector('.pop-up__close-two');
const popUpTwo = document.querySelector('.pop-up-two');

openPopUpTwo.forEach(b => b.addEventListener('click', function(e) {
  e.preventDefault();
  popUpTwo.classList.add('active-pop-up');
  body.classList.add('scroll-lock'); // Добавление класса для блокировки прокрутки

  closePopUpTwo.addEventListener('click', () => {
    popUpTwo.classList.remove('active-pop-up');
    body.classList.remove('scroll-lock'); // Удаление класса для разблокировки прокрутки
  });
}));

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelector('.send-inputs');
  const sendFormBtn = document.querySelector('.send-forms');
  
  inputs.addEventListener('input', () => {
    if (inputs.value.trim() !== '') {
    sendFormBtn.classList.remove('send-forms');
    } else {
    sendFormBtn.classList.add('send-forms');
    }
  });
  });
