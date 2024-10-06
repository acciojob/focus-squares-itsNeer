//your JS code here. If required.
let divs = document.querySelectorAll(".square");

divs.forEach(t => {
    console.log(t);
    t.addEventListener("mouseover", () => {
        for (let i = 0; i < divs.length; i++) {
            if (t == divs[i]) {
                divs[i].style.backgroundColor = "#E6E6FA"
                // continue;
            } else {
                divs[i].style.backgroundColor = "#6F4E37"
            }
        }
    })
    t.addEventListener("mouseout", () => {
        divs.forEach(el => {
            el.style.backgroundColor = "#E6E6FA"
        });
    })
});