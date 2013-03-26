function todoCtrl($scope){

	$scope.todos=[{text:"Learn angular JS", done:false},{text:'build an app', done:false}];

	$scope.addTodo=function(){
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText="";
	};

	$scope.removeTodo=function(){
		$scope.todos=_.filter($scope.todos, function(todo){
			return !todo.done;
		})
	};
}