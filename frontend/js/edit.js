async function getDataClient(){
    let urlParams = new URLSearchParams(window.location.search)
    let id = urlParams.get("cl")

    let response = await fetch(`http://127.0.0.1:8000/home/clients/api/${id}/`)

    let data =  await response.json()

    console.log(data)
    let name = document.getElementById('name').value = data["name"]
    let last_name = document.getElementById('last_name').value = data["last_name"]
    let city = document.getElementById('city').value = data["city"]
    let zip_code = document.getElementById('zip_code').value = data["zip_code"]
    let public_place = document.getElementById('public_place').value = data["public_place"]
    let neightborhood = document.getElementById('neightborhood').value = data["neightborhood"]
    let number = document.getElementById('number').value = data["number"]
    let date_of_birth = document.getElementById('date_of_birth').value = data["date_of_birth"]

    
}   

