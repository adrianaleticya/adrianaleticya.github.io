window.addEventListener('DOMContentLoaded', () => setCarouselImages())
window.addEventListener('resize', () => setCarouselImages())
const $ = document.getElementById.bind(document)
const imgCarouselPath = './assets/img/carouselSlide'
document.querySelectorAll('div.navbar-nav > a.nav-item').forEach(
    el => el.addEventListener("click", self => {
        document.querySelectorAll('main > section').forEach(el => el.style.display = 'none')
        $(self.target.href.split('#')[1]).style.display = 'block'
        document.querySelector('.navbar-collapse').classList.remove('show')
    })
)
let setCarouselImages = () => {
    let carouselImg = [$('carousel-img-0'), $('carousel-img-1'), $('carousel-img-2')]
    for(let i = 0; i < 3; i++) 
        carouselImg[i].setAttribute(
            'src', `${imgCarouselPath}/${screen.width<screen.height?'mobile':'desktop'}/${i}.jpg`
        )
}