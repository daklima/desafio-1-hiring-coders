const form =  document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('name-input').value;
    let email = document.getElementById('email-input').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');
    let carregando = `<p>Carregando...</p>`;
    content.innerHTML = carregando;

})