users = [];
cities = ["Delhi","Noida","Gurgaon","Mathura","Vrindavan","Jaipur","Mumbai","Chandigarh","Allahabad","Lucknow"];


function displayUsers(){
    // // now create the main container which is users 
     let usersContainer = document.getElementById('users');
     usersContainer.innerHTML = '';

    users.map((currentUserFromArray) =>{

        let userDiv = document.createElement('div');
        userDiv.classList.add('user');

        let nameElement = document.createElement('p');
        nameElement.innerText = currentUserFromArray.name;
        let emailElement = document.createElement('p');
        emailElement.innerText = currentUserFromArray.email;
        let cityElement = document.createElement('p');
        cityElement.innerText = currentUserFromArray.city;

        usersContainer.appendChild(userDiv);
        userDiv.appendChild(nameElement);
        userDiv.appendChild(emailElement);
        userDiv.appendChild(cityElement);
       

    })

}

function notifyUserAdded(){

    let alert = document.getElementById('alert-success');
    alert.classList.remove('alert');
    alert.classList.add('alert-success');


    setTimeout(() =>{

        alert.classList.remove('alert-success');
        alert.classList.add('alert');

    },2000)

}



function notifyUserAlreadyExisted(){

    let alert = document.getElementById('alert-danger');
    alert.classList.remove('alert');
    alert.classList.add('alert-danger');


    setTimeout(() =>{

        alert.classList.remove('alert-danger');
        alert.classList.add('alert');

    },2000)
}





function CheckUserAlreadyExisted(currentInputedUser){

    let doesUserExisted = users.filter((userFromArray) =>{
        return currentInputedUser.email == userFromArray.email;
    })

    if(doesUserExisted.length == 0){
        users.push(currentInputedUser);
        notifyUserAdded();

    }else{
        notifyUserAlreadyExisted();
    }
   
}

function getExamCenter(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let randomNumber = Math.floor((Math.random() * 10) + 1);

    user = {
        name : name.value,
        email : email.value,
        city : cities[randomNumber]
    }

    console.log(user.city);
    console.log(users);


    //check user already existed or not
    CheckUserAlreadyExisted(user);
    displayUsers();

    
}