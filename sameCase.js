function sameCase(a, b){
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 
  
  if (lowerCase.includes(a) && lowerCase.includes(b)) return 1;
  if (upperCase.includes(a) && upperCase.includes(b)) return 1;
  if (!upperCase.includes(a) && !lowerCase.includes(a)) return -1;
  if (!upperCase.includes(b) && !lowerCase.includes(b)) return -1;
  
  return 0;
}

function sameCase2(a, b){
 if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
    return -1
  }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
      return 1
  }else{
    return 0
  }
}