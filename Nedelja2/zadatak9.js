let n = 5;
for (let i = 0; i < n; i++) {
    let str = '';
    for (let o = 1; o <= n - i; o++) {
        str = str + ' ';
    }
    for (let k = 0; k <= (2 * i + 1); k++) {
        str = str  + '#';
    }
    console.log(str);
}