
var perspectives = [].slice.call(document.querySelectorAll('.perspective')).map(toView)
var deoverflower = document.querySelector('#deoverflower')
var everything = document.querySelector('#everything')
var M = 20

function toView(element, index) {
  var view = { }
  var random = (index % 2) * 2 - 1
  view.update = function(viewport, explode) {
    var position = element.offsetTop
    var center = position + element.offsetHeight / 2
    var offset = viewport - position
    var box = element.querySelector('.box')
    var r = Math.max(-M, Math.min(M, (viewport - center) / 20))
    element.style.WebkitPerspectiveOrigin =
    element.style.perspectiveOrigin = '50% ' + offset + 'px'
    box.style.WebkitTransformOrigin =
    box.style.transformOrigin = '50% ' + offset + 'px 200px'
    var p = Math.pow(explode / 5, 1.414) * random
    var prerotate = 'rotateZ(' + p + 'deg) rotateX(' + p + 'deg)'
    box.style.WebkitTransform =
    box.style.transform = prerotate + 'rotateX(' + (-r) + 'deg) rotateY(' + r + 'deg)'
  }
  return view
}

window.onresize = window.onscroll = window.onload = function() {
  var viewport = window.scrollY + window.innerHeight / 2
  deoverflower.style.height = everything.offsetHeight + 'px'
  perspectives.forEach(function(view) {
    view.update(viewport, Math.max(0, -window.scrollY))
  })
}
