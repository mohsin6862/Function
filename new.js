function getSecondLargest(nums) {
    // Complete the function
    var largest=nums[0];
    for(let i=1;i<nums.length;++i)
    {
        if(nums[i]>largest)
        largest=nums[i];
    }
    var large=nums[0];
    for(let j=1;j<nums.length;++j)
    {
        if(large<nums[j]&&large<largest)
        large=nums[j];
    }
    console.log(large);
}

getSecondLargest([12, 23, 44, 76, 99, 47,78]);