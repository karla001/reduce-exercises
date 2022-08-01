// function total(arr) {
//     let newArr = arr.reduce((final,num)=>{
//         final += num;
//         return final;
//     });
//     return newArr;
// }
 
// console.log(total([1,2,3])); // 6
 
// function stringConcat(arr) {
//     let newArr = arr.reduce((final, num)=>{
//         final += num;
//         return final
//     },'');
//     return newArr;
// }

 
//  console.log(stringConcat([1,2,3])); // "123"

 function totalVotes(arr) {

    let newArr = arr.reduce((accumulator, person)=>{
        let voted =person.voted;
        if(voted){
         accumulator += 1;
        }
        return accumulator;
    },0);
    return newArr;
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); // 7
 
 function shoppingSpree(arr) {
    let price = arr.reduce((f,num)=>{
        f += num.price;
        return f;
    },0);
    return price;
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist)); // 227005
 
 function flatten(arr) {
    let joined = arr.reduce((final,myArr)=>{
        return final.concat(myArr);
    });
    return joined;
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
 

 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    let final = { 
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotes: 0,
        numMidPeople: 0,
        numOldVotes: 0,
        numOldPeople: 0
    };

    return arr.reduce((acc, voter)=>{
        if(17<voter.age && voter.age<26){
            acc.numYoungPeople += 1;
            if(voter.voted==true){
                acc.numYoungVotes += 1;
            }
            
        }else if(26<voter.age && voter.age<36){

            acc.numMidPeople += 1;
            if(voter.voted==true){
                acc.numMidVotes += 1;
            }
        }else if(36<voter.age && voter.age<56){
            acc.numOldPeople += 1;
            if(voter.voted==true){
                acc.numOldVotes += 1;
            }
        }
        return acc;
    }, final)

}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
