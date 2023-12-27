emailjs.init("CYi1gsvPGYv7H3Q8b");

let forms = document.querySelectorAll('[data-form]')
let modalFinish = document.querySelector('.modal_finish')
let overlay = document.querySelector('.overlay')

forms.forEach((form) => {
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        let serviceID = "service_v095umi";
        let templateID = "template_avr99oh";
    
        emailjs.sendForm(serviceID, templateID, this)
            .then(res => {
                overlay.classList.remove('overlay_none')
                modalFinish.classList.add('modal_show')
            }, function(error) {
                alert('Failed to send')
            })
    })
})

