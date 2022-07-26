//Validar contact Form
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener('submit', validarFormulario);
});
function validarFormulario(evento) {
    evento.preventDefault();
    let warnings = [];


    let fullName = document.getElementById('fullName').value;
    if (fullName.length === 0) {
        warnings = [...warnings, '- Full Name field mandatory'];
    }

    let email = document.getElementById('email2').value;
    if (email.length === 0) {
        warnings = [...warnings, '- email field is empty'];
    }

    let phone = document.getElementById('phone').value;
    if (phone.length === 0 || phone === " ") {
        warnings = [...warnings, '- Phone number field is empty'];
    }

    let message = document.getElementById('message').value;
    if (message.length === 0 || !message === " ") {
        warnings = [...warnings, '- message field is empty'];
    }

    if (warnings.length > 0) {
        alert(warnings.join('\r\n'));
        return false;
    }

    //TODO: fetch
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fullName,
            email,
            phone,
            message
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert("Contact form has been send sucessfully! Thank you");
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error: ' + error);
        });

    

}


