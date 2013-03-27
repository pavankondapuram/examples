function todoCtrl($scope){

	$scope.todos=[{text:"first item",done:false},{text:'second item',done:false}];

	$scope.addTodo=function(){
		$scope.todos.push({text:$scope.newTodo,done:false});
		$scope.newTodo="";
	}

}