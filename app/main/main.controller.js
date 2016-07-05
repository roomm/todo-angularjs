angular.module('todoAjsApp')
  .controller('mainController', function ($scope, localStorageService) {
    var vm = this;
    vm.stgKey = "todos";
    vm.todos = getTodos();

    $scope.$watch('vm.todos', function () {
      localStorageService.set(vm.stgKey, vm.todos);
    }, true);

    vm.newTodo = newTodo;
    vm.finishTodo = finishTodo;
    vm.deleteTodo = deleteTodo;

    function getTodos() {
      var todos = localStorageService.get(vm.stgKey);
      if (todos == null) {
        return [];
      }
      return todos;
    }

    function newTodo() {
      var txt = vm.new_todo;
      vm.todos.push({"name": txt, "done": false});
      vm.new_todo = undefined;
    }

    function finishTodo(todo) {
      if (todo !== undefined) {
        todo.done = true;
      }
    }

    function deleteTodo(todo) {
      var index = vm.todos.indexOf(todo);
      vm.todos.splice(index, 1);
    }
  });
