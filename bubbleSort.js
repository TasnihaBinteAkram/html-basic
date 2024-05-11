let arr=[10,5,2,8,7,89,72,34,54,98,12,33,24,45];
for(i=arr.length-1;i>=0;i--){
    for(j=0; j<=arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp
        }
        else continue;
    }
}
console.log(arr);