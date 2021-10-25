// Excrcise1: Given an array of integers, removing duplicate elements and creating an array whose elements are unique.
// (Eg: [1,2,2,3,4,4,4,5,6] => [1,2,3,4,5,6]). Find 3-4 ways to solve this.
//Cách 1: Sử dụng set trong js để thực hiện
// Time Complexity: O(n)
// Memory: O(n)
function removeDuplicateNumv1(array) {
  const result = new Set(array);
  return Array.from(result);
}

// console.log(removeDuplicateNumv1([1, 2, 2, 3, 4, 4, 4, 5, 6]));

//Cách 2: Sử dụng object trong js để thực hiện,
//lặp qua array, tìm kiếm key làm phần tử trong js nếu chưa tồn tại thì thêm vào ko thì bỏ qua
// Time Complexity: O(2n)
// Memory: O(n)
function removeDuplicateNumv2(array) {
  const hashTable = {};
  array.forEach((num) => {
    //không tìm thấy trong object;
    if (!(num in hashTable)) {
      hashTable[num] = num;
    }
  });
  const result = Object.keys(hashTable);
  return result;
}

// console.log(
//   removeDuplicateNumv2([1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 2, 3, 4, 5, 6])
// );
//Cách 3: Sử dụng phương thức reduce
// lặp qua mảng với mỗi phần tử trong arr, tìm xem trong mảng lưu trữ có phần tử đo xuất hiện không
// nếu không thì thêm vào mảng lưu trữ
//time complexity: O(n^2)
//Memory: O(n)
// function removeDuplicateNumv3(array) {
//   return array.reduce((previousArr, currentvalue) => {
//     if (previousArr.indexOf(currentvalue) === -1) {
//       previousArr.push(currentvalue);
//     }
//     return previousArr;
//   }, []);
// }
// console.log(removeDuplicateNumv3([1, 2, 3, 41, 1, 2, 3, 4, 5, 6]));
//giảm dô phức tạp O(n)
//Cách 3.1: Sử dụng phương thức reduce kết hợp vs obj or set
// lặp qua mảng với mỗi phần tử trong arr, lợi dụng đặc tính key của obj để thực hiện xác định các phần tử độc nhất
//time complexity: O(2n)
//Memory: O(n)
function removeDuplicateNumv3(array) {
  return array.reduce(
    (obj, currentvalue) => {
      if (!(currentvalue in obj.hash)) {
        obj.unique.push(currentvalue);
      }
      obj.hash[currentvalue] = currentvalue; //set.add(currentValue)
      return obj;
    },
    {
      hash: {},
      unique: [],
    }
  ).unique;
}
// console.log(
//   removeDuplicateNumv3([
//     1, 2, 3, 41, 1, 2, 2, 3, 4, 1, 2, 4, 6, 7, 2, 3, 4, 5, 6,
//   ])
// );

//Cách 4: Sử dụng mảng và lặp trog mảng
//1. nếu mảng chưa được sắp xếp, sắp xếp mảng
//2. lặp qua array ( bắt đầu 1), tại phần tử num vị trí i xép xem mảng trước nó có phần tử nào giống với i thì bỏ qua
//3. thấy phần từ khác với num thì chèn phần tử đó vào vị trí idx cũ và tăng lên 1
//4. cắt phần dư thừa
// Time Complexity: O(nlog(n) (sorttime) + n (loop))
// Memory: O(1)

function removeDuplicateNumv4(array) {
  const n = array.length;
  array.sort();
  let idx = 1;
  for (let i = 1; i < n; i++) {
    if (array[i] !== array[i - 1]) {
      array[idx] = array[i];
      idx++;
    }
  }
  return array.slice(0, idx);
}
// i =1 idx: 1 i =2 idx =1
// console.log(removeDuplicateNumv4([1, 1, 2, 3, 4, 3, 5, 5, 6, 7]));

//==============================================Exercise 2===========================================================
// Given an array of integers, find integers with the most repetitions.
// If multiple numbers have the same maximum number of repetition, export all of them.
// Maximum 3 rounds, not nested.
// Time complexity: O(2n) 1 vòng lặp
// Memory: O(2n)
function findMostRepetitionElement(array) {
  return array.reduce(
    (store, currVal) => {
      if (currVal in store.hash) {
        store.hash[currVal]++;
        if (store.hash[currVal] > store.max) {
          store.max = store.hash[currVal];
          store.unique = [currVal];
        } else if (store.hash[currVal] === store.max) {
          store.unique.push(currVal);
        }
      } else {
        store.hash[currVal] = 1;
      }
      return store;
    },
    {
      hash: {},
      unique: [],
      max: 0,
    }
  ).unique;
}

console.log(
  findMostRepetitionElement([1, 1, 5, 6, 1, 2, 2, 2, 3, 4, 3, 5, 5, 6, 7])
);
//==============================================Exercise 3===========================================================
// Ex 3: Create a decision question tree,
// the answer of the previous question will affect the appearance of the following question.
// Requirements: Easily add, edit or delete to the questionnaire at low cost.
/* Node structor: question :{ một câu hỏi
  specifyFlag: {} cờ để phân biệt các loại câu hỏi phù hợp với câu trả lời nào trong node trước
  content: Nội dung câu hỏi 
  answers: [ danh sách các câu trả lời
    specifyFlag: {} cờ để phân biệt các loại câu hỏi phù hợp với câu trả lời nào trong node trước
    content: Nội dung câu trả lời
    next: con trỏ trỏ tới câu hõi tiếp theo
  ]
  n^n 
  m log(n) them xoa , lay du lieu, thay doi
} */

const fs = require("fs");
const { Stream } = require("stream");
class QuestionNode {
  constructor(content, flag, answersArr) {
    this.content = content;
    this.specifyFlag = flag;
    this.answers = answersArr;
    this.next = [];
  }

