window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const toggleBtn = document.querySelector(".toggle_btn i");
    const logoImg = document.getElementById("logo-img");

    if (!header) return;

    if (window.scrollY > 100) { 
        header.classList.add("scrolled");
        logoImg.src = "./img/Logo - 01.png";
    } else {
        header.classList.remove("scrolled");
        logoImg.src = "./img/Logo - 02.png";
    }
});

const toggleBtn = document.querySelector('.toggle_btn')
        const toggleBtnIcon = document.querySelector('.toggle_btn i')
        const dropDownMenu = document.querySelector('.dropdown-menu')

        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
        }






const cards = document.querySelectorAll(".cartao");

cards.forEach((cartao) => {
    cartao.addEventListener("click", function(e) {
        // Não flipa se clicar no botão
        if(e.target.tagName === "BUTTON") {
            e.stopPropagation();
            return;
        }

        this.querySelector(".cartao-inner").style.transform = "";
        this.classList.toggle("flipped");
    });

    const button = cartao.querySelector(".btn");
    if(button){
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            alert("Informações adicionais aparecerão aqui!");
        });
    }
});

cards.forEach((cartao) => {
    const shine = cartao.querySelector(".shine");
    const cardInner = cartao.querySelector(".cartao-inner");

    cartao.addEventListener("mousemove", (e) => {
        if (!cartao.classList.contains("flipped")) {
            const { left, top } = cartao.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;

            const centerX = cartao.offsetWidth / 2;
            const centerY = cartao.offsetHeight / 2;

            const angleX = (y - centerY) /30;
            const angleY = (centerX - x) / 30;
            
            cardInner.style.transform = `rotateX(${angleX}deg) 
            rotateY(${angleY}deg)`;

            shine.style.background = `linear-gradient(${Math.atan2(y - centerY, x - centerX) * (180 / Math.PI)}deg,
             rgba(255,255,255,0.25) 0%,
             rgba(255,255,255,0) 60%)`;
        }
    });

    cartao.addEventListener("mouseleave", () => {
        if (!cartao.classList.contains("flipped")){
            cardInner.style.transform = "";
        } else {
            cardInner.style.transform = "rotateY(180deg)";
        }
    });
});


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


