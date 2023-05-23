function Valores(a,b,c,d,e) {
    var maior = Math.max(a,b,c,d,e);
    var menor = Math.min(a,b,c,d,e);
    document.getElementById("resultado").innerHTML = "Maior valor: " + maior + " Menor valor: " + menor;
}

function mostarMaiorMenor() {
    var valor1 = parseInt(document.getElementById("v1").value)
    var valor2 = parseInt(document.getElementById("v2").value)
    var valor3 = parseInt(document.getElementById("v3").value)
    var valor4 = parseInt(document.getElementById("v4").value)
    var valor5 = parseInt(document.getElementById("v5").value)

    Valores(valor1, valor2, valor3, valor4, valor5);
}
function incluindoVogais(c) {
  var vogais = ['a', 'e', 'i', 'o', 'u'];
  var lowercaseC = c.toLowerCase();

  if (vogais.includes(lowercaseC)) {
    return 1;
  } else {
    return 0;
  }
}
function verificarVogal() {
    var letra = document.getElementById('letra').value;
    var result = document.getElementById('result');
    var isVogal = incluindoVogais(letra);

    if (isVogal) {
      result.innerText = '1';
    } else {
      result.innerText = '0';
    }
}  
function ordenarValores() {
    var va = parseInt(document.getElementById("va").value);
    var vb = parseInt(document.getElementById("vb").value);
    var vc = parseInt(document.getElementById("vc").value);
    
    var resultadoordem = document.getElementById("resultadoordem");
    
    var valoresOrdenados = ORDEM(va,vb,vc);
    
    resultadoordem.innerHTML = "Valores ordenados: " + valoresOrdenados
}

function ORDEM(a, b, c) {
    var valores = [a, b, c]; 
    valores.sort(function(a, b) {
        return a - b;
    });
    return valores;
}
function LIMITES(li, ls) {
  var somatorio = 0;
  var numerosPares = [];

  for (var i = li + 1; i < ls; i++) {
    if (i % 2 === 0) {
      numerosPares.push(i);
      somatorio += i;
    }
  }

  var resultadoNumerosPares = document.getElementById("resultadoNumerosPares");
  resultadoNumerosPares.innerText = "Números pares: " + numerosPares.join(", ");

  var resultadoSomatorio = document.getElementById("resultadoSomatorio");
  resultadoSomatorio.innerText = "Somatório: " + somatorio;
}

function calcularIntervalo() {
  var limiteInferior = parseInt(document.getElementById("limiteInferior").value);
  var limiteSuperior = parseInt(document.getElementById("limiteSuperior").value);

  LIMITES(limiteInferior, limiteSuperior);
}
function POSITIVO_NEGATIVO(x) {
  if (x >= 0) {
      return true; 
  } else {
      return false; 
  }
}

function verificarPositivoNegativo() {
  var inputNumber = document.getElementById('inputNumber').value;
  var resultadoPosiNega = document.getElementById('resultadoPosiNega');

  if (POSITIVO_NEGATIVO(inputNumber)) {
      resultadoPosiNega.innerHTML = "true";
  } else {
      resultadoPosiNega.innerHTML = "false";
  }
}
function PAR_IMPAR(x) {
  return x % 2 === 0;
}

function verificarParImpar() {
  var numero = parseInt(document.getElementById('numero').value);
  var resultParImpar = document.getElementById('resultParImpar');

  if (isNaN(numero)) {
    resultParImpar.innerHTML = 'Por favor, digite um número válido.';
  } else {
    if (PAR_IMPAR(numero)) {
      resultParImpar.innerHTML = 'true';
    } else {
      resultParImpar.innerHTML = 'false';
    }
  }
}