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

    if(typeof queryString === 'null' ){
        console.log('sou null')
    }
    
 
    
    url = url + queryString
    console.log(url)
    const response = await fetch(url)


    const data = await response.json();

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