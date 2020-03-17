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
    id: 3,
    name: "sai"
  },
  {
    id: 4,
    name: "madhu"
  },
  {
    id: 5,
    name: "sowjanya"
  },
  {
    id: 6,
    name: "kumar"
  }
];

var arr2 = [
  {
    id: 1,
    city: "vizag"
  },
  {
    id: 2,
    city: "hyd"
  },
  {
    id: 4,
    city: "chennai"
  },
  {
    id: 7,
    city: "vizag"
  }
];

arr2.map(a2 => {
  var count = 0;
  arr1.map(a1 => {
    if (a2.id == a1.id) {
      a2.name = a1.name;
      count++;
    }
  });
  if (count == 0) {
    a2.name = "name not exist ";
  }
});
console.log(arr2);
