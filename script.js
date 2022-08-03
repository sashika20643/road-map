
const tl1=gsap.timeline();


array1=["strcterx","Arrow_1"]
array1.forEach(element => {
tl1.from(`#${element}`, {opacity:0, duration: 1});
 
});
