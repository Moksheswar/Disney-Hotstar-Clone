const videoCards=document.querySelectorAll('.video-card');
videoCards.forEach(item =>{
    item.addEventListener('mouseover',() => {
        let video=item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',() => {
        let video=item.children[1];
        video.pause();
    })
})

let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.prebtn');
let nxtBtns = document.querySelectorAll('.nxtbtn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})
