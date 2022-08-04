const svg   = document.querySelector("svg");
const wobble  = document.querySelector("#wobble");
const width = 285;

const height = 0.3;
const frequency = 9;
const points  = 400;
const offsetX = 420;
const offsetY = 810;
const spread  = width / points;

let forward = []
for(var i = 0; i < points/2; i++) {
  forward.push(i+1);
}
const backward = [...forward].reverse()
const updown = [...forward, ...backward]

const sine = gsap.timeline().pause();

for (var i = 0; i < points; i++) {
  
  const point = wobble.points.appendItem(svg.createSVGPoint());
  
  point.x = (i * spread) + offsetX;
  point.y = (updown[i] / 2) + offsetY;
    
  sine.to(point, {duration: 1, y: -updown[i]/2 + offsetY, repeat: -1, yoyo: true , ease: Sine.easeInOut}, i/points * 12);  
}

sine.play(10)

gsap.set(".cushion", { 
	transformOrigin: "50% 50%"
})

gsap.set(".headphones", { 
	transformOrigin: "50% 70%"
})

gsap.to(".cushion", {duration: 0.2, scale: 1.04, repeat: -1, yoyo: true, ease: Sine.easeInOut})
gsap.fromTo(".headphones", {duration: 5, rotation: -5, ease: Sine.easeInOut}, {duration: 2, rotation: 5, ease: Sine.easeInOut, yoyo: true, repeat: -1})

const tl = gsap.timeline({repeat: -1})

tl.from(".note", {duration: 1, autoAlpha: 0, scale: 0, stagger: 0.6})
tl.to(".note", {duration: 1, autoAlpha: 0, stagger: 0.6}, 0.6)