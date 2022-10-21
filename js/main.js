let juft = 0;
let toq = 0;

function butunSon(num) {
    for (i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            juft += i
        }
        else {
            toq += i
        }
    }
}
butunSon(1000);

if (juft > toq) {
    let result = Math.round(juft / toq);
    console.log(result);
} else {
    let result = Math.round(juft / toq);
    console.log(result);
}

console.log(juft, toq);

function sonlarde(nums) {
    for (i = 1; i <= nums; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}
sonlarde(1000);