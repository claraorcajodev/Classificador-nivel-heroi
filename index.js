// Sistema de Nível de Herói //

let nome 
let nivel

switch (true) {
    case (nivel < 1000):
        nome = "Ferro";
        break;
    case (nivel > 1001 && nivel < 2000):
        nome = "Bronze";
        break;
    case (nivel > 2001 && nivel < 5000):
        nome = "Prata";
        break;
    case (nivel > 5001 && nivel < 7000):
        nome = "Ouro";
        break;
    case (nivel > 7001 && nivel < 8000):
        nome = "Platina";
        break;
    case (nivel > 8001 && nivel < 9000):
        nome = "Ascendente";
        break;
    case (nivel > 9001 && nivel < 10000):
        nome = "Imortal";
        break;
    case (nivel >= 10001):
        nome = "Radiante";
        break;
}

console.log("O Herói de nome ", nome,  "está no nível de ", nivel);
