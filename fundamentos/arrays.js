// forma de fazer agrupamento
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)
valores.push({id: 3}, false, null, 'teste')
console.log(valores)
console.log(valores.length)

console.log(valores.pop()) //retira a ultima funçao do array e mostra outra dorma tambem é o delete

delete valores[0]
console.log(valores)

console.log(typeof valores)
// em javascript array é tipo object

