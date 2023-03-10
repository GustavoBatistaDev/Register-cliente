function authRegister(){

    // fields form
    let name = document.getElementById('name').value
    let last_name = document.getElementById('last_name').value
    let city = document.getElementById('city').value
    let zip_code = document.getElementById('zip_code').value
    let public_place = document.getElementById('public_place').value
    let neightborhood = document.getElementById('neightborhood').value
    let number = document.getElementById('number').value
    let date_of_birth = document.getElementById('date_of_birth').value
    //let file = document.getElementById('photo').value

    //box error
    let name_error = document.getElementById('name_error')
    let last_name_error = document.getElementById('last_name_error')
    let city_error = document.getElementById('city_error')
    let zip_code_error= document.getElementById('zip_code_error')
    let public_place_error= document.getElementById('public_place_error')
    let neightborhood_error = document.getElementById('neightborhood_error')
    let date_of_birth_error = document.getElementById('date_of_birth_error')
    let file_error = document.getElementById('file_error')

    function ExecTimeout(){
        setTimeout(removeContentError, 3000)
    }

    function removeContentError(){
        
        name_error.innerHTML = null
        last_name_error.innerHTML  = null
        city_error.innerHTML = null
        zip_code_error.innerHTML = null
        public_place_error.innerHTML = null
        neightborhood_error.innerHTML = null
        date_of_birth_error.innerHTML = null
        number_error.innerHTML = null
        file_error.innerHTML = null
    }

    if(name.trim().length < 3){
        name_error.innerHTML = 'The field must be at least 3 characters long.'
        ExecTimeout()
        return false
    } 
    
    if(last_name.trim().length < 3){
        last_name_error.innerHTML = 'The field must be at least 3 characters long.'
        ExecTimeout()
        return false
    }

    if(zip_code.trim().length < 9 || zip_code.trim().length > 9){
        zip_code_error.innerHTML = 'Zip code must be in *****-*** format.'
        ExecTimeout()
        return false
    } 
    if(city.trim().length < 3){
        city_error.innerHTML = 'The field is required. Enter your city.'
        ExecTimeout()
        return false
    }
    
    if(public_place.trim().length === 0){
        public_place_error.innerHTML = 'The field is required.'
        ExecTimeout()
        return false
    }
    if(neightborhood.trim().length < 3){

        neightborhood_error.innerHTML = 'The field is required. Enter a valid neighborhood. '
        ExecTimeout()
        return false
    }
    if(number.trim().length === 0){

        number_error.innerHTML = 'The field is required.'
        ExecTimeout()
        return false
    }

    if(date_of_birth.trim().length < 10){
        date_of_birth_error.innerHTML = 'Date must be in ****-**-** format.'
        ExecTimeout()
        return false
    }
 


    return true



    
}
