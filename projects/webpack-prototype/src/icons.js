function iconsFunc(arr, tag, object){
    const numArr = [];
    numArr.length = 44;
   for(let i=0;i<numArr.length;i++){
       for (let j=0;j<arr.length;j++) {
           if(i+1 === object.WeatherIcon) {
               tag.setAttribute('src', arr[j]);
           }
       }
   }
}

export { iconsFunc };