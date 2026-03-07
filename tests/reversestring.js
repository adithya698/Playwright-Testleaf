let academyName = "Testleaf"
let reverse = ""

for(let i=academyName.length-1;i>=0;i--){
   reverse= reverse+academyName.charAt(i)
   }

if(academyName==reverse)
{
    console.log("Academy Name is Palindrome  : " + academyName )
}
else{
    
    console.log("Academy Name is not a Palindrome : " + academyName )
}

