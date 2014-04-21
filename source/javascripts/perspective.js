
var perspectives = [].slice.call(document.querySelectorAll('.perspective'))
var deoverflower = document.querySelector('#deoverflower')
var everything = document.querySelector('#everything')
var M = 20

window.onresize = window.onscroll = window.onload = function() {
  var viewport = window.scrollY + window.innerHeight / 2
  deoverflower.style.height = everything.offsetHeight + 'px'
  perspectives.forEach(function(element) {
    var position = element.offsetTop
    var center = position + element.offsetHeight / 2
    var offset = viewport - position
    var box = element.querySelector('.box')
    var r = Math.max(-M, Math.min(M, (viewport - center) / 20))
    element.style.WebkitPerspectiveOrigin =
    element.style.perspectiveOrigin = '50% ' + offset + 'px'
    box.style.WebkitTransformOrigin =
    box.style.transformOrigin = '50% ' + offset + 'px 200px'
    box.style.WebkitTransform =
    box.style.transform = 'rotateX(' + (-r) + 'deg) rotateY(' + r + 'deg)'
  })
}
