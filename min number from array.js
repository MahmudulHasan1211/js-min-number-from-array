const numbers = [10, 20, 90, 77, 87, 551, 551.1, 7]

function minNumber(numbers) {
    min = numbers[0]
    for (let number of numbers) {
        if (number < min) {
            min = number
        }
    }
    return min;
}
console.log(minNumber(numbers))