function toggleDropdown(e) {
    // Берем родителя элемента по которому был клик
    let parent = e.target.parentNode;
    let dropdownContent;
    let navLink;
    // проверяем что клик был по nav__link, а не по nav__dropdown-icon
    if (parent.classList.contains('nav__item')) {
        navLink = parent.querySelector('.nav__link')
        dropdownContent = parent.querySelector('.nav__dropdown');
    } else {
        return;
    }
    let dropdownArrowIcon = parent.querySelector('.nav__dropdown-icon');
    if (dropdownContent.classList.contains('open')) {
        dropdownArrowIcon.style.transform = 'rotate(0deg)';
        dropdownContent.classList.remove('open');
        navLink.classList.remove('active')
    } else {
        dropdownArrowIcon.style.transform = 'rotate(180deg)';
        dropdownContent.classList.add('open');
        navLink.classList.add('active')
    }
}

// Берем все dropdowns, от них потом берем родителя, чтобы не включать в этот список nav__item которые не являются dropdown менюшками
let dropdownWindows = document.querySelectorAll('.nav__dropdown');
let dropdownItems = [];
dropdownWindows.forEach((el) => {
    el.parentNode.addEventListener('click', toggleDropdown);
});

let mobileNavBtn = document.querySelector('.header__mobile-nav');
mobileNavBtn.addEventListener('click', () => {
    let nav = document.querySelector('.nav');
    nav.classList.toggle('open');
    document.body.classList.toggle('lock');
    mobileNavBtn.classList.toggle('open');
});

// select-menu
const optionMenu = document.querySelector('.select-menu'),
    selectBtn = optionMenu.querySelector('.select-menu__btn'),
    options = optionMenu.querySelectorAll('.select-menu__option'),
    optionsBlock = optionMenu.querySelector('.select-menu__options'),
    sBtn_text = optionMenu.querySelector('.select-menu__text');

selectBtn.addEventListener('click', () => {
    optionMenu.classList.toggle('active'); // Добавляем/удаляем класс 'active'

    if (optionMenu.classList.contains('active')) {
        optionsBlock.style.display = 'block';
    } else {
        // Используем setTimeout для скрытия через 200 миллисекунд
        setTimeout(() => {
            optionsBlock.style.display = 'none';
        }, 200);
    }
});

options.forEach((option) => {
    option.addEventListener('click', () => {
        let selectedOption = option.querySelector(
            '.select-menu__option-text'
        ).innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove('active');
        setTimeout(() => {optionsBlock.style.display = 'none';}, 200)
    });
});

// rating
let rateInputs = document.querySelectorAll('.rating__input');
let rateDigit = document.querySelector('.form__digit');
rateInputs.forEach((input) => {
    input.addEventListener('change', function () {
        rateDigit.innerText = input.value;
    });
});

// modal
let backdrop = document.querySelector('backdrop');
let modal = document.querySelector('.modal');
document.addEventListener('click', modalHandler);

function modalHandler(evt) {
    const modalBtnOpen = evt.target.closest('.header__btn');
    if (modalBtnOpen) {
        // open btn click
        modal.classList.add('show');
        modal.classList.remove('hidden');
    }

    const modalBtnClose = evt.target.closest('.modal__close');
    if (modalBtnClose) {
        closeModal(modal);
    }

    if (evt.target.matches('.backdrop')) {
        closeModal(modal);
    }
}

function closeModal(modal) {
    modal.classList.remove('show');
    modal.classList.add('hidden');
}


// form input
let formInputs = document.querySelectorAll('.form__input');
console.log(formInputs);
formInputs.forEach(inp => {
    inp.addEventListener('focus', () => {
        inp.parentNode.classList.add('focused')
    })
    inp.addEventListener('focusout', () => {
        inp.parentNode.classList.remove('focused')
    })
})