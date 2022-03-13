function consultarEndereco() {
    let cep = document.querySelector('#cep').value

    if (cep.length !== 8) {
        alert('CEP Inválido')
        return
    }


    let url = `https://viacep.com.br/ws/${cep}/json/`


    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            mostrarEndereco(data)
        })
    })
}

function mostrarEndereco(dados) {
    let resultado = document.querySelector('#result')

    resultado.innerHTML = `<ul class="menu">
                               <li><strong>Endereço</strong>: ${dados.logradouro} | </li> 
                               <li><strong>Bairro</strong>: ${dados.bairro} |</li> 
                               <li><strong>Cidade</strong>: ${dados.localidade} - ${dados.uf}</li>
                               </ul>`

}

