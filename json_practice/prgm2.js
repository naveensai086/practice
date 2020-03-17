var myObj= {
    "k1":"empId",
    "k2": "FirstName",
    "k3": "LastName",
    "k4":"fullName",
    "k5":"EmailId",
    
}

for(x in myObj){
    let temp = myObj[x];
    //console.log(typeof(temp));
     var arr = temp.split(/(?=[A-Z])/);
     var p = arr[0]+'_'+arr[1];
     console.log(p);
}
