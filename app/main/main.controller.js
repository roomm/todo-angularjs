angular.module('todoAjsApp')
  .controller('mainController', function ($scope, $http) {
    var vm = this;

    vm.todos = [{"name": "TODO1", "done": false}, {"name": "TODO2", "done": false}, {"name": "TODO3", "done": false}]

    vm.newTodo = newTodo;
    vm.finishTodo = finishTodo;
    vm.deleteTodo = deleteTodo;

    function newTodo() {
      var txt = vm.new_todo;
      vm.todos.push({"name": txt, "done": false});
      vm.new_todo = undefined;
    }

    function finishTodo(todo) {
      console.log("fonoshed", todo);
      if (todo !== undefined) {
        todo.done = true;
      }
    }

    function deleteTodo(todo) {
      var index = vm.todos.indexOf(todo);
      vm.todos.splice(index, 1);
    }
  });
