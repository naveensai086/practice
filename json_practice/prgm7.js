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
    id: 99,
    name: "madhu"
  },
  {
    id: 99,
    name: "dddd"
  },
  {
    id: 5,
    name: "aaaaaaaa"
  },
  {
    id: 27,
    name: "zzzzzzzzz"
  }
];

var arr2 = [];
var unique = [];

arr1.forEach(e => {
  arr2.push(e.id);
});
unique = Array.from(new Set(arr2));
unique.sort((a, b) => a - b);
console.log(unique);
unique.map(id => {
  let result = [];
  arr1.map(ele => {
    ele.id == id ? result.push(ele) : "";
    if (arr1.indexOf(ele) === arr1.length - 1) {
      let obj = [result];
      console.log(`A${id} : `, obj);
    }
  });
});
