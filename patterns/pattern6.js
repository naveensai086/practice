// var a = ["1111", "2222", "3333", "4444", "5555", "6666", "7777"];
// var b = [], c = [];
// function demo(x) {
//     var temp = a.length;
//     if (x % 2 != 0) {
//         a.forEach((num, index) => {
//             if (index % 2 == 0) {
//                 b.push(num);
//             }
//             else {
//                 c.push(num)
//             }
//         });
//     }
//     var d = c.reverse();
//     console.log(b.concat(d));
// }

// demo(1);

// function getmarks() {
//   setTimeout(() => {
//     const marks = [388, 243, 443, 387];
//     console.log(marks);
//     setTimeout(
//       mark => {
//         const student = { name: "naveen", age: 22 };
//         console.log(`${student.name} : ${mark}`);
//         setTimeout(
//           mark => {
//             const student2 = { name: "madhu", age: 27 };
//             console.log(
//               `name ${student2.name} , age ${student2.age} , marks : ${mark}`
//             );
//           },
//           1500,
//           marks[1]
//         );
//       },
//       1500,
//       marks[2]
//     );
//   }, 1500);
// }
// getmarks();
// var fs = require("fs");
// var data = fs.readFileSync("input.txt");

// console.log(data.toString());
// console.log("Program Ended");

// var fs = require("fs");

// fs.readFile("input.txt", function(err, data) {
//   if (err) return console.error(err);
//   console.log(data.toString());
// });

// console.log("Program Ended");

const getMarks = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([267, 476, 345, 543]);
  }, 1500);
});

const student1 = mark => {
  return new Promise((resolve, reject) => {
    setTimeout(
      mark => {
        const student1 = { name: "madhu", age: 27 };
        resolve(
          `name ${student1.name} , age ${student1.age} , marks : ${mark}`
        );
      },
      1500,
      mark
    );
  });
};

const student2 = mark => {
  return new Promise((resolve, reject) => {
    setTimeout(
      mark => {
        const student = { name: "naveen", age: 22 };
        resolve(`${student.name} : ${mark}`);
      },
      1500,
      mark
    );
  });
};

getMarks
  .then(marks => {
    console.log(marks);
    return student1(marks[2]);
  })
  .then(student1 => {
    console.log(student1);
    return student2(435);
  })
  .then(student2 => {
    console.log(student2);
  })
  .catch(err => {
    console.log(err);
  });
