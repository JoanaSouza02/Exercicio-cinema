let filmes = [
    {titulo: 'Ratattouille', classificacao: '0'},
    {titulo: 'Jogos Vorazes', classificacao: '12'},
    {titulo: 'Crepúsculo', classificacao: '14'},
    {titulo: 'Logan', classificacao:'16'},
    {titulo:'Halloween 2', classificacao:'18'}
];

let idade = Number(prompt('Por favor digite sua idade:'));

for (let item in filmes) {
    if (idade >= filmes[item].classificacao) {
        console.log(filmes[item].titulo);
    }
}