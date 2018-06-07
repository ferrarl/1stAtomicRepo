function slowEcho(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //let random = 2
            let random=Math.floor(Math.random() * 10);
            if (random % 2 === 0) {
                resolve(message);
            } else {
                let err = new Error('Something odd happened.');
                reject(err);
            }  
        }, delay);
    });
}

document.getElementById('btn')
.addEventListener('click', async () =>{
    try{
    let [val1,val2,val3] = await Promise.all ([
        slowEcho('I am first', 1000),
    ]);
    console.log(val1);
} catch (err) {
    console.log(err);
}
})

//document.getElementById('btn')
//.addEventListener('click', () => {
    //Promise.all([
        //slowEcho('I waited 1 second', 1000),
        //slowEcho('I waited 2 seconds', 2000),
        //slowEcho('I waited 3 seconds', 3000)
    //]).then(([value1,value2,value3]) => {
        //let value1 = value[0];
        //let value2 = value[1];
        //let value3 = value[2];
       // console.log(value1);
        //console.log(value3);
    //}).catch((err) => {
        //console.log(err);
    //})
    //});

let p = Promise.resolve('Hello');
let q = Promise.reject(new Error ('Oh No'));

p.then((message) => {
    console.log(message);
}).catch((err) =>{
    console.log(err);
});

q.then((message) => {
    console.log(message);
}).catch((err) =>{
    console.log(err);
});