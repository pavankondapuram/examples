/**
 * @author pavan
 */



/*
function apple(color,food){
	this.color=color;
	this.type=food;
	this.info=information;
}

function information(){
	return 'this is a'+' '+this.color+' '+this.type+' ';
}

var apple=new apple('red','fruit');
alert(apple.info());
*/


// TYPE 2

/*
function apple(type,color,purpose){
	this.type=type;
	this.color=color;
	this.purpose=purpose;
	this.getInfo= function(){
		return this.color+' '+this.type+' '+'for '+this.purpose;
	}
}
var apple = new apple('fruit','red','eating');
alert(apple.getInfo());*/


//type 3

var apple = {
	color:'red',
	type:'fruit',
	purpose:'eat',
	getInfo:function (){
		return 'apple is a '+this.color+' '+this.type+' to '+this.purpose;
	}	
}

alert(apple.getInfo());


