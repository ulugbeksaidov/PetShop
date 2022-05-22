    const boxes = document.querySelectorAll('.img')

boxes.forEach(box =>{
    box.addEventListener('mousemove', rotate)
    box.addEventListener('mouseout', remove)

})
function rotate(e) {
    let halfWidth = this.offsetWidth / 2
    let x = e.offsetX - halfWidth   
    let y = e.offsetY - halfWidth
    
    this.style.transform = `rotateY(${-y/4}deg) rotateX(${x/4}deg)`
    this.style.transition = `0.5s linear`
}
function remove() {
    this.style.transform = `rotate(0)`
}

var updates = 0;