  preOrder(root) {
    if (root === null) {
      return;
    }
    console.log(root.content);
    for (const nextQues of root.next) {
      this.preOrder(nextQues);
    }
  }

  add(root, newNode) {
    //không có các câu hỏi phụ
    if (root.next.length === 0) {
      root.next.push(newNode);
      return;
    }

    // console.log(newNode);
    if (root.specifyFlag === newNode.specifyFlag) {
      return root;
    }
    for (const nextQues of root.next) {
      if (nextQues.specifyFlag.length === newNode.specifyFlag.length) {
        root.next.push(newNode);
        return;
      }
      if (newNode.specifyFlag.startsWith(nextQues.specifyFlag)) {
        this.add(nextQues, newNode);
        return;
      }
    }
  }
}
class AnswerNode {
  constructor(content, flag) {
    this.content = content;
    this.specifYFlag = flag;
  }
}

class DecisionTree {
  constructor() {
    this.questions = null;
    this.answers = null;
  }

  addQuestion(newQues) {
    let root = this.questions;
    if (root === null) {
      this.questions = newQues;
    } else {
      root.add(root, newQues);
    }
  }

  preOrderQuestion() {
    const root = this.questions;
    root.preOrder(root);
  }

  addAnswer(answer) {
    this.answers = {
      ...this.answers,
      ...answer,
    };
  }

  getAnswer(flag) {
    return this.answers[flag];
  }

  getAnswerList() {
    console.log(this.answers);
  }
}

// class DecisionNode {
//   constructor(question, answers) {
//     const questionObj = {
//       specifyFlag: question.code, //"0"
//       content: question.content,
//     };
//     const answersObj = [];
//     for (let i = 0; i < answers.length; i++) {
//       const temp = {
//         //ques.specifyFlag + i "01", "02", "03"
//         // subques phải có code "01", "02"
//         specifyFlag: answers[i] ? questionObj.specifyFlag + i : "",
//         content: answers[i],
//         next: null,
//       };
//       answersObj[i] = temp;
//     }
//     this.question = questionObj;
//     this.answers = answersObj;
//   }

//   preOrder(root) {
//     if (root === null) {
//       return;
//     }
//     console.log(root.question);
//     console.log(root.answers);
//     for (const answer of root.answers) {
//       this.preOrder(answer.next);
//     }
//   }

//   add(root, newNode, level = 1) {
//     if (root === null) {
//       return newNode;
//     }
//     for (const answer of root.answers) {
//       //find right path of answer to add new node
//       if (answer.specifyFlag[level] === newNode.question.specifyFlag[level]) {
//         //question.specifyFlag.startWith(newNode.answer.specifyFlag)
//         answer.next = this.add(answer.next, newNode, ++level);
//         break;
//       }
//     }
//     return root;
//   }

//   edit(root, editedNode) {
//     let head = root;
//     while (head !== null) {
//       const preNode = head;
//       for (const answer of head.answers) {
//         if (editedNode.question.specifyFlag.startsWith(answer.specifyFlag)) {
//           if (answer.specifyFlag === editedNode.question.specifyFlag) {
//             //if answer.next does not contain any question
//             const oldNode = answer.next;
//             if (oldNode === null) {
//               answer.next = editedNode;
//             }
//             //attach every sub question in to new Node
//             console.log(editedNode.answers.length);
//             for (let i = 0; i < editedNode.answers.length; i++) {
//               if (
//                 oldNode.answers[i] &&
//                 oldNode.answers[i].specifyFlag ===
//                   editedNode.answers[i].specifyFlag
//               ) {
//                 editedNode.answers[i].next = oldNode.answers[i].next;
//               }
//             }
//             // console.log(oldNode, editedNode);
//             // attach new edited node to tree
//             answer.next = editedNode;
//           } else {
//             head = answer.next;
//           }
//           break;
//         }
//       }
//       //check of specifyFlag is valid
//       if (head === preNode) {
//         break;
//       }
//     }
//   }

//   delete(root, specifyFlag) {
//     let head = root;
//     while (head !== null) {
//       const preNode = head;
//       for (const answer of head.answers) {
//         if (specifyFlag.startsWith(answer.specifyFlag)) {
//           if (answer.specifyFlag === specifyFlag) {
//             answer.next = null;
//           } else {
//             head = answer.next;
//           }
//           break;
//         }
//       }
//       if (head === preNode) {
//         break;
//       }
//     }
//   }
// }

function writeFileISON(obj) {
  return fs.writeFile("test.json", JSON.stringify(obj), function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("Data written successfully!");
  });
}

function testDecisionTree() {
  const newQues1 = new QuestionNode(
    "Let's start learning path, please, self assessment your javascript's level",
    "0",
    []
  );
  const nothing1 = new QuestionNode(
    "Let's start our basic learning path",
    "00",
    []
  );
  const nothing2 = new QuestionNode(
    "Did you pass basic learning path?",
    "001",
    []
  );
  const beginner1 = new QuestionNode(
    "Would you start basic learning path?",
    "01",
    []
  );
  const beginner2 = new QuestionNode(
    "Would you like to take a small test to check your knowledge?",
    "011",
    []
  );
  const newAns1 = { "01": "0K" };
  const decisionTree = new DecisionTree();

  decisionTree.addQuestion(newQues1);
  decisionTree.addQuestion(nothing1);
  decisionTree.addQuestion(nothing2);
  decisionTree.addQuestion(beginner1);
  decisionTree.addQuestion(beginner2);

  //decisionTree.preOrderQuestion();

  decisionTree.addAnswer(newAns1);

  decisionTree.getAnswerList();
}

testDecisionTree();
