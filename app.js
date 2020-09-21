const navList = document.querySelector("#nav-list");
const contentAbout = document.querySelector("#about-me");
const contentExp = document.querySelector("#experiences");
const contentContact = document.querySelector("#contact");

// console.log(navList.children);
// console.log(Object.keys(navList.children));

const keys = Object.keys(navList.children);

keys.forEach(function (key) {
  const el = navList.children[key].children[0];

  el.addEventListener("click", function (event) {
    const clickedElementText = event.target.innerText;
    console.log("clickedElementText", clickedElementText);
    let content;
    if (clickedElementText === "About Me") {
      content = contentAbout;
      // contentAbout.classList.add("visible");
      // contentExp.classList.remove("visible");
      // contentContact.classList.remove("visible");
    } else if (clickedElementText === "Experiences") {
      content = contentExp;
      // contentAbout.classList.remove("visible");
      // contentExp.classList.add("visible");
      // contentContact.classList.remove("visible");
    } else if (clickedElementText === "Contact") {
      content = contentContact;
      // contentAbout.classList.remove("visible");
      // contentExp.classList.remove("visible");
      // contentContact.classList.add("visible");
    }
    console.log("content", content);

    contentAbout.classList.remove("visible");
    contentExp.classList.remove("visible");
    contentContact.classList.remove("visible");
    content.classList.add("visible");
  });
});

//2eme method
/*
const aboutLink = document.querySelector("#about-link");
const expLink = document.querySelector("#exp-link");
const contactLink = document.querySelector("#contact-link");
const fct = function (event) {
  const clickedElementText = event.target.innerText;
  let content;
  if (clickedElementText === "About Me") {
    content = contentAbout;
    // contentAbout.classList.add("visible");
    // contentExp.classList.remove("visible");
    // contentContact.classList.remove("visible");
  } else if (clickedElementText === "Experience") {
    content = contentExp;
    // contentAbout.classList.remove("visible");
    // contentExp.classList.add("visible");
    // contentContact.classList.remove("visible");
  } else if (clickedElementText === "Contact") {
    content = contentContact;
    // contentAbout.classList.remove("visible");
    // contentExp.classList.remove("visible");
    // contentContact.classList.add("visible");
  }
  // console.log(content.classList);
  contentAbout.classList.remove("visible");
  contentExp.classList.remove("visible");
  contentContact.classList.remove("visible");
  content.classList.add("visible");
};
aboutLink.addEventListener("click", fct);
expLink.addEventListener("click", fct);
contactLink.addEventListener("click", fct);
*/
/*
function progress() {
  var prg = document.getElementById("progress");
  var percent = document.getElementById("percentCount");
  var counter = 5;
  var progress = 25;
  var id = setInterval(frame, 50);

  function frame() {
    if (progress == 500 && counter == 100) {
      clearInterval(id);
    } else {
      progress += 5;
      counter += 1;
      prg.style.width = progress + "px";
      percent.innerHTML = counter + "%";
    }
  }
}
progress();*/

/*
Inspired by Florin Pop's coding challenges, you can check them here: https://www.florin-pop.com/blog/2019/03/weekly-coding-challenge/
*/

function loading() {
  document.querySelectorAll(".bar").forEach(function (current) {
    let startWidth = 5;
    const endWidth = current.dataset.size;

    /* 
    setInterval() time should be set as transition time / 100. 
    In our case, 2 seconds / 100 = 20 milliseconds. 
    */
    const interval = setInterval(frame, 160);

    function frame() {
      if (startWidth >= endWidth) {
        clearInterval(interval);
      } else {
        startWidth++;
        current.style.width = `${endWidth}%`;
        current.firstElementChild.innerText = `${startWidth}%`;
      }
    }
  });
}

setTimeout(loading, 2000); // add an mouseover to start the progress bar

let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let d4 = document.getElementById("d4");
let d5 = document.getElementById("d5");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");

d1.addEventListener("mouseover", () => {
  p1.style.display = "block";
});
d1.addEventListener("mouseout", () => {
  p1.style.display = "none";
});

d2.addEventListener("mouseover", () => {
  p2.style.display = "block";
});
d2.addEventListener("mouseout", () => {
  p2.style.display = "none";
});

d3.addEventListener("mouseover", () => {
  p3.style.display = "block";
});
d3.addEventListener("mouseout", () => {
  p3.style.display = "none";
});

d4.addEventListener("mouseover", () => {
  p4.style.display = "block";
});
d4.addEventListener("mouseout", () => {
  p4.style.display = "none";
});

d5.addEventListener("mouseover", () => {
  p5.style.display = "block";
});
d5.addEventListener("mouseout", () => {
  p5.style.display = "none";
});
