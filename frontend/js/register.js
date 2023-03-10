
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

        //fetch(url, data)
       // location.href = 'http://127.0.0.1:5501/frontend/index.html'
           
    }
    

        // Só redirecionar a página se o cadastro no banco acontecer de fato
    
     
    
    })



}else{


    getDataClient()

    document.querySelector('#form').addEventListener('submit', e=>{
        e.preventDefault()

    let dataIscorrectEdit =  authRegister()

    if(dataIscorrectEdit){

        const url = `http://127.0.0.1:8000/home/clients/api/${id}/`
        let formDataUpdate = new FormData(e.target)
        
        let data = {
            method: 'PATCH',
            body: form_data

    }
        let response = fetch(url, data)



    }


})

}
