var myObj = [{
    "name": "John",
    // "sub1": Math.floor(Math.random() * 101),
    // "sub2":  Math.floor(Math.random() * 101),
    // "sub3":  Math.floor(Math.random() * 101),
    // "percentage":""
},
{
    "name": "madhu",
    // "sub1":  Math.floor(Math.random() * 101),
    // "sub2":  Math.floor(Math.random() * 101),
    // "sub3":  Math.floor(Math.random() * 101),
    // "percentage":""
},
{
    "name": "sai",
    // "sub1":  Math.floor(Math.random() * 101),
    // "sub2":  Math.floor(Math.random() * 101),
    // "sub3":  Math.floor(Math.random() * 101),
    // "percentage":""
},
{
    "name": "mahesh",
    // "sub1":  Math.floor(Math.random() * 101),
    // "sub2":  Math.floor(Math.random() * 101),
    // "sub3":  Math.floor(Math.random() * 101),
    // "percentage":""
},
{
    "name": "sowjanya",
    // "sub1":  Math.floor(Math.random() * 101),
    // "sub2":  Math.floor(Math.random() * 101),
    // "sub3":  Math.floor(Math.random() * 101),
    // "percentage":""
}
]

myObj.forEach(ele=>{
    ele.sub1 = Math.floor(Math.random() * 101);
    ele.sub2 = Math.floor(Math.random() * 101);
    ele.sub3 = Math.floor(Math.random() * 101);
})

var highest=0;
var lowest=1000;
for(x in myObj){
  
    let temp = myObj[x];
    var total =(temp.sub1+temp.sub2+temp.sub3)/3;
    var percentage = Math.round(total)
    temp.percentage=percentage;
    if( highest<total){
        highest=percentage;
    } 
    if(lowest>total) {
        lowest=percentage;
    }
     
    console.log('name = ',temp.name,' , percentage = ', temp.percentage);
}
console.log('highest percentage ',highest);
console.log('lowest percentage ',lowest);


