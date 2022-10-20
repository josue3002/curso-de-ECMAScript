function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["Josue", "Daniel", "Katherin", "Daniela"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);