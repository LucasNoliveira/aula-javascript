
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Quantos alunos há na sala?', (alunos) => {
    rl.close();

if (alunos == 0){
    console.log('Zero')
}
else if (alunos % 2 === 0){
    console.log('O número ' + alunos + ' é par')
}
else {
    console.log('O número ' + alunos + ' é ímpar')
}
});