
$(document).ready( () => {

console.log('ready')

$('.grid').packery( {
  itemSelector: '.grid-item',
  gutter: 10
});

});