function convert(x){
    const minute=x*60
    return minute ;
}
const result =convert(3)
console.log("task 1 :  3 minutes " + result +" second ")

// task 2 :
function increment (s){
  const inc=s+1
  return inc
}
result2=increment(4);
console.log("task 2 : the result 4 increment = "+ result2)

//task 3:


const array1=[1 ,2,3,4,5,6,7]

console.log("the first element of array is"+array1[0])

//4 Write a function that takes the base and height of a triangle and return its area
const base =7;
const height=4;
function Area_Rectangle(a,b){
    const area=0.5 * a * b
    return area;
}


const result4 =Area_Rectangle(base,height)
console.log("the area of rectangle "+result4)

//5
// Create a function called evenNumberEvenIndex
// that accept an array of nums
//  and return a new array that have the even number in even index 
// var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
// Ex: evenNumberEvenIndex(nums) => [2,8,34]

 function evenNumberEvenIndex(array2){
    const arr2=[];
    for(let x=0 ; x<=array2.length ;x++){
        if(array2[x] %2==0 && x %2==0){
            console.log("even index :"+x)
            console.log("even number :"+array2[x])
            arr2.push(array2[x])
        }
    }
    return arr2;
 }
array2=[1,2,34,5,54,3,322,56,43,322,243,2]
const result3=evenNumberEvenIndex(array2);
console.log("the result task 5 :"+result3)


//6
// Create a function called evenIndexOddLength that accept an array of strings
// and return a new array that have the string with odd length in even index
// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// Ex: evenIndexOddLength(strings) => ["madrasa"]

function evenIndexOddLength (array3){
  const new_array=[]
  for(let i=0 ;i<=array3.length ;i++){
    if(array3[i.length] %2 !== 0 && i %2==0){
        new_array.push(array3[i])
    }
  }
  return new_array;
}

const StringArray=["nadeen","obada <3","nn","ss" ,"dd","ee"]
const result6=evenIndexOddLength(StringArray)
console.log("the result of task 6 ="+result6)

//7
// Create a function called powerElementIndex that accept an array of number
// and return a new array that have the element power by the index of it self
// var nums= [44, 5, 4, 3, 2, 10]
// Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

function powerElementIndex(array){
    const new_array=[];
    for(let i=0 ;i<=array.length ;i++){
        let power = Math.pow(array[i], i);
        new_array.push(power)
    }
    return new_array;
}

const array7=[43,4,5,32,21,65,66]
const result7= powerElementIndex(array7);
console.log("the result of task 7 : "+result7)


//8
// Write a function called multiplication2
// that takes two parameters
// and return the multiplication of them
// you need to use only sum
// multiplication2(5,4) => 20
// multiplication2(2,8) => 16
// multiplication2(7,6) => 42

function multiplication2(x,y){
    return x*y
}

const multip=multiplication2(5,4)
console.log("the result of task 8 :"+multip);

// 9
// ) Create a function called muti2
// that take two parameter
// and will return the multiplication
// from the first number to the second number
// Ex: muti2(4, 5); => 4 * 5 => 20
// Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360

function muti2(x,y){
    let result=1
    for(i=y ;i>=x ;i--){
         result *= i;
    }
    return result
}
const task9 = muti2(2,6)
console.log("the result of task 9 "+task9)

// 10
// Create a function called aveArray
// that accept an array and return the average of the numbers inside this array
// var nums= [1,2,3,8,9]
// Ex: aveArray(nums) => 4.6s
// var nums2= [1,2,3,8,9,77]
// Ex: aveArray(nums) => 16.6

function aveArray(nums){
    let sum=0;
for(let i=0 ;i<nums.length ;i++){
    sum += nums[i]
}
return sum/nums.length;
}

const nums2= aveArray([1,2,3,8,9,77])
console.log("the result of task 10: "+nums2)


// sheet 2 

// 1) Create a function that takes two dates and returns the number of days between the first 
// and second date.
// EX:
// getDays(
//  new Date("June 14, 2019"),
//  new Date("June 20, 2019")
// ) ➞ 6
// getDays(
//  new Date("December 29, 2018"),
//  new Date("January 1, 2019")
// ) ➞ 3

function getDays(date1,date2){
    const diff = date2 - date1;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
}
const d1 = new Date("June 14, 2019");
const d2 = new Date("June 20, 2019");

const days = getDays(d1, d2);

console.log(days);

// 2 
function numInStr(arr) {
    const regex = /\d/;
    return arr.filter(item => regex.test(item));
  }
  
  const array12 = ["1a", "a", "2b", "b"];
  const result12=numInStr(array12)
  console.log("result task 2 :" +result12);


//   3
// Given a string, reverse all the words which have odd length. The even length words are 
// not changed.
// EX:
//  reverseOdd("Bananas") ➞ "sananaB"
//  reverseOdd("One two three four") ➞ "enO owt eerht four"


function reverseOdd(str){
    return str.split(' ').map(word => {
        if (word.length % 2 !== 0) {
          return word.split('').reverse().join('');
        }
        return word;
      }).join(' ');
   
}

const string1="enO owt eerht four"; 
console.log("the result to 3 : "+reverseOdd(string1))
