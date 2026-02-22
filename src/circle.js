

function calcArea(radius) {
    if(typeof radius !== 'number') {
        throw new Error('Invalid radius. Only numbers are allowed.');
    }
    if(radius <= 0) {
        throw new Error('Invalid radius. Only positive numbers are allowed.');
    }
    if(radius > 10000000) {
        throw new Error('Invalid radius. Only numbers less than 10000000 are allowed.');
    }
    return Math.PI * radius * radius;
}

export { calcArea }
