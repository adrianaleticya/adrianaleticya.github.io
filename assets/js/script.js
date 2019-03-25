document.querySelectorAll('div.navbar-nav > a.nav-item').forEach(
    el => el.addEventListener("click", 
        self => {
            document.querySelectorAll('main > section').forEach(
                elem => elem.style.display = 'none'
            )
            document.getElementById(self.target.href.split('#')[1]).style.display = 'block'
        }
    )
)
window.addEventListener('resize', () => setCarouselImages())
window.addEventListener('DOMContentLoaded', () => setCarouselImages())

let setCarouselImages = () => {
    let carouselImg = [
        document.getElementById('carousel-img-0'), 
        document.getElementById('carousel-img-1'), 
        document.getElementById('carousel-img-2')
    ]
    for(let i = 0; i < 3; i++) 
        carouselImg[i].setAttribute(
            'src', `./assets/img/carouselSlide/${screen.width < 800 ? 'mobile' : 'desktop'}/${i}.jpg`
        )
}