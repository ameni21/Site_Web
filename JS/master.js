const allLinks= document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {
    elements.forEach(ele=>{
        ele.addEventListener("click", (e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}


scrollToSomewhere(allLinks);