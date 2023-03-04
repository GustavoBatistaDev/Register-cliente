

let urlParams = new URLSearchParams(window.location.search)
let id = urlParams.get("q")

$.ajax({
    
    url: `http://127.0.0.1:8000/home/clients/api/${id}/`,
    method: 'get',
    async: false,
    
    success: function(response){
        console.log(response)
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

        let a = document.createElement('a')
        a.id = 'card-link'
        
        a.innerHTML = 'Edit'
        
        
        divCardBody.appendChild(a)

        let aDelete = document.createElement('a')
        aDelete.id = 'card-link-remove'
        aDelete.type = '"button"'
        aDelete.className = 'm-2'
        aDelete.innerHTML = 'Delete'
        aDelete.setAttribute('data-toggle', 'modal')
        aDelete.setAttribute('data-target', '#exampleModal')
        
        divCardBody.appendChild(aDelete)

        


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


        


/*

<button type="button" class="btn btn-primary" >
  Launch demo modal
</button>
*/







        

        

        



        
    }

})



/*
    <div id="card-address" class="card ml-2  sm-2 md-3 lg-4  mr-2" >
              <div class="card-body">
                <h3 class="card-title title-card">Address</h3>
                <hr>
                <div class="m-3 ">
                  <img  style="float: right;" id="foguetinho" width="120px" src="img/44247e29bf035ece825b8b2bf8af88c2-ilustracao-de-foguete-ilustracao-de-foguete.png" alt="">
                </div>

                <div class="m-3">
                  <p class="card-text info"><strong>Neighborhood: Vale Verde</strong></p>
                  <p class="card-text info"><strong>Public Place: Av.Tordesilhas</strong></p>
                  <p class="card-text info"><strong>First Name: Vale Verde</strong></p>
                </div>
                <div class="m-3 ">
                    <p class="card-text info"><strong>Last Name: Av.Tordesilhas</strong></p>
                    <p class="card-text info"><strong>Neighborhood: Vale Verde</strong></p>
                    <p class="card-text info"><strong>Cep: 45803-178</strong></p>

                </div>
                </div>    
              </div>

*/