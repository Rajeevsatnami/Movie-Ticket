const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
     container.classList.remove("sign-up-mode");
     
    //container.classList.add("booking.html");

});
// var name = document.getElementsByid('name');
// var psw = document.getElementsByid('psw');

// function store(){
//     localStorage.setItem('name' ,  name.value);
//     localStorage.setItem('psw' ,  psw.value);
// }
//  function check(){
//     var storedName = localStorage.getItem('name');
//     var storedpsw = localStorage.getItem('psw');

//     var userName = document.getElementById('userName');
//     var usePsw = document.getElementById('userPsw');

//     if(userName.value !== storedName || userPsw.value !==storedPsw){
//         alert('ERROR');

//     }else{
//         alert('you are loged in.');
//     }

//  }