
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const sliderItems = $$(".slider-item");
const buyTicketBtns = $$(".place-buy-btn");
const modal = $(".modal");
const modalContent = modal.querySelector(".modal-content");
const modalCloseBtns = [$(".modal-close"), $(".modal-close-btn")];
const header = $("#header");
const mobileMenu = $(".mobile-menu-btn");
const nav = $("#nav");



const handleSlider = () => {
    let currentItem = 0;
    sliderItems[currentItem].style.display = "block";

    setInterval(() => {
        sliderItems.forEach(item => {
            item.style.display = "none";
        })
        currentItem++;

        if (currentItem > 2)
            currentItem = 0;
            
        sliderItems[currentItem].style.display = "block";
    }, 3000)
}



const handleOpenModal = () => {
    buyTicketBtns.forEach(buyTicketBtn => {
        buyTicketBtn.onclick = () => {
            modal.style.visibility = "visible";
            modalContent.style.animation = "slipDown 0.25s linear forwards";
        }

    })
}



const handleCloseModal = () => {
    modalCloseBtns.forEach(modalCloseBtn => {
        modalCloseBtn.onclick = () => {
            modal.style.visibility = "hidden";
            modalContent.style.animation = "none";
        }
    })

    modal.onclick = function(e) {
        if (e.target === this) {
            modal.style.visibility = "hidden";
            modalContent.style.animation = "none";
        }
    }
}

var isMenuOpened = false;

const handleMobileMenu = () => {
    mobileMenu.onclick = (e) => {
        if (isMenuOpened) {
            header.style.height = "var(--header-height)";
        } else if (!isMenuOpened) {
            header.style.height = "fit-content";
            // header.style.height = "auto";
        }
        isMenuOpened = !isMenuOpened;
    }
    
    nav.onclick = (e) => {
        if (isMenuOpened && !e.target.closest("#nav li:last-child")) {
            header.style.height = "var(--header-height)";
            isMenuOpened = !isMenuOpened;
        }
    }

    const more = $("#nav li:last-child");
    more.onclick = event => {
        event.preventDefault();
    }
}


handleSlider();
handleOpenModal();
handleCloseModal();
handleMobileMenu();