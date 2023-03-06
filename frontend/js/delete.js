function ClientDelete(){
    let url = document.getElementById('confirm')
    url = url.getAttribute('href')  

    fetch(url, {
    method: 'DELETE',
   
})
.then(response => response.json())
    location.href = 'http://127.0.0.1:5501/frontend/index.html'
}
