const numerosA = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
console.log(numerosA.sort())


const numerosB = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
numerosB.sort((a, b) => {
    return b - a
})
console.log(numerosB)


const numerosC = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
numerosC.sort((a, b) => {
    return a - b
})
console.log(numerosC)


const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
frutas.sort((a, b) => {
    return a.localeCompare(b)
})
console.log(frutas)


const frutasB = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
frutasB.sort((a, b)=>{
    return b.localeCompare(a)
})
console.log(frutasB)


const frutasC = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
frutasC.sort((a, b)=>{
    return a.length - b.length
})
console.log(frutasC)
