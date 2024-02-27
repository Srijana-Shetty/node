const fs = require('fs');

//readFile()
//fs.readFile('file.txt', 'utf8', (err,data)=> {
  //  console.log(err,data)
//})

//console.log("my home")


//readFileSync()
//const a = fs.readFileSync('file.txt')
  //  console.log(a)


//console.log("finish reading file")



//writeFile()
//fs.writeFile('file.txt','its friday today', () => {
  //  console.log('lets go home')
//})
//console.log('tommorrow its holiday')


//writeFileSync()
b=fs.writeFileSync('file.txt','hello namaste')
console.log(b)
console.log('my name is srijana')