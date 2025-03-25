window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const toggleBtn = document.querySelector(".toggle_btn i");

    if (!header) return;

    if (window.scrollY > 100) { 
        header.classList.add("scrolled"); // Adiciona a classe quando rolar para baixo
    } else {
        header.classList.remove("scrolled"); // Remove quando voltar ao topo
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