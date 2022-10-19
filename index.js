let pwdElm = document.getElementById('pwd-text');
let copyElm = document.getElementById('copy');
let lenElm = document.getElementById('len');
let upperElm = document.getElementById('upper');
let lowerElm = document.getElementById('lower');
let symElm = document.getElementById('sym');
let numElm = document.getElementById('num');
let genElm = document.getElementById('gen');

let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "~!@#$%^&*()_+|";







let getLowercase = () => {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

let getUppercase = () => {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

let getNumbers = () => {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

let getSymbols = () => {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

let generatePassword = () => {
    const len = lenElm.value;
    let password = "";
    if (len > 20 || len < 8) {
        alert("Password length must be between 8 to 20 characters");
        return ;
    }

    for (i = 0; i < len; i++) {
        const createdPass = generateX();
        password += createdPass;
    }
    pwdElm.innerText = password;
    // console.log(password);
}

let generateX = () => {
    let passArr = [];

    if (upperElm.checked) {
        passArr.push(getUppercase());
    }
    if (lowerElm.checked) {
        passArr.push(getLowercase());
    }
    if (numElm.checked) {
        passArr.push(getNumbers());
    }
    if (symElm.checked) {
        passArr.push(getSymbols());
    }
    if (passArr.length === 0)
    return "";

    return passArr[Math.floor(Math.random() * passArr.length)]
}

genElm.addEventListener("click", generatePassword);

copyElm.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    password = pwdElm.innerText;

    if (!password || pwdElm.innerText == "Password Here") {
        alert("Please select at least one checkbox and then Generate password");
        password = "";
        return;
    }
    textarea.value = password;
    // console.log(password);

    navigator.clipboard.writeText(pwdElm.innerText);

    alert("Password copied to the clipboard");
})
