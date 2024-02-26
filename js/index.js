button.addEventListener("click", (event) =>{
    event.preventDefault();
    var user = document.getElementById("user").value;
    var senha = document.getElementById("senha").value;
    if(user == "user" && senha == "senha"){
        alert("Login realizado com sucesso!")

        window.location.href = "index.html"
    }

    else if(user != "user" && senha != "senha"){
        alert("Usuario ou senha incorretos")
    }
     
});