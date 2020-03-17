// for(i=1;i<=5;i++){
//     var str='';
//     for(j=1;j<=i;j++){
//         str=str.concat(' ',1);
//     }
//     console.log(str);  
// }



for(i=1;i<=5;i++){
    let str=''; 
    for(j=1;j<=5;j++){
        if(i+j>5)
        str=str.concat('1');
        else
        str= str.concat(' ');
    }

    // for(k=1;k<=i;k++){
    //     str=str.concat('',1);    
    // }
    console.log(str);  
   }
  