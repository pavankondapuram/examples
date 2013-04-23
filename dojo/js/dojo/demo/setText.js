require(["demo/myModule"],function(textSet){
    textSet.setText("greeting","hello dojo");
    
    setTimeout(function() {
        textSet.restoreText("greeting");
    }, 3000);
})