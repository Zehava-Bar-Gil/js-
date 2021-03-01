function greater_than_10 (num){
    return new Promise ((resolve, reject) => {
        if (num > 10) {
            resolve(num);     
    } else {
            reject('less_than_10')
    }
});
 
}
greater_than_10(12).then((result) => {
        console.log(result);
})
      .catch((err) => {
        console.log(err)
});
    
    
