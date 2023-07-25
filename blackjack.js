function calcularPontos(carta1, carta2) {
    return carta1 + carta2;
  };
  
  let carta1 = 10;
  let carta2 = 11;
  let soma = calcularPontos(carta1, carta2);
  
  if (carta1 < 1 || carta1 > 11 || carta2 < 1 || carta2 > 11) {
    console.log("Os valores das cartas devem ser entre 1 e 11.");
  }    else {
    console.log("Soma das cartas: " + soma);
  };
    if (soma > 21) {
      console.log("Você perdeu, a soma das cartas é maior que 21.");
    } else {
      console.log("Você ganhou!");
    };

  
