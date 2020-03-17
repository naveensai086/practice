
for(i=1,val=10;i<=val;i++){
    let str=''; 
    for(j=1;j<=val-i;j++){
     str=str.concat(' ');
           }
    for(k=1;k<=i;k++){
        str=str.concat(' ',1);    
    }
    console.log(str);  
   }