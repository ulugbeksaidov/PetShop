// var design = anime({
//     targets: '.nav__icons',
//     translateY: -7,
//     easing: 'easeInOutSine',
//     duration: 1000,
//     delay: function(el, i) { return i * 250 },
//     direction: 'alternate',
//     loop: true
//   });
  
  
//   var design = anime({
//     targets: '.',
//      rotate: 360, 
//     easing: 'linear',
//     loop: true,
//     direction: 'reverse',
//   });
  
//   var design = anime({
//     targets: '#cycle #padel',
//      rotate: 360, 
//     easing: 'linear',
//     loop: true,
//     duration: 3000,
//     direction: 'reverse',
//   });

//   
anime({
    targets: '#',
    translateY: 10,
    autoplay: true,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  });
  
  anime({
    targets: '#sms',
    translateX: 1,
    autoplay: true,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
      rotateY: {value: '+=180', delay: 200},
  });
//   

let isOpen = false;
document.addEventListener('DOMContentLoaded', () => {
  let targets = document.getElementById('wrapper');
  let wrapperStyle = wrapper.style;
  let button = document.getElementById('button');
  button.addEventListener('click', () => {
    if (isOpen) {
      anime({
        targets,
        height: 0,
        opacity: [1, 0],
        duration: 400,
        easing: 'easeOutQuad',
        complete() {
          isOpen = false;
          wrapperStyle.display = '';
        }
      });
    } else {
      isOpen = true;
      wrapperStyle.display = 'block';
      wrapperStyle.height = '0px';
      anime({
        targets,
        height: el => el.scrollHeight,
        opacity: [0, 1],
        duration: 400,
        easing: 'easeOutCubic'
      });
    }
  }, false);
}, false);