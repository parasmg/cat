catalogEditor.controller('listEditController', ['$scope',
function ($scope) {

    this.myObject = $scope.myObject;

    var myList = this.myObject.list;

    var newListItem = {
        cerner_value_text: null, //this will always remain null
        field_value_is_hidden: null,
        field_value_is_overridden: null,
        list_display_sequence: null,
        list_id: this.myObject.list_id, //the current list being edited
        override_value_text: null,      //this is where the value will be saved
        value_id: null
    };
    

    this.myKey = $scope.myKey;
    this.myValue = $scope.myValue;
    this.editMode = false;

    
    this.openeditor = function () {
        this.editMode = true;
        console.log("Open List Editor: ", myList);
    };

    this.addItem = function (value) {
        this.newField.list.push(value);
    };


    this.hideItem = function (value_id) {

    };

    this.overrideField = function () {

    };

    this.save = function () {
        this.editMode = false;
    }

    this.cancel = function () {
        this.myValue = this.old;
        this.editMode = false;
    }

}])