/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// This program has two rotate array approch 

// Approch 1 Time Complexity=> O(n2)
var rotate1 = function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
        console.log(nums); 
    }
    return nums;
};

// Approch 2  Time Complexity=> O(n)
var rotate= function(nums,k){
    var k = k%nums.length;
    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);
return nums;
}

function reverse(nums, start,end){
    while(start<end){
        let temp = nums[start];
        nums[start]=nums[end];
        nums[end]= temp;
        start++;
        end--;
    }
}

console.log(rotate([1,2,3,4,-1,-2,-3,-4],3));