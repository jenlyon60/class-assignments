(function () {
  'use strict';
  angular.module ('LunchCheck',[])
    .controller ('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope) {
      $scope.outputMessage = "";
      $scope.processLunchItems = function () {
    //make a copy of the value passed in on the scope
        var inputLunchItems = $scope.newLunchItems.trim();
    //check for the nothing entered case, ie the string is undefined.
    //if so, assign a warning message to the appropriate scope variable and return
        if ((inputLunchItems === undefined) || (inputLunchItems.length === 0)) {
          $scope.outputMessage = "Please Enter Data First!";
          return;
        }
    //so we know that at least one item and possibly more were entered in the text box
    //so lets get a count of the number of items
    // if there's 3 or less items returned in the array (checked by using the length method)
    // then save the "Enjoy!" message
    // otherwise save the "Too Much!" message to the scope
        var itemsArray = inputLunchItems.split (",");
        if (itemsArray.length > 3) {
          $scope.outputMessage = "Too much!";
        } else {
          $scope.outputMessage = "Enjoy!";
        }
      }
    };
  })();
