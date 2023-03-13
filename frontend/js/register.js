
let urlParams = new URLSearchParams(window.location.search)
let id = urlParams.get("cl")

if(!id){
    document.querySelector('#form').addEventListener('submit', e=>{
        e.preventDefault()
       
        let dataIscorrect = authRegister()
        
    
        if(dataIscorrect){
            const url = 'http://localhost:8000/home/clients/api/'
            let form_data = new FormData(e.target)
            let data = {
                method: 'POST',
                body: form_data
        }

        fetch(url, data)
        location.href = 'http://127.0.0.1:5501/frontend/index.html'
           
    }
    

        // Só redirecionar a página se o cadastro no banco acontecer de fato
    
     
    
    })



}else{

    let title = document.getElementById('main-title')
    title.innerHTML = 'Edit customer'


    getDataClient()

    document.querySelector('#form').addEventListener('submit', e=>{
        e.preventDefault()

    let dataIscorrectEdit =  authRegister()

    let formDataUpdate = new FormData(e.target)

    let photo = formDataUpdate.get('photo')['name']
    if(!photo){
        formDataUpdate.delete('photo')
        dataIscorrectEdit = true
        let file_error = document.getElementById('file_error')
        file_error.innerHTML = null
    }

    if(dataIscorrectEdit){

        const url = `http://127.0.0.1:8000/home/clients/api/${id}/`
       
        
        let data = {
            method: 'PATCH',
            body: formDataUpdate

    }
        let response = fetch(url, data)

        location.href = 'http://127.0.0.1:5501/frontend/index.html'

    }


})

}
