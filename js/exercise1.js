// Excrcise1 Given an array of integers, removing duplicate elements and creating an array whose elements are unique.
// (Eg: [1,2,2,3,4,4,4,5,6] => [1,2,3,4,5,6]). Find 3-4 ways to solve this.
//Cách 1: Sử dụng set trong js để thực hiện
// Time Complexity:
// Memory: O(n)
function removeDuplicateNum1(array) {
  const result = new Set(array);
  return Array.from(result);
}

// console.log(removeDuplicateNum1([1, 2, 2, 3, 4, 4, 4, 5, 6]));

//Cách 2: Sử dụng object trong js để thực hiện,
//lặp qua array, tìm kiếm key làm phần tử trong js nếu chưa tồn tại thì thêm vào ko thì bỏ qua
// Time Complexity: O(2n)
// Memory: O(n)
function removeDuplicateNum2(array) {
  const hashTable = {};
  array.forEach((num) => {
    //không tìm thấy trong object;
    if (!(num in hashTable)) {
      hashTable[num] = num;
    }
  });
  const result = Object.values(hashTable);
  return result;
}

// console.log(
//   removeDuplicateNum2([1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 2, 3, 4, 5, 6])
// );
//Cách 3: Sử dụng phương thức reduce
// lặp qua mảng với mỗi phần tử trong arr, tìm xem trong mảng lưu trữ có phần tử đo xuất hiện không
// nếu không thì thêm vào mảng lưu trữ
//time complexity: O(n^2)
//Memory: O(n)
function removeDuplicateNum3(array) {
  return array.reduce((previousArr, currentvalue) => {
    if (previousArr.indexOf(currentvalue) === -1) {
      previousArr.push(currentvalue);
    }
    return previousArr;
  }, []);
}
// console.log(removeDuplicateNum3([1, 2, 3, 41, 1, 2, 3, 4, 5, 6]));

//Cách 4: Sử dụng mảng và lặp trog mảng
//1. nếu mảng chưa được sắp xếp, sắp xếp mảng
//2. lặp qua array ( bắt đầu 1), tại phần tử num vị trí i xép xem mảng trước nó có phần tử nào giống với i thì bỏ qua
//3. thấy phần từ khác với num thì chèn phần tử đó vào vị trí idx cũ và tăng lên 1
//4. cắt phần dư thừa
// Time Complexity: O(nlog(n) (sorttime) + n (loop))
// Memory: O(1)

function removeDuplicateNum4(array) {
  const n = array.length;
  array.sort();
  let idx = 1;
  for (let i = 1; i < n; i++) {
    if (array[i] !== array[i - 1]) {
      array[idx] = array[i];
      idx++;
    }
  }
  array.length = idx;
  return array;
}

// console.log(removeDuplicateNum4([1, 1, 2, 1, 3, 4, 3, 5, 5, 6, 7]));

//==============================================Exercise 2===========================================================
// Given an array of integers, find integers with the most repetitions.
//If multiple numbers have the same maximum number of repetition, export all of them.
// Maximum 3 rounds, not nested.
// Time complexity: O(2n)
// Memory: O(2n)
function findMostRepetitionElement(array) {
  const hashTable = {};
  let max = 1;
  const result = [];
  //lặp qua mảng và tính toán số lần lặp của các thành phần và lưu vào trong server
  for (num of array) {
    if (num in hashTable) {
      hashTable[num]++;
      //tìm số lần hiện diện max
      max = Math.max(hashTable[num], max);
    } else {
      hashTable[num] = 1;
    }
  }
  //lặp qua hashTable và lưu trữ các phần tử có số lần lặp nhiều nhất
  for (let value in hashTable) {
    if (hashTable[value] === max) {
      result.push(parseInt(value));
    }
  }
  return result;
}

console.log(findMostRepetitionElement([]));
