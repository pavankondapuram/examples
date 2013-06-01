//#1

function apple(type){
     this.type=type;
     this.color="red";
     this.info=appleInfo;
}
function appleInfo(){
    return this.color + " " + this.type + " " + "is apple";
}
