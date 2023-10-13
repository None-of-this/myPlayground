let result = 0

const tetraition = n => {
    if(n < 2){
        console.log(result)
    }
    else{
        result = result + (n * n);
        console.log(result)
        tetraition(result)
    }
}