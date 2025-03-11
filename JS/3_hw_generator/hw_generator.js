function* randomRGBGenerator() {
    while (true) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        yield `rgb(${r}, ${g}, ${b})`;
    }
}

// Використання генератора:
const colorGenerator = randomRGBGenerator();

console.log(colorGenerator.next().value); // Наприклад: rgb(123, 45, 67)
console.log(colorGenerator.next().value); // Наприклад: rgb(200, 156, 78)
console.log(colorGenerator.next().value); // Наприклад: rgb(34, 255, 90)
