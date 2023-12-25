const btns = document.querySelectorAll('.btn_submit')

btns.forEach((btn) => {
    btn.addEventListener('click', sendMail)
})

function sendMail() {
    (function () {
        emailjs.init("CYi1gsvPGYv7H3Q8b");
    })();

    let params = {
        subject: 'Lesson',
        name: this.parentElement.children[0].value,
        phone: this.parentElement.children[2].value,
        email: this.parentElement.children[4].value,
    }

    let serviceID = "service_v095umi";
    let templateID = "template_avr99oh";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Email sent successfully")
        })
        .catch();
}
