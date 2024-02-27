const f = function () {
    console.log("this is the first method inside this")
}

const x =function(){
    console.log("this is the second method inisde this")
}

const P = 3.14;


//module.exports = f;
//module.exports = x;

module.exports = {f, x, P};