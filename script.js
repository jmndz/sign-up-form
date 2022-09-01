const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-num');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-pass');
const submit = document.querySelector('.submit-btn').addEventListener('click', submitForm);

const invalidFirstName = document.querySelector('#first-name + span');
const invalidLastName = document.querySelector('#last-name + span');
const invalidEmail = document.querySelector('#email + span');
const invalidPhoneNumber = document.querySelector('#phone-num + span');
const invalidPassword = document.querySelector('#password + span');
const invalidConfirmPass = document.querySelector('#confirm-pass + span');

firstName.addEventListener('focusout',function(){checkForm(firstName,invalidFirstName, "Please enter your first name")});
lastName.addEventListener('focusout',function(){checkForm(lastName,invalidLastName, "Please enter your last name")});
email.addEventListener('focusout',function(){checkForm(email,invalidEmail, "Please enter a valid email \neg.kimsunoo@gmail.com")});
phoneNumber.addEventListener('focusout',function(){checkForm(phoneNumber,invalidPhoneNumber, "eg. 09123456789")});
password.addEventListener('focusout',function(){checkForm(password,invalidPassword, "Password is too short")});
confirmPass.addEventListener('focusout', confirmPassword);

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

function checkForm(input, invalidInput, text){
    if(input.value == "" || !input.checkValidity()){
        invalid(input);
        invalidInput.textContent = text;
    }else{
        valid(input);
        invalidInput.textContent = "";
    }
    if(input === password) confirmPassword();
}

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