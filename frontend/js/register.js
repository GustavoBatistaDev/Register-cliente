
const form = document.querySelector('form')
form.addEventListener('submit', RemoveDefault)

const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', ClientRegister)




const UploadFile = (e) => {
    e.preventDefault();
    const file = document.querySelector('input[name="file"]')
    
    const data = new FormData();
    data.append('img', file.files[0]);

}



function ClientRegister(){
   
    const first_name = document.querySelector('input[name="first_name"]').value
    const last_name = document.querySelector('input[name="last_name"]').value
    const cep = document.querySelector('input[name="cep"]').value
    const public_place = document.querySelector('input[name="public_place"]').value
    const neightborhood = document.querySelector('input[name="neightborhood"]').value
    const number = document.querySelector('input[name="number"]').value
    

    fetch('https://127.0.0.1:8000/home/clients/api/', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'}, 
        body: JSON.stringify({
            first_name, 
            last_name,
            cep,
            public_place,
            neightborhood,
            number
        })
    })
    .then(response)
        location.href = 'http://127.0.0.1:5501/frontend/index.html'    
  
}


function RemoveDefault(event){
    event.preventDefault();
}
