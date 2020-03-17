// for(i=5,val=5;i>=1;i--){
//     var str=' ';
//     for(j=1;j<=val-i;j++){
//         str=str.concat(' ');
//               }
//        for(k=1;k<=i;k++){
//            str=str.concat(' ',k*val);    
//        }
//        console.log(str);  
//     }


    // for(i=5,val=5;i>=1;i--){
    //     var str=' ';
    //     for(j=1;j<=val-i;j++){
    //         str=str.concat(' ');
    //               }
    //        for(k=5;k>=val-i+1;k--){
    //            str=str.concat(' ',val*k);    
    //        }
    //        console.log(str);  
    //     }


        // for(i=5,val=5;i>=1;i--){
        //     var str=' ';
        //     for(j=1;j<=val-i;j++){
        //         str=str.concat('0');
        //                }
        //        for(k=5;k>=val-i+1;k--){
        //            str=str.concat(' *');    
        //        }
        //        console.log(str);  
        //     }

        var b='{ "name":"John", "age":30, "city":"New York"}';
        var a ={
            "name":"naveen",
            "loc":"bhimavaram"
        }
        console.log((JSON.stringify(a)));