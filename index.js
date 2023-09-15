const links = document.querySelectorAll("nav li");
const tests3 = document.querySelectorAll(".portfolio_exemple");
const tests4 = document.querySelectorAll(".portfolio_legend p");


console.log(tests4);



icons.addEventListener("click", () => {
    nav.classList.toggle("active");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});




tests4.forEach(test => {
    test.addEventListener("mouseover", () => {
        test.classList.add("test2");
        test.addEventListener("mouseout", () => {
            test.classList.remove("test2");
        });
    });

})

