var arr1 = [
  {
    id: 1,
    name: "prasad"
  },
  {
    id: 2,
    name: "naveen"
  },
  {
    id: 1,
    name: "sai"
  },
  {
    id: 3,
    name: "madhu"
  },
  {
    id: 4,
    name: "sowjanya"
  },
  {
    id: 5,
    name: "naresh"
  },
  {
    id: 6,
    name: "bhanu"
  },
  {
    id: 9,
    name: "reshmi"
  },
  {
    id: 4,
    name: "lokesh"
  },
  {
    id: 7,
    name: "deepika"
  },
  {
    id: 11,
    name: "kavya"
  },
  {
    id: 12,
    name: "padma"
  },
  {
    id: 14,
    name: "rama"
  },
  {
    id: 16,
    name: "suresh"
  },
  {
    id: 19,
    name: "swathi"
  },
  {
    id: 13,
    name: "apple"
  },
  {
    id: 17,
    name: "sowmya"
  },
  {
    id: 11,
    name: "rajesh"
  },
  {
    id: 2,
    name: "rakesh"
  },
  {
    id: 4,
    name: "chaitanya"
  },
  {
    id: 2,
    name: "nikitha"
  },
  {
    id: 4,
    name: "krishna"
  }
];

var arr2 = [1, 2, 4, 11];
var result = [];
var result1 = [];

arr2.map(id => {
  arr1.find(ele => {
    ele.id == id ? result.push(ele) : result1.push(ele);
  });
});
console.log(result);
//console.log(result1);

// if (arr2.includes(item.id)){
//     result.push(item);
//     arr2.shift();
// }

// arr1.forEach((item) => {
//     if (item.id==ele) {
//         result.push(item);
//     }else
//     {
//         result1.push(item);
//     }

// })
