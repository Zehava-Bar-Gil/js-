function makeAllCaps(arr){
  return new Promise((resolve, reject)=>{
     let allNonString = arr.filter((str)=>{
          return typeof str !== "string"
      })
      if (allNonString.length !== 0) {
          reject('Is not string')
      }
      else {
        resolve(arr.map((str)=>{
            return str.toUpperCase()
    })) 
}
  })
}

function sortWords(arr){
    return new Promise((resolve, reject)=>{
      if(arr.length> 0){
          resolve(arr.sort())
      }
      else{
          reject('[]')
      }
    });

}

const strArr = ['hey','zehava', 'bar', 'gil']
makeAllCaps(strArr).then((result)=>{
    console.log(result);
    sortWords(result).then((sortD)=>{
        console.log(sortD);
  }).catch((err)=>{
    console.log(err);
})

   .catch((err)=>{
    console.log(err);
  })

})

