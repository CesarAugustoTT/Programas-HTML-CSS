const form = document.querySelector("#enrollment-form")
const nameInput = Document.querySelector("#name")
const emailInput = Document.querySelector("#email")
const numberInput = Document.querySelector("#number")
const dobInput = Document.querySelector("#dob")
const cursoSelect = Document.querySelector("#curso")

console.log (form, nameInput, emailInput);
form.addEventListener ("submit", (event) =>) {
    evente.preventDefault();

    //verificar se o nome esta vazio
    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;
    }
    
    //verificar se o email está preenchido e se e valido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha o seu email");
        return;
    }

    // verificar se o numero esta preenchido
    if(numberInput.value === ""){
        alert("Por favor, preencha o seu número");
        return;
    }

    //verificar se o curso foi preenchido
    if(cursoSelect.value === ""){
        alert("Por favor, escolha seu curso");
        return;
    }

    // verificar se a data de nascimento foi preenchida
    if(dobInput.value === ""){
        alert("Por favor, preencha o sua data de nascimento");
        return;
    }
    
    // se todos estiverem preenchidos
    form.submit();
}


// função q valida email
function isEmailValid(email){

    // cria uma regex para validar
    const emailRegex = new RegExp(
        // Usuario12@host.com.br
        /^[a-zA-z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(email)){
        return true;
    }
    return false;
}