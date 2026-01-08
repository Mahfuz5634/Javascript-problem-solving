//Write a function that counts how many vowels (a, e, i, o, u) are in a given string.\

function countVowels(str){
    let count = 0;
    let vowels = "aeiou";

    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}

console.log(countVowels("programming"));