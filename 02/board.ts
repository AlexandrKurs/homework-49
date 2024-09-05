let array: string[] = [];
for (let i = 1; i<=8; i++) {
    for (let j = 1; j<=8; j++) {
        if (i % 2 === j % 2) {
            array.push(' ')
        } else {
            array.push('X');
        }
    }
    console.log(array.join(''));
    array = [];
}

