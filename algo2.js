

// just a try that doesn't work as it should

let set1=[3, 1, 7, 9]
let set2=[2, 4, 1, 9, 3]
let sum = 0 ;
let set = set1.concat(set2);
let comm =[]
let k = false;

for(let i=0;i<set.length;i++){
    k = false;
    for(let j=0;j<set.length;j++){
        if(set[i]==set[j] && i!=j){
            k = true;
            comm.push(set[j]);
            sum+=set[j];       
        } 
    }
    if(k==false){
            sum+=set[i]
    }
}

console.log(sum)
console.log(comm)



var set1 =[12, 13, 6, 10];
var set2 = [13, 10, 16, 15]

var sum_distinct = 0;
var sum_commun = 0;
var set = set1.concat(set2)
var found = false;

for(let i =0; i<set.length;i++){
    found = false;
    for (let j=0;j<set.length;j++){
        if(set[i] == set[j] && i!=j){
            found=true;
            sum_commun += set[i];
        }
    }
    if(found==false){
        sum_distinct += set[i]
    }
}

console.log("sum distinct el", sum_distinct )
console.log("sum overlapping el", sum_commun )
