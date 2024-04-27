gsap.to("#box", {
  x: 1000,
  duration: 2,
  delay: 1,
  backgroundColor: "blue",
  borderRadius: "50%",
  rotate: 360,
  scale: 0.9,
});

gsap.from("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  backgroundColor: "red",
  borderRadius: "50%",
  rotate: 360,
  scale: 0.9,
});

gsap.from("h1", {
  color: "red",
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
  stagger: 0.3, // also w can take in negative  values for reverse order or positive values to stagger
});

gsap.from("#box2", {
  x: 1000,
  duration: 2,
  delay: 1,
  backgroundColor: "red",
  borderRadius: "50%",
  rotate: 360,
  scale: 0.9,
  repeat: -1, // this makes the animation loop forever
  yoyo: true, // and it will alternate between even and odd iterations
});

// gsap.to("#box3", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   borderRadius: "50%",
//   rotate: 360,
//   scale: 0.9,
// });

// gsap.to("#box4", {
//   x: 1000,
//   duration: 2,
//   delay: 3, // add a time of box 3 for  box 4 to start after box 3 is complete
//   borderRadius: "50%",
//   rotate: 360,
//   scale: 0.9,
// });

// gsap.to("#box5", {
//   x: 1000,
//   duration: 2,
//   delay: 5, // add a time of box 4 for  box 5 to start after box 4 is complete
//   borderRadius: "50%",
//   rotate: 360,
//   scale: 0.9,
// });

var tl = gsap.timeline(); //use  timeline instead of from/to so we can control the order of animations

tl.to("#box3", {
  x: 1000,
  duration: 2,
  delay: 1,
  borderRadius: "50%",
  rotate: 360,
  scale: 0.9,
});

tl.to("#box4", {
  x: 1000,
  duration: 2,
  delay: 0,
  borderRadius: "50%",
  rotate: 360,
  scale: 0.9,
});

tl.to("#box5", {
  x: 1000,
  duration: 2,
  delay: 0,
  borderRadius: "50%",
  rotate: 360,
  scale: 0.9,
});

var tl2 = gsap.timeline();

tl2.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl2.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.2,
});
