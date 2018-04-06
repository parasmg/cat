catalogEditor.controller('textEditController', ['$scope',

function ($scope) {
    
    this.myObject = $scope.myObject;
    this.myKey = $scope.myKey;
    this.myValue = $scope.myValue;

    this.editMode = false;
    this.old = $scope.myValue;
    
    this.openeditor = function(){
        this.editMode = true;    
        console.log("EDIT MODE:",this.editMode);
    };

    this.save = function () {

        this.editMode = false;
        this.old = this.myValue;
        console.log("Model:",this.myValue);

    }

    this.cancel = function() {
        console.log("Old Value:",this.old);
        console.log("New Value:",this.myValue);
        this.myValue = this.old;
        this.editMode = false;
    }

    //console.log(this);
}])