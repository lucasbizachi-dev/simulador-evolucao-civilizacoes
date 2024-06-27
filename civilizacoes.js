/*Vamos imaginar que estamos jogando um jogo de civilização onde seu objetivo é evoluir sua civilização através das eras da história. 
Neste exemplo de pontuação, você ganha "pontos de metal" ao completar diferentes tarefas e desafios. 
A quantidade de pontos de metal que você acumula determinará em qual era histórica sua civilização está.*/

function determinarEra(nome, metal) {
    let era;

    metal = parseInt(metal);

    if (metal < 1000) {
        era = "Idade do Cobre (3300 - 1200 a.C)";
    } else if (metal > 1000 && metal <= 2000) {
        era = "Idade do Bronze (3300 - 700 a.C)";
    } else if (metal > 2000 && metal <= 3000) {
        era = "Idade do Ferro (1200 a.C - 1000)";
    } else if (metal > 3000 && metal <= 4000) {
        era = "História Antiga (4000 a.C - 476)";
    } else if (metal > 4000 && metal <= 5000) {
        era = "Idade Média (476 – século XV)";
    } else if (metal > 5000 && metal <= 6000) {
        era = "Idade Moderna (1453 – 1789)";
    } else {
        era = "Idade Contemporânea (1789 - atual)";
    }

    // Exibir o resultado
    console.log(`Sua civilização ${nome} está na  ${era}`);
}

// Exemplo de uso:
let nome = "Inglesa";
let metal = 5600;
determinarEra(nome, metal);