const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.textContent = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_lknbqg7';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'Enviar Mensaje';
      alert('Enviado!');
    }, (err) => {
      btn.textContent = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});