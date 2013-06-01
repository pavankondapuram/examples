define (["dojo","dojo/query", "dojo/NodeList-dom","dojo/dom-class", "dojo/NodeList-traverse","dojo/NodeList-fx"], function(query,onclick){
    return{
      
      accordionOn: function(makeAccordion,thisClass){
        dojo.toggleClass(dojo.query(this).closest(makeAccordion)[0], thisClass);
      },

      accordion : function(triggerClass,makeAccordion,thisClass){
            var trigger=dojo.query(triggerClass);
            trigger.onclick.accordionOn(makeAccordion,thisClass);
      },


        /*accordion : function(triggerClass,makeAccordion,thisClass){
            var trigger=dojo.query(triggerClass);
            trigger.onclick(function(){
                console.log(dojo.query(this).closest(".item-content").clientHeight)
                dojo.toggleClass(dojo.query(this).closest(makeAccordion)[0], thisClass);
            });
        },*/

        /*growDiv : function (setHieghtFor) {
            var growDiv = dojo.query(setHieghtFor);
            if (growDiv.clientHeight) {
              growDiv.style.height = 0;
            } else {
              var wrapper = document.querySelector('.measuringWrapper');
              growDiv.style.height = wrapper.clientHeight + "px";
            }
          }*/
    };
});