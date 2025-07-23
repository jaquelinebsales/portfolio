myObserver = new IntersectionObserver((objetos) => {
    objetos.forEach((objeto) => {
        if (objeto.isIntersecting){
            objeto.target.classList.add('show')
        } else {
            objeto.target.classList.remove('show')
        }
    })
})

myObserver02 = new IntersectionObserver((objetos) => {
    objetos.forEach((objeto) => {
        if (objeto.isIntersecting){
            objeto.target.classList.add('blureffect')
        } else {
            objeto.target.classList.remove('blureffect')
        }
    })
})

const elements = document.querySelectorAll('.hidden');
elements.forEach((element) => myObserver.observe(element))

const projectsession = document.querySelectorAll('.p-session')
projectsession.forEach((objprojectsession) => myObserver02.observe(objprojectsession))
