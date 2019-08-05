function icons(arr, tag, object){
    const numArr = [];
    numArr.length = 44;
   for(i=0;i<numArr.length;i++){
       for (j=0;j<arr.length;j++) {
           if(i+1 === object.WeatherIcon) {
               tag.setAttribute('src', arr[j]);
           }
       }
   }
}