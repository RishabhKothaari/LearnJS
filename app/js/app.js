var app = angular.module('learnJS',['ngMaterial'])

app.controller('mainController',['$scope',function($scope){
$scope.message = 'Woww!!!'
$scope.messages = [
      {
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      }
    ];
$scope.exercises = [
  {
    name:'Introduction',
    code:'introduction'
  },
  {
    name:'Variables',
    code:'variables'
  },
  {
    name:'Strings',
    code:'strings'
  },
  {
    name:'String Length',
    code:'string_length'
  },
  {
    name:'Revising Strings',
    code:'revising_strings'
  },
  {
    name:'Numbers',
    code:'numbers'
  },
  {
    name:'Rounding Numbers',
    code:'rounding_numbers'
  },
  {
    name:'Number To String',
    code:'number_to_string'
  },
  {
    name:'If Statement',
    code:'if_statement'
  },
  {
    name:'For Loop',
    code:'for_loop'
  },
  {
    name:'Arrays',
    code:'arrays'
  },
  {
    name:'Array Filtering',
    code:'array_filtering'
  },
  {
    name:'Accessing Array Values',
    code:'accessing_array_values'
  },
  {
    name:'Looping Through Arrays',
    code:'looping_through_arrays'
  },
  {
    name:'Objects',
    code:'objects'
  },
  {
    name:'Object Properties',
    code:'object_properties'
  },
  {
    name:'Functions',
    code:'functions'
  },
  {
    name:'Function Arguments',
    code:'function_arguments'
  },
  {
    name:'Scope',
    code:'scope'
  }
]
$scope.loadExercise = function(exercise) {
  var loadExercise = exercise;
  console.log('exercise')
  console.log(loadExercise)
}
}])
