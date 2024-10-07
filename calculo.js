function esconde(el) {
    document.getElementById(el).style.display = 'none';
}
function mostra(el) {
    document.getElementById(el).style.display = 'block';
} 
function toggle(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none") {
        document.getElementById(el).style.display = 'block';        
    } else {
        document.getElementById(el).style.display = 'none';
    }
}

// Função de cálculo com base na seleção e valores dos inputs
function calcular() {
    var opcaoSelecionada = document.getElementById('opcao').value;

    // Captura os valores dos inputs
    var input1 = parseFloat(document.getElementById('potassio').value);
    var input2 = parseFloat(document.getElementById('nitrogenio').value);
    var input3 = parseFloat(document.getElementById('fosforo').value);

    // Verifica se os valores são números válidos
    if (isNaN(potassio) || isNaN(nitrogenio) || isNaN(fosforo)) {
        alert("Por favor, insira valores válidos nos campos.");
        return;
    }

    var resultado;

    // Lógica de cálculo com base na opção selecionada e nos inputs
    switch (opcaoSelecionada) {
        case 'cenoura':
            resultado = (input1 + input2) * input3;
            break;
        case 'batata':
            resultado = (input1 * input2) - input3;
            break;
        case 'beterraba':
            resultado = (input1 / input2) + input3;
            break;
        case 'abobora':
            resultado = (input1 * input2 * input3); 
            break;
        case 'cebola':
            resultado = (input1 + input2 + input3); 
            break;
        default:
            resultado = "Escolha uma opção válida!";
    }

    // Criar um novo item de resultado
    var resultadoDiv = document.getElementById('resultado');
    var novoResultado = document.createElement('div');
    novoResultado.classList.add('result-item');
    novoResultado.innerText = "O resultado do cálculo para " + opcaoSelecionada + " é: " + resultado;

    // Limpar resultados anteriores e adicionar o novo resultado
    resultadoDiv.innerHTML = "";  // Limpa o conteúdo anterior
    resultadoDiv.appendChild(novoResultado);
}

// Event Listener para o botão calcular
window.onload = function() {
    document.getElementById('calcular').addEventListener('click', calcular);
}