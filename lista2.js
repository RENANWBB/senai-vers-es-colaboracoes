let listaParticipantes = ["Helena","Chico","Beto"];
let quantidadeParticipantes = listaParticipantes.length;
let data = 16;
let idade = 18;

if (quantidadeParticipantes < 100) {
    listaParticipantes.push("Renan");
} else {
    console.log("Cadastro não permitido!");
}
if (quantidadeParticipantes < 100 && data > 15 && idade >= 18){
    console.log("Lista:", listaParticipantes);
    console.log("Dia evento:", data);
    console.log("Cadastro concluido, Parabéns!");
} else {
    console.log("Cadastro não permitido!");
}