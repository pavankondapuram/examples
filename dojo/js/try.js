var dojoConfig= {
	baseUrl: "/js/",
	tlmSiblingOfDojo: false,
	packages: [
		{name:"dojo", location:"lib/dojo"},
		{name:"dijit", location:"lib/dijit"},
		{name:"dojox", location:"lib/dojox"},
		{name:"my", location:"my", main:"app"}
	]
};

require(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin"], function(declare, _WidgetBase, _TemplatedMixin){});

require({
	baseUrl:"/js/",
	packages:[
		{name:"dojo",location:"//ajax.googleapis.com/ajax/libs/dojo/1.7.1/"},
		{name:"my",location:"my"}
	]
},["my,app"]);




define("tui/calendar",['dojo/dom','dojo/domReady!'], function(dom){
	var oldText = {};
	return{
		setText: function(id, text){
			var node=dom.byId(id);
			oldText[id]=node.innerHTML;
			node.innerHTML=text;
			console.log(node.innerHTML);
		},
		restoreText: function(id){
			var node=dom.byId(id);
			node.innerHTML=oldText[id];
			delete oldText[id];
		}
	};
});

require(['tui/calendar'], function(myModule){
	myModule.setText('greeting','Hello Dojo!');
	setTimeout(function(){
		myModule.restoreText('greeting');
	}, 3000);
});