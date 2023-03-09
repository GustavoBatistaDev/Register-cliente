const form = document.querySelector('#form')
    form.addEventListener('submit', function(e){
    e.preventDefault()
    let name = document.getElementsByName('name').value
    let last_name = document.getElementsByName('last_name').value
    let city = document.getElementsByName('city').value
    let zip_code = document.getElementsByName('zip_code').value
    let public_place = document.getElementsByName('public_place').value
    let neightborhood = document.getElementsByName('neightborhood').value
    let number = document.getElementsByName('number').value
    let date_of_birth = document.getElementsByName('date_of_birth').value


    console.log(name, last_name, city, zip_code, public_place, neightborhood, number, date_of_birth)

})


  