function TodoCtrl($scope) {

  $scope.todos = [
    { text: 'List Item 1', done: true },
    { text: 'List Item 2', done: false }
  ];

  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };


  $scope.addTodo = function () {
    $scope.todos.push({ text: $scope.formTodoText, done: false });
    $scope.formTodoText = '';
  };

  $scope.clearCompleted = function () {
    $scope.todos = _.filter($scope.todos, function (todo) {
      return !todo.done;
    });
  };
}