var emp = [{
    "name": "prasad",
    "id":  101
},
{
    "name": "jagan",
    "id":  102,
    "parent":101
},
{
    "name": "chandana",
    "id":  103, 
     "parent":101
   
},
{
    "name": "kumar",
    "id":  104,
    "parent":103
},
{
    "name": "sowjanya",
    "id":  105,
    "parent":102
}
]

var output=[];
var children = [];
for(i=0;i<emp.length;i++){
    if(emp[i].parent== undefined ){
        output.push(emp[i]);
    }
    else{
    for(j=i+1;j<emp.length;j++){
         
         if(emp[i].id == emp[j].parent){

            output.push(emp[i])
        }
    }
    for(k=i+1;k<emp.length;k++){
         
        if(emp[k].id != emp[i].parent){

            children.push(emp[k])
       }
   }
     
       

    }
}

console.log(output);























