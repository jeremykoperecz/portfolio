
const links = document.querySelectorAll("nav li");






icons.addEventListener("click", () => {
    nav.classList.toggle("active");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


document.querySelectorAll(".portfolio_exemple").forEach(card => {
    card.addEventListener("mouseover", e => {
        e.currentTarget.classList.add("hover");
        card.addEventListener("mouseout", e => {
        e.currentTarget.classList.remove("hover");
        });
    });
});



