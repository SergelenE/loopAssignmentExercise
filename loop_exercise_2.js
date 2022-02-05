let num = parseInt(prompt('Heden too oruulah ve?'));

let sum = 0;
for(let i=1; i<=num; i++){
    let x = parseInt(prompt(i + ' dahi too oruulna uu!'));
    sum = sum + x;
}

alert('Dundaj: ' + (sum/num));