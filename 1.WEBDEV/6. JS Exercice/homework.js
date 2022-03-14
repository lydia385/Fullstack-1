function remove(arr,elm){
    var a=[];
    var j=0;
  for(var i=0;i<arr.length;i++){
      if(elm!=arr[i]){
          a[j]=arr[i] ;
          j++; 
         }
  }
  return a;
}

// Remove Duplicates from Sorted Array( no predefined functions allowed)


function Duplicate(arr) {
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i < arr.length - 1 && arr[i] == arr[i + 1]) {
            continue;
        }
        arr[j] = arr[i];
        j++;
    }
    arr.length = j;
    console.log(arr);
   
 }
