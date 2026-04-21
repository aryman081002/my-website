Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
});

gsap.to(".fleftelem", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 2,
  },
  y: "-300%",
});



let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
style:5,
slideStyle: (setScroll) => {
    sections.forEach(function(section, index){
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            scrub: 2,
            onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
        });
    },
});