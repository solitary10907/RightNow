var scroll01 = new ScrollMagic.Controller();
var scroll02 = new ScrollMagic.Controller();
var scroll03 = new ScrollMagic.Controller();
var scroll04 = new ScrollMagic.Controller();

var mv01 = TweenMax.fromTo('.mv01', 1, {
    y: 200,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    className: "-=none"
});
var mv02 = TweenMax.fromTo('.mv02', 1, {
    y: 200,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    className: "-=none"
});
var mv03 = TweenMax.fromTo('.mv03', 1, {
    y: 200,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    className: "-=none"
});
var mv04 = TweenMax.fromTo('.mv04', 1, {
    y: 200,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    className: "-=none"
});

var scene01 = new ScrollMagic.Scene({
    triggerElement: '#point1',
    triggerHook: 0.5
}).setTween(mv01).addTo(scroll01)
var scene02 = new ScrollMagic.Scene({
    triggerElement: '#point2',
    triggerHook: 0.6
}).setTween(mv02).addTo(scroll02)
var scene03 = new ScrollMagic.Scene({
    triggerElement: '#point3',
    triggerHook: 0.5
}).setTween(mv03).addTo(scroll03)
var scene04 = new ScrollMagic.Scene({
    triggerElement: '#point4',
    triggerHook: 0.6
}).setTween(mv04).addTo(scroll04)
