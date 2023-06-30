console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
//*declare variable name and asign an object*/

//*myNameBookFirstArray="Katie Blue eyes"*/
//*myAuthorFirstArray = "M.A. Bennett"*/
/*mynumPagesFirstArray=10*/
/*myreadCountFirstArray=10*/

const book = {};
book.title = "Katie Blue Eyes";
book.Author = "M.A. Bennett"
book.numPages = 10;
book.readCount = 10;
console.log(book);

book.info = function(This){
    return `${This.title},${This.Author},${This.numPages},${This.readCount};`
} 
    console.log(book.info);
    
    

    //Exercise 3; Reverse a string

    let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence);

const str = `The quick brown fox jumps over the lazy dog`;
console.log(str);


const words = sentence.split(" ");
console.log(words);

const reversedArr = [];


for (let i = 0; i < words.length; i++){
    
    const characters = words[i].split("");
    console.log(characters);

    characters.reverse();
    console.log(characters);

    const joinedChars = characters.join("");
    console.log(joinedChars);

   reversedArr.push(joinedChars);
    console.log(reversedArr);
}
const reversedStr = reversedArr.join(" ");
console.log(reversedStr);

//* Exercise 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
console.log(csvData)
const dataPairs = csvData.split("\n");
console.log(dataPairs);
const headers = dataPairs[0].split(",");
console.log(headers);

const resultArr =[];

for(let i = 1; i < dataPairs.length; i++){
    const data = dataPairs [i].split(",");
    console.log(data);

const rowObj = {};
    rowObj.name = data[0];
    rowObj.age = data[1];

console.log(rowObj);
resultArr.push(rowObj);
}

console.log(resultArr);





