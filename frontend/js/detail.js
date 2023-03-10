
function ClientDelete(){
    let url = document.getElementById('confirm')
    url = url.getAttribute('href')  

    fetch(url, {
    method: 'DELETE',
   
})
.then(response => response.json())
    location.href = 'http://127.0.0.1:5501/frontend/index.html'
}


let urlParams = new URLSearchParams(window.location.search)
let id = urlParams.get("q")

$.ajax({
    
    url: `http://127.0.0.1:8000/home/clients/api/${id}/`,
    method: 'get',
    async: false,
    
    success: function(response){
        let container = document.querySelector('#content');
        

        let divCardContainer = document.createElement('div')
        divCardContainer.className = "card ml-2  mb-2  sm-2 md-3 lg-4  mt-2 mr-2"
        divCardContainer.id = 'Card'
        divCardContainer.style = "background-color: #E8F1F2;width: 22rem; padding: 8px; border-radius: 25px; "
        container.appendChild(divCardContainer)
        
        let cardImg = document.createElement('img')
            cardImg.id = 'card-img'
            cardImg.className = "card-img-top cardimg "
            cardImg.src = response["photo"]
            divCardContainer.appendChild(cardImg)

        let divCardBody = document.createElement('div')
        divCardBody.className = 'card-body'
        divCardContainer.appendChild(divCardBody)

        let h3Card = document.createElement('h3')
        h3Card.className = "card-title title-card"

        h3Card.innerHTML = response["name"]

        divCardBody.appendChild(h3Card)

        let hr = document.createElement('hr')
        divCardBody.appendChild(hr)

        let divData = document.createElement('div')
        divData.className = 'm-2'

        divCardBody.appendChild(divData)


        let p1 = document.createElement('p')                                                            /*data-toggle="modal" data-target="#exampleModal"*/
        let p2 = document.createElement('p')
        p1.className = "card-text  info"
        p2.className = "card-text mb-3 info"
        p1.innerHTML = `Date of bith ${response['date_of_birth']}`
        p2.innerHTML =  `Date of registration ${response['date_of_birth']}`

        divData.appendChild(p1)
        divData.appendChild(p2)


        let button = document.createElement('button')
        button.id = 'button-edit'
        button.style = 'margin: 0; padding:0; border: none;'
        button.setAttribute('href', `http://127.0.0.1:8000/home/clients/api/${response['id']}`)

        divCardBody.appendChild(button)
        let a = document.createElement('a')
        a.id = 'card-link'
        a.href = `http://127.0.0.1:5501/frontend/register.html?cl=${response['id']}`
        a.className = 'edit-client'
        
        a.innerHTML = 'Edit'
        
        
        button.appendChild(a)

        let aDelete = document.createElement('a')
        aDelete.id = 'card-link-remove'
        aDelete.type = '"button"'
        aDelete.className = 'm-2'
        aDelete.innerHTML = 'Delete'
        aDelete.setAttribute('data-toggle', 'modal')
        aDelete.setAttribute('data-target', '#exampleModal')
        divCardBody.appendChild(aDelete)



        let confirm = document.getElementById('confirm')

        confirm.setAttribute('href', `http://127.0.0.1:8000/home/clients/api/${id}/`)
        confirm.setAttribute('onclick', 'ClientDelete()')
        let buttonNoConfirm = document.querySelector('#no-confirm')
        buttonNoConfirm.setAttribute('href', `http://127.0.0.1:5501/frontend/detail.html?q=${response['id']}`)

       

   
        


        let div = document.createElement('div')
        div.id = 'card-address'
        div.className = 'card ml-2 mt-2  sm-2 md-3 lg-4  mr-2'
        div.style = 'background-color: #E8F1F2;width: 22rem; padding: 8px; border-radius: 25px;'

        container.appendChild(div)

        let divBody = document.createElement('div')
        divBody.className = 'card-body'
        div.appendChild(divBody)

        let h3 = document.createElement('h3')
        h3.className = 'card-title title-card'
        divBody.appendChild(h3)
        h3.innerHTML = 'Address'

        let hrAdress = document.createElement('hr')
        divBody.appendChild(hrAdress)

        let div3 = document.createElement('div')
        div3.className = 'm-3'
        divBody.appendChild(div3)

        let img = document.createElement('img')
        
        
        img.id = 'foguetinho'
        img.src = 'img/44247e29bf035ece825b8b2bf8af88c2-ilustracao-de-foguete-ilustracao-de-foguete.png'

        div3.append(img)

        let div4 = document.createElement('div')
        divBody.appendChild(div4)

        let p3 = document.createElement('p')
        p3.className = 'card-text info'

        div4.appendChild(p3)
        p3.innerHTML = `Neightborhood: ${response['neightborhood']}`


        let p4 = document.createElement('p')
        p4.className = 'card-text info'

        div4.appendChild(p4)
        p4.innerHTML = `Public Place: ${response['public_place']}`


        let p5 = document.createElement('p')
        p5.className = 'card-text info'

        div4.appendChild(p5)
        p5.innerHTML = `First name: ${response['name']}`


        let hrr = document.createElement('hr')
        div4.appendChild(hrr)
        hrr.style = 'width:250px;'
      
        

        let div5 = document.createElement('div')
        div3.className = 'b-5'
        divBody.appendChild(div5)


        let p6 = document.createElement('p')
        p6.className = 'card-text info'

        div5.appendChild(p6)
        p6.innerHTML = `Last Name: ${response['last_name']}`


        let p7 = document.createElement('p')
        p7.className = 'card-text info'

        div5.appendChild(p7)
        p7.innerHTML = `Cep: 3232323 `


        let p8 = document.createElement('p')
        p8.className = 'card-text info'

        div5.appendChild(p8)
        p8.innerHTML = `Number: ${response['number']}`

        let p9 = document.createElement('p')
        p9.className = 'card-text info'

        div5.appendChild(p9)
        p9.innerHTML = `City: ${response['city']}`


           

        
    }

})


