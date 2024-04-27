var initialPath = `M 10 100 Q 500 100 990 100`;

var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector(`#string`);

string.addEventListener("mousemove", (dets) => {
  initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;

  gsap.to("svg path", {
    attr: { d: initialPath },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
