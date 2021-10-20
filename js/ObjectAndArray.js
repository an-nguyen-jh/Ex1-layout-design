// Excrcise1 Given an array of integers, removing duplicate elements and creating an array whose elements are unique.
// (Eg: [1,2,2,3,4,4,4,5,6] => [1,2,3,4,5,6]). Find 3-4 ways to solve this.
//Cách 1: Sử dụng set trong js để thực hiện
// Time Complexity:
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
  const result = Object.values(hashTable);
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
function removeDuplicateNumv3(array) {
  return array.reduce((previousArr, currentvalue) => {
    if (previousArr.indexOf(currentvalue) === -1) {
      previousArr.push(currentvalue);
    }
    return previousArr;
  }, []);
}
// console.log(removeDuplicateNumv3([1, 2, 3, 41, 1, 2, 3, 4, 5, 6]));

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

// console.log(removeDuplicateNumv4([1, 1, 2, 1, 3, 4, 3, 5, 5, 6, 7]));

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

// console.log(findMostRepetitionElement([]));
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
} */

const fs = require("fs");
class DecisionNode {
  constructor(question, answers) {
    const questionObj = {
      specifyFlag: question.code,
      content: question.content,
    };
    const answersObj = [];
    for (let i = 0; i < answers.length; i++) {
      const temp = {
        specifyFlag: answers[i] ? questionObj.specifyFlag + i : "",
        content: answers[i],
        next: null,
      };
      answersObj[i] = temp;
    }
    this.question = questionObj;
    this.answers = answersObj;
  }

  preOrder(root) {
    if (root === null) {
      return;
    }
    console.log(root.question);
    console.log(root.answers);
    for (const answer of root.answers) {
      this.preOrder(answer.next);
    }
  }

  add(root, newNode, level = 1) {
    if (root === null) {
      return newNode;
    }
    for (const answer of root.answers) {
      //find right path of answer to add new node
      if (answer.specifyFlag[level] === newNode.question.specifyFlag[level]) {
        //question.specifyFlag.startWith(newNode.answer.specifyFlag)
        answer.next = this.add(answer.next, newNode, ++level);
        break;
      }
    }
    return root;
  }

  edit(root, editedNode) {
    let head = root;
    while (head !== null) {
      const preNode = head;
      for (const answer of head.answers) {
        if (editedNode.question.specifyFlag.startsWith(answer.specifyFlag)) {
          if (answer.specifyFlag === editedNode.question.specifyFlag) {
            //if answer.next does not contain any question
            const oldNode = answer.next;
            if (oldNode === null) {
              answer.next = editedNode;
            }
            //attach every sub question in to new Node
            console.log(editedNode.answers.length);
            for (let i = 0; i < editedNode.answers.length; i++) {
              if (
                oldNode.answers[i] &&
                oldNode.answers[i].specifyFlag ===
                  editedNode.answers[i].specifyFlag
              ) {
                editedNode.answers[i].next = oldNode.answers[i].next;
              }
            }
            // console.log(oldNode, editedNode);
            // attach new edited node to tree
            answer.next = editedNode;
          } else {
            head = answer.next;
          }
          break;
        }
      }
      //check of specifyFlag is valid
      if (head === preNode) {
        break;
      }
    }
  }

  delete(root, specifyFlag) {
    let head = root;
    while (head !== null) {
      const preNode = head;
      for (const answer of head.answers) {
        if (specifyFlag.startsWith(answer.specifyFlag)) {
          if (answer.specifyFlag === specifyFlag) {
            answer.next = null;
          } else {
            head = answer.next;
          }
          break;
        }
      }
      if (head === preNode) {
        break;
      }
    }
  }
}

function writeFileISON(obj) {
  return fs.writeFile("test.json", JSON.stringify(obj), function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("Data written successfully!");
  });
}

function testDecisionTree() {
  let decisionNode = new DecisionNode(
    {
      code: "0",
      content:
        "Let's start learning path, please, self assessment your javascript's level",
    },
    ["Know nothing", "Beginner", "Intermediate", "Advanced"]
  );

  const nothing1 = new DecisionNode(
    { code: "00", content: "Let's start our basic learning path" },
    ["Ok", "Cancel", "Explain basic learning path ?"]
  );
  const nothing2 = new DecisionNode(
    { code: "000", content: "Did you pass basic learning path?" },
    ["No, I didn't", "I am finished"]
  );
  const beginner1 = new DecisionNode(
    { code: "01", content: "Would you start basic learning path?" },
    ["OK", "NO", "Let switch to Intermediate learning path"]
  );
  const beginner2 = new DecisionNode(
    {
      code: "011",
      content: "Would you like to take a small test to check your knowledge?",
    },
    ["No", "Yes", "Why i have to?"]
  );

  // console.log("Add New Node ===========================================");
  // decisionNode.add(decisionNode, nothing1);
  // decisionNode.add(decisionNode, nothing2);
  // decisionNode.add(decisionNode, beginner1);
  // decisionNode.add(decisionNode, beginner2);
  //decisionNode.preOrder(decisionNode);
  //writeFileISON(decisionNode);
  // console.log("Delete Node ===========================================");
  const editedNode = new DecisionNode(
    {
      code: "01",
      content: "Would you start beginner learning path?",
    },
    ["OK", "No"]
  );

  // decisionNode.edit(decisionNode, editedNode);
  // writeFileISON(decisionNode);
  // console.log("Delete Node ===========================================");
  // decisionNode.delete(decisionNode, "01");
  // writeFileISON(decisionNode);
}

testDecisionTree();
