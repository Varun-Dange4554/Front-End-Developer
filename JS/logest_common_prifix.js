// let arr = ["dog","racear","car"];
let arr = ["flower", "flow", "flight"];

function prifix(){
    let jhola = arr[0];
    let jhola_leng = jhola.length;

    for (let i = 1; i < arr.length; i++) {
        let currenString = arr[i];
        while (jhola !== currenString.substring(0, jhola_leng)) {
            jhola_leng--;
            if (jhola_leng === 0) return "";
            jhola = jhola.substring(0, jhola_leng);
        }
    }

    return jhola;
}

let ans = prifix();
console.log(`ans: ${ans}`); // out put `ans : fl'
