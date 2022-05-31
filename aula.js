// Variaveis
let idade = 15;
console.log(idade);

// Optar pelo 'const' e usar somente o let quando for um valor que precise ser alterado repetidas vezes.
const valorIngressoAdulto = 20; 
console.log(valorIngressoAdulto);

// Tipos primitivos
let nome = "Carlos"; // String literal
let idade2 = 20; // Number literal
let isActive = true; // Boolean
let sobrenome; // Undefined
let corSelecionada = null; // Redefinir um valor

// Tipagem dinâmica: Consiste em o javascript identificar automaticamente qual é o tipo da variável que você declarou
console.log("Tipo Inicial:",typeof nome);
nome = true;
console.log("Tipo Final:",typeof nome);

// Objetos
let pessoa = {
    nome: "Juliano",
    sobrenome: "Silva",
    idade: 20,
    isActive: true
};

console.log(pessoa);

// Arrays
let idadeFamilia = [15, 26, 35, 45, 28];

console.log(idadeFamilia[0]);
console.log(idadeFamilia.length);

// Functions
function alterarNome(name) {
    nomeAntigo = pessoa.nome;
    pessoa.nome = name;
    console.log("O nome foi Alterado de",nomeAntigo,"para",pessoa.nome);
}

alterarNome("Carlos");

// Operadores de Igualdade
// Igualdade estrita
console.log(1 === 1); // '===' ele compara não somente o valor, mas também o tipo

// Igualdade solta
console.log('1' == 1); // '==' Só compara os valores (NÃO RECOMENDADO)

// Operador ternário (SUPER ÚTIL) 
// Tem um cliete, 100 high rank, comum

let pontos = 100;
let tipo = pontos > 100 ? "high rank" : "comum";
console.log(tipo);

// Operadores Lógicos
// OR = || 
// AND = &&
// NOT = !

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);

podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho ? "Permitido aplicação" : "Aplicação recusada";

console.log(podeAplicar);

// Comparações não boleanas
// Falsy
//  - undefined
//  - null
//  - 0
//  - false
//  - ''
//  - NaN

// Truthy

let corPersonalizada = "vermelho";
let corPadrao = "azul";
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);

// EXERCÍCIO 1

let a = "vermelho";
let b = "Azul";

function substituirCor(){
    corTemp = a;
    a = b;
    b = corTemp;
}

console.log(a);
console.log(b);

substituirCor();

console.log(a);
console.log(b);


// Laços de repetição

for(let i = 1; i <= 10; i++){
    if (i % 2 == 0) { // Se o restante da divisão = 0...
        console.log("Kaioken x",i);
    }
}

