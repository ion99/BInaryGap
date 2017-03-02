function solution(N) {
  let binary = (N).toString(2);
  let result = 0;
  let k;
  for (let i = 0; i < binary.length; i++){
    k = 0;
    while(binary[i] === "0" && binary[i+1]){
      k++;
      i++;
    } 
    result = Math.max(result,k)
  }
  return result;
}

//solution(529);