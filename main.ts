let temp = 0
let list: number[] = []
let counter = 10
for (let index = 0; index < 50; index++) {
    list.push(randint(0, 100))
}
while (counter > 0) {
    counter = 0
    for (let index = 0; index <= list.length - 2; index++) {
        if (list[index] > list[index + 1]) {
            temp = list[index]
            list[index] = list[index + 1]
            list[index + 1] = temp
            counter += 1
        }
    }
}
console.log(list)
