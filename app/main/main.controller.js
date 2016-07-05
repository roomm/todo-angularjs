angular.module('todoAjsApp')
  .controller('mainController', function ($scope, localStorageService) {
    var vm = this;
    vm.stgKey = "todos";

    vm.dpPopup = {
      opened: false
    };
    vm.dateOptions = {
      formatYear: 'yyyy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };

    vm.todos = getTodos();
    $scope.$watch('vm.todos', function () {
      localStorageService.set(vm.stgKey, vm.todos);
      vm.todos = getTodos();
    }, true);


    vm.openDatePicker = openDatePicker;
    vm.newTodo = newTodo;
    vm.finishTodo = finishTodo;
    vm.deleteTodo = deleteTodo;


    function openDatePicker() {
      vm.dpPopup.opened = true;
    }

    function getTodos() {
      var todos = localStorageService.get(vm.stgKey);
      if (todos == null) {
        return [];
      }

      for (var i in todos) {
        var todo = todos[i];
        todo.daysToComplete = calcDaysToComplete(todo.due_date);
      }
      return todos;
    }


    function calcDaysToComplete(date) {
      // Workaround
      var now = new Date().setHours(0);
      var future =new Date(Date.parse(date)).setHours(0);
      return Math.round((  future - now) / (1000 * 60 * 60 * 24));
    }

    function newTodo() {
      var txt = vm.new_todo;
      var date = vm.todo_date;


      vm.todos.push({
        "name": txt, "done": false, "due_date": date.toString()
      });
      vm.new_todo = undefined;
      vm.todo_date = undefined;
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
