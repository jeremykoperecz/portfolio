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



const cvlink = document.querySelector(".contact_cv a");
cvlink.addEventListener("mouseover", () => {
    cv.classList.add("hovercv");
    cvlink.addEventListener("mouseout", () => {
        cv.classList.remove("hovercv");
        
    });
});

