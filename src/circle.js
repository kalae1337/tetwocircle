

function calcArea(radius) {
    if(typeof radius !== 'number') {
        throw new Error('Invalid radius. Only numbers are allowed.');
    }
    if(radius <= 0) {
        throw new Error('Invalid radius');
    }
    if(radius > 10000000) {
        throw new Error('Invalid radius');
    }
    return Math.PI * radius * radius;
}

export { calcArea }
