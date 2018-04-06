catalogEditor.directive('textEdit', [

    function () {
        return {
            restrict: 'AE',
            scope: {
                myObject: '=',
                myValue: '=',
                myKey:'='
            },
            template: `
                    <a 
                        ng-if="!txt.editMode && txt.myValue" 
                        class="text-primary" 
                        href="" 
                        ng-click="txt.openeditor()" 
                        ng-model="txt.myValue">
                        {{txt.myValue}}
                    </a>
                    <a 
                        ng-if="!txt.editMode && !txt.myValue" 
                        class="text-primary font-italic" 
                        href="" 
                        ng-click="txt.openeditor()">
                        empty
                    </a>
                    <div ng-if="txt.editMode" class="input-group input-group-sm">
                      <input type="text" class="form-control" placeholder="Enter a value for this field" ng-model="txt.myValue">
                      <div class="input-group-append">
                        <button data-toggle="tooltip" 
                            data-placement="left" 
                            class="btn btn-outline-success" 
                            type="button" 
                            title="Tooltip on left" 
                            ng-click="txt.save()">
                                <i class="far fa-check-circle"></i>
                        </button>
                        <button data-toggle="tooltip" 
                            data-placement="left" 
                            class="btn btn-outline-danger" 
                            type="button" 
                            title="Tooltip on left" 
                            ng-click="txt.cancel()" >
                                <i class="far fa-times-circle"></i>
                        </button>
                      </div>
                    </div>
                  `,
            controller: 'textEditController as txt'
            
        }
    }
])

//2 places