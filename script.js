gsap.registerPlugin(ScrollTrigger);
function cursorAnimation() {
  var crsr = document.querySelector("#cursor");
  var crsrBlur = document.querySelector("#cursor-blur");
  // document.addEventListener("mousemove",function(dets){
  //     crsr.style.left = dets.x  + "px";
  //     crsr.style.top = dets.y  + "px";
  //     crsrBlur.style.left = dets.x -250 + "px";
  //     crsrBlur.style.top = dets.y -250 + "px";
  // });

  document.addEventListener("mousemove", function (dets) {
    // Chhota cursor - exact follow
    gsap.to(crsr, {
      x: dets.x,
      y: dets.y,
      duration: 0,
    });

    // Bada blur - smooth follow
    gsap.to(crsrBlur, {
      x: dets.x - 200,
      y: dets.y - 200,
      duration: 0.9,
    });
  });
}
cursorAnimation();

function navAnimation() {
  gsap.to("#nav", {
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  // gsap.to("#nav", {
  //   backgroundColor: "#000",
  //   height: "100px",
  //   scrollTrigger: {
  //     trigger: "#page1",
  //     start: "top top",
  //     end: "bottom top",
  //     scrub: 1,
  //     markers: true
  //   }
  // });

  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 1,
    },
  });

  // gsap.to("#main", {
  //   backgroundColor: "#000",
  //   scrollTrigger: {
  //     trigger: "#page1",
  //     start: "top top",
  //     end: "bottom top",
  //     scrub: 1,
  //     markers: true
  //   }
  // });
}
navAnimation();

function movingdivAnimation() {
  let movingDiv = document.querySelector("#moving-div");
  let crsr = document.querySelector("#cursor");
  var crsrBlur = document.querySelector("#cursor-blur");
  movingDiv.addEventListener("mouseenter", function () {
    gsap.to("crsr", {
      scale: 3,
      backgroundColor: "transparent",
      border: "1px solid white",
      duration: 0.3,
    });
  });

  movingDiv.addEventListener("mouseleave", function () {
    gsap.to("#crsr", {
      scale: 1,
      backgroundColor: "#95C11E",
      border: "none",
      duration: 0.3,
    });
  });

  movingDiv.addEventListener("mouseover", function () {
    gsap.to(crsr, {
      scale: 3,
      border: "2px solid white",
      backgroundColor: "transparent",
      duration: 0.3,
    });
  });

  movingDiv.addEventListener("mouseout", function () {
    gsap.to(crsr, {
      scale: 1,
      border: "none",
      backgroundColor: "#95C11E",
      duration: 0.3,
    });
  });
}
movingdivAnimation();

function navh4Animation() {
  var crsr = document.querySelector("#cursor");
  var h4all = document.querySelectorAll("#nav h4");
  h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      // Text animation
      gsap.to(elem, {
        scale: 1.15,
        color: "#95C11E",
        duration: 0.3,
        ease: "power2.out",
      });

      // Cursor animation
      gsap.to("#cursor", {
        scale: 3,
        backgroundColor: "transparent",
        border: "1px solid white",
        duration: 0.3,
        ease: "power2.out",
      });
      elem.style.color = "#95c11e";
    });
    elem.addEventListener("mouseleave", function () {
      // Text back to normal
      gsap.to(elem, {
        scale: 1,
        color: "#fff",
        duration: 0.3,
        ease: "power2.out",
      });

      // Cursor back to normal
      gsap.to("#cursor", {
        scale: 1,
        backgroundColor: "#95C11E",
        border: "none",
        duration: 0.3,
        ease: "power2.out",
      });
      elem.style.color = "#fff";
    });
  });
}
navh4Animation();

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 55%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  // stagger:0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page5 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page5 h1",
    scroller: "body",
    // markers:true,
    start: "top 100%",
    end: "top 50%",
    scrub: 3,
  },
});
