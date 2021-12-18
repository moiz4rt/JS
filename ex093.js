//94. Write a JavaScript program to find the number which appears most in a given array of integers.

function array_element_mode(arr) {
    var ctr = [],
      ans = 0;
  
    for(var i = 0; i < 10; i++) {
      ctr.push(0);
    }
    console.log("1 For"+ctr);
    for(var i = 0; i < arr.length; i++) {
      ctr[arr[i] - 1]++;
      console.log("2 For" + ctr);;
      if(ctr[arr[i] - 1] > ctr[ans]) {
        ans = arr[i] - 1;
        console.log("If"+ctr)
        console.log("ans"+ans)
      }
    }
    return ans + 1;  
  }
  console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9]))