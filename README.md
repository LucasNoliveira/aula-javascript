# aula-javascript

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qhal o seu nome?', (nome) => {
    //console.log(`Obrigado: ${nome}`);
    //rl.close();

rl.question('Qhal sua idade?', (nome) => {
    console.log(`Sua idade é: ${idade}`);
    rl.close();
});

});
