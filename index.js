


icons.addEventListener("click", () => {
    nav.classList.toggle("active");
});




document.querySelectorAll("nav li").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


document.querySelectorAll(".portfolio_exemple").forEach(card => {
    card.addEventListener("mouseover", e => {
        card.classList.add("hover");
        card.addEventListener("mouseout", e => {
        e.currentTarget.classList.remove("hover");
        });
    });
});



