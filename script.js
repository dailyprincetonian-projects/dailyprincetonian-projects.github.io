var backgroundstreet = document.getElementById('background-street');
var campus = document.getElementById('campus');
var terrace = document.getElementById('terrace');
var tower = document.getElementById('tower');
var quad = document.getElementById('quad');
var cap = document.getElementById('cap');
var cloister = document.getElementById('cloister');
var charter = document.getElementById('charter');
var dial = document.getElementById('dial');
var colonial = document.getElementById('colonial');

var color1 = 'rgb(70,70,70)';
var color2 = 'white';

campus.style.fill = color1;
terrace.style.fill = color1;
colonial.style.fill = color1;
charter.style.fill = color1;
cloister.style.fill = color1;
dial.style.fill = color1;
tower.style.fill = color1;
quad.style.fill = color1;
cap.style.fill = color1;
ivy.style.fill = color1;
ti.style.fill = color1;
cottage.style.fill = color1;

var a = 1;
var b = 1;
var c = 0;
var d = 0;
var e = 1;

document.addEventListener('aos:in:trigger-3', ({ detail }) => {
  console.log('animated trigger3', detail);
  backgroundstreet.style.zIndex = 1;
  if (e == 1) {
    backgroundstreet.style.opacity = 1;
  }
  else {
    backgroundstreet.style.opacity = 0;
  }
  e = 1 - e;
});

document.addEventListener('aos:in:caption-1969', ({ detail }) => {
  console.log('animated in', detail);
  backgroundstreet.style.zIndex = 0;
  if (a == 0) {
    campus.style.fill = color1;
    terrace.style.fill = color1;
    colonial.style.fill = color1;
    charter.style.fill = color1;
  }
  else {
    terrace.style.fill = color2;
    campus.style.fill = color2;
    colonial.style.fill = color2;
    charter.style.fill = color2;
  }
  a = 1 - a;
});

document.addEventListener('aos:in:caption-1970', ({ detail }) => {
  console.log('animated in', detail);
  backgroundstreet.style.zIndex = 0;
  if (b == 0) {
    cloister.style.fill = color1;
    dial.style.fill = color1;
    tower.style.fill = color1;
    quad.style.fill = color1;
    cap.style.fill = color1;
  }
  else {
    cloister.style.fill = color2;
    dial.style.fill = color2;
    tower.style.fill = color2;
    quad.style.fill = color2;
    cap.style.fill = color2;
  }
  b = 1 - b;
});

document.addEventListener('aos:in:caption-1971', ({ detail }) => {
  console.log('animated in', detail);
  backgroundstreet.style.zIndex = 0;
  if (c == 0) {

    campus.style.opacity = '0';
    terrace.style.opacity = '0';
    colonial.style.opacity = '0';
    charter.style.opacity = '0';

    cloister.style.opacity = '0';
    dial.style.opacity = '0';
    tower.style.opacity = '0';
    quad.style.opacity = '0';
    cap.style.opacity = '0';
    
    backgroundstreet.style.width = '160vw';
    backgroundstreet.style.marginLeft = '-65%'
    backgroundstreet.style.marginTop = '-3%'
  }
  else {
    campus.style.opacity = '1';
    terrace.style.opacity = '1';
    colonial.style.opacity = '1';
    charter.style.opacity = '1';

    cloister.style.opacity = '1';
    dial.style.opacity = '1';
    tower.style.opacity = '1';
    quad.style.opacity = '1';
    cap.style.opacity = '1';

    backgroundstreet.style.width = '90vw';
    backgroundstreet.style.marginLeft = '0%'
    backgroundstreet.style.marginTop = '0%'
  }
  c = 1 - c;
});

document.addEventListener('aos:in:end-graphic', ({ detail }) => {
  console.log('animated in', detail);
  backgroundstreet.style.zIndex = 0;
  if (d == 0) {
    backgroundstreet.style.opacity = '0';
  }
  else {
    backgroundstreet.style.opacity = '1';
  }
  d = 1 - d;
});