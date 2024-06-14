const notaFinal = 7;
const faltas = 7; 

if (notaFinal < 7 || faltas > 4) {
 console.log('reprovado, boas festas');
} else {
  console.log('Não foi reprovado por falta');
}

if (notaFinal < 7 && faltas > 4) {
    console.log('reprovado, boas festas');
   } else {
     console.log('Não foi reprovado por falta');
   }

   

  // exemplo 1
  const idade = 25;
const possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
    console.log("Pode dirigir, possui idade suficiente e carteira de motorista.");
} else {
    console.log("Não pode dirigir.");
}
 

if (idade >= 18 || possuiCarteira) {
    console.log("Pode dirigir, possui idade suficiente e carteira de motorista.");
} else {
    console.log("Não pode dirigir.");
}
   