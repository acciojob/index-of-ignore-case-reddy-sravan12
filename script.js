function indexOfIgnoreCase(s1, s2) {
   let left=0
   for(let i=1;i<=s1.length;i++){
      const string=s1.slice(left,i)
      if(s2.length===string.length){
          if(s2===string){
              return left 
          }
      left++
      }
         if(s1[i]===" "){
          left=i+1
      }
   }
   return -1
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
