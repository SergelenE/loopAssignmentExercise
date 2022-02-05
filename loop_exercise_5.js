let num = prompt('Too oruulna uu');
let l = num.length;

let sum = 0;
for (let i=0; i<l; i++){
    sum = sum + parseInt(num.charAt(i));
}

alert(sum);

