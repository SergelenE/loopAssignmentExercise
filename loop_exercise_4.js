let lim = parseInt(prompt('Enter limit number'));
let div = parseInt(prompt('Enter divisible number'));

for(let i=1; i<=lim; i++){
    if(i%div === 0){
        console.log(i);
    }
}