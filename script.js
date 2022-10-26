// Elements
const headerEl = document.getElementById("header");

const submitEl = document.getElementById("submit");

const radioEls = document.getElementsByClassName("radio");

const cardEl = document.getElementById("card");
const formEl = document.getElementById("form");
const thankYouNoteEl = document.createElement("p");
thankYouNoteEl.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
thankYouNoteEl.className = "paragraph center";

const starContainerEl = document.getElementById("star-container");
const starIconEl = document.getElementById("star-icon");
const dynamicTextEl = document.getElementById("dynamic-text")
const dynamicNumberEl = document.getElementById("dynamic-number");

const phoneImageEl = document.createElement("img");
phoneImageEl.src = "images/illustration-thank-you.svg";
phoneImageEl.className = "phone-img";


submitEl.addEventListener("click", e => {e.preventDefault()}) //prevents webpage from reloading when clicking on submit

function dynamicNum() {
    for (let i = 0; i < radioEls.length; i++) {
        if (radioEls[i].checked) {
            return radioEls[i].value;
        }
    }
}

function onSubmit() {
    if (radioEls[0].checked || radioEls[1].checked || radioEls[2].checked || radioEls[3].checked || radioEls[4].checked) {
        headerEl.textContent = "Thank you!";
        headerEl.className += " center";

        dynamicNumberEl.textContent = `${dynamicNum()}`
        dynamicTextEl.style.display = "block";
        starContainerEl.replaceChild(dynamicTextEl, starIconEl);
        starContainerEl.className = "oval";

        cardEl.replaceChild(thankYouNoteEl, formEl);

        console.log(dynamicNum());
        console.log(dynamicNumberEl);

        cardEl.insertBefore(phoneImageEl, starContainerEl);

        cardEl.style.padding = "3rem 2.7rem";
    }
}

submitEl.addEventListener("click", onSubmit);
