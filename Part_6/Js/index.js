function addSpansToText(selector) {
  var element = document.querySelector(selector);
  var text = element.textContent;
  var clutter = "";
  var splitText = text.split("");
  var half = splitText.length / 2;

  splitText.forEach((char, idx) => {
    if(idx<half){
        clutter += `<span class="left">${char}</span>`;
    } else {
      clutter += `<span class="right">${char}</span>`;
    }
  });

  element.innerHTML = clutter;
}

addSpansToText("h1");

gsap.from(".left", {
  y: 70,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.2,
});

gsap.from(".right", {
  y: 70,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: -0.2,
});
