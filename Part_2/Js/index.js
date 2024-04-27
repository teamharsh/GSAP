gsap.from("#page1 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});

gsap.from("#page2 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  //   scrollTrigger:"#page2 #box",
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 10%",
    // scrub: true,// it help to make the animation smooth when you are dragging
    scrub: 2,
    pin: true, // pinned on  screen while in viewport
  },
});

gsap.to("#page4 h1", {
  transform: "translateX(-190%)",
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});
