define (["dojo"], function(query,onclick,toggleClass){
    return{
        
        toggle: function(makeAccordion, thisClass){
            makeAccordion.toggleClass(thisClass);
        },
        accordion : function(triggerClass,makeAccordion,thisClass){
            var trigger=dojo.query(triggerClass);
            trigger.onclick.toggle;
                //console.log(dojo.query(this).parent('.item'));
        }
    };
});