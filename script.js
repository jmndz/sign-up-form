const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-num');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-pass');
confirmPass.addEventListener('focusout', confirmPassword);
const submit = document.querySelector('.submit-btn').addEventListener('click', submitForm);

const invalidFirstName = document.querySelector('#first-name + span');
const invalidLastName = document.querySelector('#last-name + span');
const invalidEmail = document.querySelector('#email + span');
const invalidPhoneNumber = document.querySelector('#phone-num + span');
const invalidPassword = document.querySelector('#password + span');
const invalidConfirmPass = document.querySelector('#confirm-pass + span');

const audio = document.querySelector('.music');
const songList = ['./audio/ENHYPEN - Blessed Cursed.mp3',
                  './audio/ENHYPEN - Drunk-Dazed「Audio」.mp3',
                  './audio/ENHYPEN - FEVER「Audio」.mp3',
                  './audio/ENHYPEN - Given-Taken「Audio」.mp3',
                  './audio/ENHYPEN - ParadoXXX Invasion.mp3',
                  './audio/ENHYPEN - Tamed-Dashed「Audio」.mp3',
                  './audio/ENHYPEN (엔하이픈) - Future Perfect (Pass the MIC) 「Audio」.mp3',
                  './audio/ENHYPEN - SHOUT OUT.mp3',
                  './audio/ENHYPEN - TFW (That Feeling When).mp3',
                  './audio/ENHYPEN - Forget Me Not.mp3',
                  './audio/ENHYPEN - I Need The Light.mp3',
                  './audio/ENHYPEN - Polaroid Love.mp3',
                  './audio/ENHYPEN (엔하이픈) - Always 「Audio」.mp3'];
const song = new Audio();
audio.addEventListener('click', playAudio);

function playAudio(){
    const rand = Math.floor(Math.random() * songList.length);
    song.src = songList[rand];
    song.play();
}

firstName.addEventListener('focusout', () =>{
    if(firstName.value == ""){
        invalid(firstName);
        invalidFirstName.textContent = "Please enter your first name";
    }else{
        valid(firstName);
        invalidFirstName.textContent = "";
    }
});

lastName.addEventListener('focusout', () =>{
    if(lastName.value == ""){
        invalid(lastName);
        invalidLastName.textContent = "Please enter your last name";
    }else{
        valid(lastName);
        invalidLastName.textContent = "";
    }
});

email.addEventListener('focusout', () =>{
    if(email.value == ""){
        invalid(email);
        invalidEmail.textContent = "Please enter a valid email \neg.kimsunoo@gmail.com";
    }else{
        valid(email);
        invalidEmail.textContent = "";
    }
});

phoneNumber.addEventListener('focusout', () =>{
    if(phoneNumber.value == ""){
        invalid(phoneNumber);
        invalidPhoneNumber.textContent = "eg. 09123456789";
    }else{
        valid(phoneNumber);
        invalidPhoneNumber.textContent = "";
    }
});

password.addEventListener('focusout', () =>{
    if(password.value.length < 6){
        invalid(password);
        invalidPassword.textContent = "Password too short";
    }else{
        valid(password);
        invalidPassword.textContent = "";
    }
    confirmPassword();
});

function confirmPassword(){
    if(confirmPass.value !== password.value){
        invalid(confirmPass);
        invalidConfirmPass.textContent = "Passwords do not match";
    }else{
        valid(confirmPass);
        invalidConfirmPass.textContent = "";
    }
}

function valid(input){
    input.classList.remove('invalid');
}

function invalid(input){
    input.classList.remove('valid');
    input.classList.add('invalid');
}

function submitForm(event){
    if(firstName.checkValidity() && lastName.checkValidity() && email.checkValidity() 
      && phoneNumber.checkValidity() && password.checkValidity() && confirmPass.checkValidity()
      && password.value === confirmPass.value){
        alert('Welcome to the Engene Fandom!');
    }else{
        alert("Invalid inputs");
        event.preventDefault();
    }
}