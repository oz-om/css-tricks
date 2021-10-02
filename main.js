function $(el){return document.querySelector(el)}function $a(el){return document.querySelectorAll(el)}function conl(message){return console.log(message)}
/**************** BLOCK OF CODE *********************/

/********** box two ********/
let switch_mode = document.querySelector('.switch_mode');
let sun = document.querySelector('.svgSun');
let bxTwo = document.querySelector('.box-two');
let profImg = document.querySelector('.box-two .front img');
let title = document.querySelector('.box-two h2');
let des = document.querySelector('.box-two .details span');
let icons = document.querySelectorAll('.box-two a .fab');
let cls = 'light'
function light(el,lt) {
  switch_mode.addEventListener('click',()=>{
    el.classList.toggle(lt);
  })
}
light(switch_mode, cls);
light(sun,cls);
light(bxTwo,cls);
light(profImg,cls);
light(title,cls);
light(des,cls);
for (var i = 0; i < icons.length; i++) {
  light(icons[i],cls);
}

/********* Box three ******/
let colors = [
  'https://wallpapercave.com/uwp/uwp1457842.jpeg',
  'https://wallpapercave.com/uwp/uwp1457833.jpeg',
  'https://wallpapercave.com/uwp/uwp1457834.jpeg',
  'https://wallpapercave.com/uwp/uwp1457836.jpeg'];
let getColors = document.querySelectorAll('.box-three .colors p');
let img = document.querySelector('.box-three .main img');

getColors.forEach(color => {
  color.addEventListener('click', function(e) {
    getColors.forEach(color => {
      color.classList.remove('active');
    });
    e.target.classList.add('active')
    img.src = colors[e.target.dataset.num]
  })
});
let sizes = $a('.box-three .sizes p');
sizes.forEach(size => {
  size.addEventListener('click', function(e) {
    sizes.forEach(size => {
      size.classList.remove('active')
    })
    e.target.classList.add('active')
  })
})