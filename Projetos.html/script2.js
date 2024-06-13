document.getElementById('enrollment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let dob = document.getElementById('dob').value;
    let curso = document.getElementById('curso').value;
});


function validateDate(dob) {
    // Verifica se a data está no formato correto e se a pessoa tem pelo menos 18 anos
    let birthDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 18) {
        alert('Você deve ter pelo menos 18 anos para se matricular.');
        return false;
    }

    return true;
}