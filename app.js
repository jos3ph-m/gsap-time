const rule = CSSRulePlugin.getRule("span:after");

/*
gsap.from(".anim1", {
  opacity: 0,
  duration: 2,
  y: -350,
  ease: "elastic(1, .9)",
  stagger: 0.6,
});

gsap.from(".swirl", {
  opacity: 0,
  duration: 4,
  y: 400,
  ease: "elastic(1, .9)",
  delay: 2.4,
});

gsap.to(rule, { cssRule: { scaleY: 0 }, duration: 1 });

gsap.from("aside", {
  opacity: 0.3,
  backgroundPosition: "100px 0px",
  duration: 5,
  ease: "elastic(1, .9)",
  delay: 1.1,
});
*/
const tl = gsap.timeline();

tl.from(".anim1", {
  duration: 2,
  y: -350,
  stagger: 0.6,
  opacity: 0,
  ease: "elastic(1, .9)",
})
  .to(
    rule,
    {
      duration: 1.5,
      cssRule: { scaleY: 0 },
    },
    "-=1.2"
  )
  .from(
    "aside",
    {
      opacity: 0,
      backgroundPosition: "200px 0px",
      duration: 5,
      ease: "elastic(1, .9)",
    },
    "-=1.2"
  )
  .from(
    ".swirl",
    {
      opacity: 0,
      duration: 4,
      y: 300,
      ease: "elastic(1, .9)",
    },
    "-=4"
  );
