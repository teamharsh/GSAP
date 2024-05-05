function pageOneAnimation() {
  var tl = gsap.timeline();

  tl.from("nav h1 , nav h4, nav button ", {
    y: -40,
    opacity: 0,
    delay: 0.5,
    duration: 0.7,
    stagger: 0.15,
  });

  tl.from(
    ".center-part1 h1",
    {
      x: -200,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  ); //run before time line by 0.3 sec

  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".center-part2 img",
    {
      x: 200,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.6"
  ); //run before time line by 0.3 sec

  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
}

function pageTwoAnimation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      //   markers: true,
      start: "top 75%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(
    ".elem1",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "firstAnim"
  ); //give same name to work at same time

  tl2.from(
    ".elem2",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "firstAnim"
  ); //give same name to work at same time

  tl2.from(
    ".elem3",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "secondAnim"
  );

  tl2.from(
    ".elem4",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "secondAnim"
  );
}

function pageThreeAnimation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      //   markers: true,
      start: "top 75%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl3.from(
    ".s3h2",
    {
      x: -200,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  ); //run before time line by 0.3 sec

  tl3.from(".s3p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  tl3.from(".s3button", {
    opacity: 0,
    duration: 0.4,
  });

  tl3.from(
    ".s3img",
    {
      x: 200,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.6"
  ); //run before time line by 0.3 sec

  tl3.from(".s3serv", {
    y: -50,
    opacity: 0,
    duration: 1,
  });

  tl3.from(".s3footer", {
    y: -300,
    opacity: 0,
    duration: 1,
  });
}

pageOneAnimation();
pageTwoAnimation();
pageThreeAnimation();
