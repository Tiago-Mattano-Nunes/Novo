button2.addEventListener("click", (event) =>{
    event.preventDefault();
    var user = document.getElementById("user").value;
    var senha = document.getElementById("senha").value;
    if(user != "" && senha != ""){
        alert("Conta criada com sucesso!")

        window.location.href = "logar.html"
    }

    else if(user == "" || senha == ""){
        alert("Por favor, preencha todos os campos")
    }
     
});
