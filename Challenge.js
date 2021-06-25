// Print odds 1-20
for(i = 1; i < 20; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

// Decreaseing Multiples of 3
for(i = 100; i > 0; i--){
    if(i % 3 == 0){
        console.log(i)
    }
}

// Print the sequence
var sequence=[4,2.5, 1, -0.5, -2, -3.5]
for(i = 0; i < sequence.length; i++){
    console.log(sequence[i])
}

// Sigma
var sum = 0
for(i = 1; i < 101; i++){
    sum += i
}
console.log(sum)

// Factorial
var product = 1
for(i = 1; i < 13; i++){
    product *= i
}
console.log(product)