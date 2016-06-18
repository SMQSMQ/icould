var myTodo = angular.module('todolist',[]);
myTodo.controller('main',['$scope',function($scope){
  if(localStorage.todo) {
    $scope.lists = angular.fromJson(localStorage.todo);
  }else{
    $scope.lists = [];
  }
  $scope.saveData = function(){
    localStorage.todo = angular.toJson(this.lists);
  }
  $scope.current = null;
  $scope.add = function(){
    var len = $scope.lists.length;
    var color = ['red','orange','yellow','green','blue','pink','purple'];
    var id = (len == 0)?1001:(Math.max.apply(null,$scope.lists.map(function(v,i){
      return v.id;
    })) + 1)
    var list = {id:id,
      theam: color[len%7],
      name:'清单'+(len+1),
      shixiang:[
        {name: '吃饭',state: true},
        {name: '睡觉',state: false},
        {name: '写代码',state: true},
        {name: '玩游戏',state: false}
      ]
    }
    $scope.current = list;
    $scope.lists.push(list)
    this.saveData()
  }

  $scope.setCurrent = function(index){
    // console.log(index)
    $scope.current = $scope.lists[index];
  }

  $scope.deleteList = function(id){
    $scope.lists = this.lists.filter(function(v,i){
      return v.id !== id;
    })
    this.saveDate()
  }

}])
