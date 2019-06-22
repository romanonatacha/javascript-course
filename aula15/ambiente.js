let num = [5, 7, 8]
num[3] = 6
num.push(1)
num.sort()

console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valow não foi encontrado.')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}