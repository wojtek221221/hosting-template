const faqs = document.querySelectorAll(".faq");

// efekt podczas skrolowania
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

// opinie
const boxWrapper = document.querySelector('.box-wrapper');
const leftButton = document.querySelector('.nav-button.left');
const rightButton = document.querySelector('.nav-button.right');

const boxWidth = 350;
const boxCount = 5;
const totalWidth = boxWidth * boxCount;

let startPosition = 0;

function updatePosition() {
    if (startPosition >= totalWidth) {
        startPosition -= totalWidth;
    } else if (startPosition < 0) {
        startPosition += totalWidth;
    }
    boxWrapper.style.transform = `translateX(${-startPosition}px)`;
}

function moveBoxes(offset) {
    startPosition += offset;
    updatePosition();
}
updatePosition();
leftButton.addEventListener('click', () => {
    moveBoxes(-boxWidth);
});
rightButton.addEventListener('click', () => {
    moveBoxes(boxWidth);
});

// plynne przenoszenie do elementow
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});