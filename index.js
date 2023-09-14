const links = document.querySelectorAll("nav li");




icons.addEventListener("click", () => {
    nav.classList.toggle("active");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});



const tests = document.querySelectorAll(".portfolio_exemple img")

tests.forEach(test => {
    test.addEventListener("mouseover", () => {
        test.classList.add("test2");
        test.addEventListener("mouseout", () => {
            test.classList.remove("test2");
        });
    });

})
