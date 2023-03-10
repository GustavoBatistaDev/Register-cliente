async function Clientlist(){

    let url = `http://127.0.0.1:8000/home/clients/api/?q=`

    let form = document.getElementById('form')
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let queryString = document.getElementById('search_id').value

        location.href = `index.html?q=${queryString}`
   
    })

    let urlParams = new URLSearchParams(window.location.search)
    let queryString = urlParams.get("q")

    if( ! queryString){
        queryString = ''
    }
 
    let input_search = document.getElementById('search_id')
    input_search.value = queryString
    url = url + queryString
    const response = await fetch(url)

    const data = await response.json();

    if (data['count']==0){                                                      

        let contentContainer = document.getElementById('content')
        let div1 = document.createElement('div')
        div1.className = "card ml-2  mb-2  sm-2 md-3 lg-4  mt-2 mr-2"
        div1.style = 'background-color: #E8F1F2; padding: 8px; border-radius: 25px; width: 34rem;'
        contentContainer.appendChild(div1)

        let cardImg = document.createElement('img')
        cardImg.style = "height: 240px; width: 250px; margin-left:160px; "
        cardImg.className = "card-img-top"
        cardImg.src = 'img/506b575739e90613428cdb399175e2c8-desenho-de-astronauta-espacial.png'
        div1.appendChild(cardImg)
        let cardBody = document.createElement('div')

        cardBody.className = "card-body"
        div1.append(cardBody)

        let h4 = document.createElement('h4')
        h4.innerHTML = 'No customers match the search...  :('
        
        

        h4.className = "card-title title-card"
        let hr = document.createElement('hr')
        let pCard = document.createElement('p')
        pCard.className = "card-text"
        pCard.innerHTML = "Check if the search data is correct, if you still can't find it, it means that the customer is not in the system."

        cardBody.appendChild(h4)
        cardBody.appendChild(hr)
        cardBody.appendChild(pCard)
    }


    let container = document.getElementById('content')
    for (let i in data["results"]){
        console.log()
        let divCardContainer = document.createElement('div')
            divCardContainer.className = "card ml-2  mb-2  sm-2 md-3 lg-4  mt-2 mr-2"
            divCardContainer.style = "background-color: #E8F1F2;width: 22rem; padding: 8px; border-radius: 25px;"
            container.appendChild(divCardContainer)

            let cardImg = document.createElement('img')
            cardImg.style = "border-radius: 25px;"
            cardImg.className = "card-img-top cardimg"
            cardImg.src = data['results'][i]['photo']
            divCardContainer.appendChild(cardImg)

            let cardBody = document.createElement('div')
            cardBody.className = "card-body"
            divCardContainer.append(cardBody)

            let h3Card = document.createElement('h3')
            h3Card.className = "card-title title-card"
            h3Card.innerHTML = data['results'][i]['name']

            divCardContainer.append(h3Card)

            let pCard = document.createElement('p')
            pCard.className = "card-text pl-3"
            pCard.innerHTML = 'Registred '+data['results'][i]['created_at']

            divCardContainer.append(pCard)

            let a = document.createElement('a')
            a.id = "card-link"

            a.addEventListener('click', get_client) 
            a.innerHTML = 'View more'
            divCardContainer.append(a)

            function get_client(){
                location.href = `detail.html?q=${data['results'][i]['id']}`}
            }
    }
    
Clientlist();