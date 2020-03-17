

var obj = [
	{
		"x1": "fghj",
		"y1": "fghjkl",
		"x2": "aa",
		"y2": "bb"
	},
	{
		"a1": "smxmxm",
		"b1": "gcfvhbjknl",
		"a2": "vbhjbbj",
		"b2": "sjkdnn"
	},
	{
		"c1": "sjbnkn",
		"d1": "gvhbjknlm",
		"c2": "fcgvhbjnk",
		"d2": "gvhbjkn"
	}
]

var final=[];
var list=[]
for(x in obj ){
    var data={}
    var key = Object.keys(obj[x]);
    let obj1 = {}; 
    // console.log(key);
     for(y=0;y<key.length;y++){
        for(z=y+1;z<key.length;z++){
            var f = key[y];   var s = key[z];
            if(f.slice(f.length-1)== s.slice(s.length-1)){
               // a=f.charAt(0);  b=s.charAt(0);
                let keyOne = f[0], keyTwo = s[0];
                obj1[keyOne] = obj[x][f]; 
                obj1[keyTwo] = obj[x][s];
               // console.log(s)
                list.push(obj1);
                obj1 = {};
            }
           
        }
      
     }
     data.groupId= x+1
     data.list=list
     list=[];
    final.push(data)
}

 console.log(JSON.stringify(final));
// console.log(final);


