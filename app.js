const UpBtn = document.querySelector('.up-button')
const DowBtn = document.querySelector('.down-button')
const container=document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

UpBtn.addEventListener('click', () => {
    changeSlide('up')
})

let activeSlideIndex = 0

DowBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
          activeSlideIndex=0      
        }
    }else if(direction==='down'){
        activeSlideIndex--
        if(activeSlideIndex<0){
            activeSlideIndex=slidesCount-1
        }
    }
    const height=container.clientHeight
    mainSlide.style.transform=`translateY(-${activeSlideIndex*height}px)`

   
    sidebar.style.transform=`translateY(${activeSlideIndex*height}px)`
}