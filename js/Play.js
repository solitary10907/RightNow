var controller = new ScrollMagic.Controller();

var v1 = new TimelineMax();

v1.to('.mv1', 1,{
  scale: 1.5,
  opacity: 1
}).to('.mv1', 1,{
  scale: 1
}).to('.mv1', 2,{
  opacity: 0
}).to('.mv2', 1,{
  scale: 1.5,
  opacity: 1
}).to('.mv2', 1,{
  scale: 1
}).to('.mv2', 2,{
  opacity: 0
}).to('.mv3', 1,{
  scale: 1.5,
  opacity: 1
}).to('.mv3', 1,{
  scale: 1
}).to('.mv3', 2,{
  opacity: 0
}).to('.mv4', 1,{
  scale: 1.5,
  opacity: 1
}).to('.mv4', 1,{
  scale: 1
}).to('.mv4', 2,{
  opacity: 0
}).to('.mv5', 1,{
  scale: 1.5,
  opacity: 1
}).to('.mv5', 1,{
  scale: 1
}).to('.mv5', 2,{
  opacity: 0
}).to('.mv6', 2,{
  opacity: 1
})

var scene01 = new ScrollMagic.Scene({
  triggerElement: '#point1',
  triggerHook: 0,
  reverse: false
}).setTween(v1).addTo(controller)
//.addIndicators()
var v2 = new TimelineMax();

v2.to('.mv01', 1,{
  scale: 1.5,
  opacity: 1
}).to('.mv01', 1,{
  scale: 1
}).to('.mv01', 2,{
  opacity: 0
}).to('.mv02', 1,{
  scale: 1.5,
  opacity: 1
}).to('.mv02', 1,{
  scale: 1
}).to('.mv02', 2,{
  opacity: 0
}).to('.mv03', 1,{
  scale: 1.5,
  opacity: 1
}).to('.mv03', 1,{
  scale: 1
}).to('.mv03', 2,{
  opacity: 0
}).to('.mv04', 1,{
  scale: 1.5,
  opacity: 1
}).to('.mv04', 1,{
  scale: 1
}).to('.mv04', 2,{
  opacity: 0
}).to('.mv05', 1,{
  scale: 1.5,
  opacity: 1
}).to('.mv05', 1,{
  scale: 1
}).to('.mv05', 2,{
  opacity: 0
}).to('.mv06', 1,{
  scale: 1.5,
  opacity: 1
}).to('.mv06', 1,{
  scale: 1
}).to('.mv06', 2,{
  opacity: 0
}).to('.mv07', 2,{
  opacity: 1
})



var scene02 = new ScrollMagic.Scene({
  triggerElement: '#point2',
  triggerHook: 0.4,
  reverse: false,
  // offset: -100
}).setTween(v2).addTo(controller)
//.addIndicators()
