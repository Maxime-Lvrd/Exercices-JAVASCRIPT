/*

correction MATHIEU (+HTML)

let btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    });

*/

/*

correction AMADOU (+HTML)

*/

let anchor = document.getElementById('scrollTop');
let arrow = document.querySelector('.arrow');

arrow.addEventListener('mouseover', () => {
    arrow.classList.toggle('arrow-animation');
});
arrow.addEventListener('mouseout', () => {
    arrow.classList.toggle('arrow-animation');
});

anchor.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
