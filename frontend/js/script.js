$.ajax({
    url: 'http://127.0.0.1:8000/home/clients/api/',
    method: 'get',
    async: false,
    success: function(response){

        let container = document.getElementById('content')
        for(let i in response["results"]){

            let divCardContainer = document.createElement('div')
            divCardContainer.className = "card ml-2  mb-2  sm-2 md-3 lg-4  mt-2 mr-2"
            divCardContainer.style = "background-color: #E8F1F2;width: 22rem; padding: 8px; border-radius: 25px;"


            container.appendChild(divCardContainer)
            
            let cardImg = document.createElement('img')
            cardImg.style = "border-radius: 25px; "
            cardImg.className = "card-img-top cardimg"
            cardImg.src = response['results'][i]['photo']


            divCardContainer.appendChild(cardImg)


            let cardBody = document.createElement('div')
            cardBody.className = "card-body"
          
            divCardContainer.append(cardBody)

            let h3Card = document.createElement('h3')
            h3Card.className = "card-title title-card "
            h3Card.innerHTML = response['results'][i]['name']
            

            divCardContainer.append(h3Card)
           
            let pCard = document.createElement('p')
            pCard.className = "card-text pl-3"
            pCard.innerHTML = 'Registred '+response['results'][i]['created_at']
            
            divCardContainer.append(pCard)

            let a = document.createElement('a')
            a.id = "card-link"
           
            a.addEventListener('click', get_client) 
            a.innerHTML = 'View more'
            divCardContainer.append(a)

            function get_client(){
                location.href = `detail.html?q=${response['results'][i]['id']}`
            }
            
        }
    }
})


