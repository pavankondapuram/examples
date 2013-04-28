require(["demo/myModule"],function(myModule){
   myModule.setText("greeting","<span style='font-size:180px;'>TEST</span>");
   
   setTimeout(function() {
       var oldText='greeting';
       myModule.restoreText(oldText);
   }, 3000);
});