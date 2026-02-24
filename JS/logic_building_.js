    // how to find duplicates elements

    const arr = [1,2,5,6,5,9,3,2]

    const duplicates =  arr.filter((ele,index,arr) => arr.indexOf(ele)!==index)
    console.log(duplicates)