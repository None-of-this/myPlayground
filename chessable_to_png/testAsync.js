async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // attendre que la promesse soit résolue (*)

    alert(result); // "done!"
}

f();



const countingToBillions = async () => {
    for (let i = 0; i < 1000; i++) {
        console.log(i);
        resolve(i)
    }
}


const flowControle = async () => {
    let promise = new Promise((resolve, reject) => {
        let result = await promise
        countingToBillions()
    })
    console.log("ok")
}

