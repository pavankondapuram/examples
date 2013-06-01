
function Foo(){
  this.name="foo";  
}

Foo.prototype.sayHello= function(){
    alert(this.name);
};

var myFoo= new Foo();

myFoo.sayHello();