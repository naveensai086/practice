for(i=1;i<=5;i++){
    var str=' ';
    for(j=5;j>i;j--){
      
        str=str.concat(' ');
              }
       for(k=1;k<=(i*2)-1;k++){
           if(k==1||k==(i*2)-1){
            str=str.concat(' *');   
           }
           else{
            str=str.concat(' ');
           }
            
       }
       console.log(str);
    }
      
       for(i=4;i>=1;i--){
        var ptr=' ';
           for(j=4;j>=i;j--){
            ptr=ptr.concat(' ');
           }
      
           for(k=1;k<=(i*2)-1;k++){
            if(k==1||k==(i*2)-1){
            ptr=ptr.concat(' *');   
            }
            else{
             ptr=ptr.concat(' ');
            }  
        }
         console.log(ptr);
        }
      
   
