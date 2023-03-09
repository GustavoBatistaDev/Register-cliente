

document.querySelector('#form').addEventListener('submit', e=>{
    e.preventDefault()
    const url = 'http://localhost:8000/home/clients/api/'
    let form_data = new FormData(e.target)
    let data = {
        method: 'POST',
        body: form_data
    }
    //fetch(url, data)

    // Só redirecionar a página se o cadastro na api acontecer de fato
   // location.href = 'http://127.0.0.1:5501/frontend/index.html'

})