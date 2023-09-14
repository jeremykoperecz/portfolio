const links = document.querySelectorAll("nav li");




icons.addEventListener("click", () => {
    nav.classList.toggle("active");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


/*const img = document.querySelector(".portfolio_legend")

img.addEventListener("mouseover", () => {
    img.classList.add("test2");
    img.addEventListener("mouseout", () => {
        img.classList.remove("test2");
    });
});*/





const tests = document.querySelector(".portfolio_legend i")
console.log(tests)
tests.forEach(test => {
    test.addEventListener("mouseover", () => {
        test.classList.add("test2");
        test.addEventListener("mouseout", () => {
            test.classList.remove("test2");
        });
    });

})
