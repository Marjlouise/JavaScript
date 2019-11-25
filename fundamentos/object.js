//um objeto de javascrip nao é igual a Json
const prod1 = {}
prod1.nome = 'celular Ultra Mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {

    nome: 'Camisa Polo',
    preco: 79.90
}


'{ "nome": "camisa polo", "preco": 79.90}' //json(curiosidade) formato textual
console.log(prod2)

