/* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */
import 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js'


var total = 40,
  container = document.getElementById('container'),
  w = window.innerWidth,
  h = window.innerHeight,
  Tweens = [],
  SPs = 1
// console.log(container)

for (var i = total; i--; ) {
  var Div = document.createElement('div')
  TweenLite.set(Div, { attr: { class: 'dot' }, x: R(w), y: R(h), opacity: 0 })
  container.appendChild(Div)
  Anim(Div)
}

function Anim(elm) {
  elm.Tween = TweenLite.to(elm, R(20) + 10, {
    bezier: {
      values: [
        { x: R(w), y: R(h) },
        { x: R(w), y: R(h) },
      ],
    },
    opacity: R(1),
    scale: R(1) + 0.5,
    delay: R(5),
    onComplete: Anim,
    onCompleteParams: [elm],
  })
}

function R(max) {
  return Math.random() * max
}

document.getElementById('playbtn').addEventListener('click', Play)

function Play() {
  if (SPs) {
    for (var i = total; i--; ) {
      Tweens[i].Tween.pause()
    }
    SPs = 0
  } else {
    for (var i = total; i--; ) {
      Tweens[i].Tween.play()
    }
    SPs = 1
  }
}

window.addEventListener('resize', resize)
function resize() {
  w = window.innerWidth
  h = window.innerHeight
}

/* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */
