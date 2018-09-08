console.log("hello world!");
var count = 3;
setTimeInterval(3000, function(){
  if(count <= 10){
    console.log(count + "second has been passed");
  }
  count+=3;
});
