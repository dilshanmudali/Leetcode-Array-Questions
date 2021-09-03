
//------------------------ARRAYS-----------------------------------//

//--------------------2 sum

//brute force solution -> solution is O(n^2) -> not efficient
// function twoSum(arr,target){


//   //loop over the given array
//   for(i=0;i<arr.length;i++){
//     //loop over again to start comparing
//     for(j=i+1;j<arr.length;j++){
//       //see if arr[i] and arr[j] add upto target
//       if(arr[i] + arr[j] === target){
//         return [i,j]
//       }
//     }
//   }

// }

// twoSum([3,2,4], 6)// return indexes -> [1,2]

//Hash table solution


// function twoSum(nums,target){

// //introduce a hash map to store values
// const hashMap = {}

// //get the index of each value and store in hashMap
//   for(let i = 0; i< nums.length; i++){
//     hashMap[nums[i]] = i
//   }

//   // console.log(hashMap)

//   for(let i=0; i<nums.length;i++){
//     const complement = target - nums[i]
//     if(hashMap[complement] && hashMap[complement] !== i){
//       return [i,hashMap[complement]]
//     }
//   }

// }

// const nums1 = [2,7,11,15]
// console.log(twoSum(nums1, 9))



//------------------- Best time to buy and sell stock


// var maxProfit = function(prices){
//   let buy = prices[0] //1
//   let profit = 0;//5

//   for(let i=1;i<prices.length;i++){
//     if(prices[i]<buy){
//       // 1 less than 7 true then 1 is the new buy
//       buy = prices[i]//set buy to new index of 1
//     }//price[i] = 5,3,6,4
//     else if((prices[i]-buy) > profit){//5-1>0 -> true, then profit = 4
//       //
//       profit = prices[i] - buy
//     }
//   }
//   return profit
// }

// maxProfit([7,1,5,3,6,4])//5


//------------------Contains Duplicates

// ---solution 1---- 

// function duplicates(arr){
//   let objMap = {}

//   for(i=0;i<arr.length;i++){
//     if(!objMap[arr[i]]){
//       objMap[arr[i]] = 1
//        console.log(objMap)
//     }
   
//     else{
//       return true;
//     }
//   }
//   return false;
// }


// duplicates([1,2,3,1]) 
//O(n) - time complexity
//O(n) - space complexity


// ---solution 2---

// function duplicates(arr){

//   arr.sort((a,b) => a-b) //(O NlogN)
//   for(let i=0; i<arr.length;i++){
//     if(i > 0 && arr[i -1] === arr[i]) return true
//   }
//   return false
// }


// duplicates([1,2,3,1]) 
// /O(N logN) - time complexity
//O(1) - space complexity



//--------------------- Product of Array Except Self

// I: number [] - nums
// O: number [] - product of all elements except for itself
// C: O(N), Cannot use division 


// var productExceptSelf = function(nums){
//   // numsArr = [1,2,3,4]
//   let leftArr = [] //[1,1,2,6]
//   let rightArr = [] // [24,12,4,1]
//   let solutionArr = [] //[24,12,8,6]

//   //leftArr 
//   for(i=0;i<nums.length;i++){
//     if(leftArr.length === 0){
//       leftArr.push(1)
//     }else{
//       leftArr.push(leftArr[i-1]*nums[i-1])
//     }
//   }
//   //rightArr
//   for(i=nums.length-1; i>-1;i-- ){
//     if(rightArr.length === 0){
//       rightArr.push(1)
//     }
//     else{
//       rightArr.unshift(rightArr[0]*nums[i+1])
//     }
//   }

//   // solutionArr

//   for(let i =0; i< leftArr.length; i++){
//     solutionArr.push(leftArr[i]*rightArr[i])
//   }

//   return solutionArr;
// }

// productExceptSelf([1,2,3,4])
