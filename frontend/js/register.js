const form = document.querySelector('#form')

    form.addEventListener('submit', event=>{
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data)

        fetch('http://127.0.0.1:8000/home/clients/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data', 
            },
            body: JSON.stringify(data)
        })
    });
    
    
    
     
           



