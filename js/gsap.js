



TweenLite.to('#ruleta', 140, {rotation:720 }).repeat(-1);

let tween = gsap.from('#jumping',{
    duration:3,
    y:70,
    
    
    delay:2
}).repeat(-1);



let escape = gsap.from('#stickEscape',{
    duration:3,
    x:-70,
    
    
    delay:4
}).repeat(-1);
