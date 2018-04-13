catalogEditor.controller('richEditController', ['$scope', '$sce', '$timeout',
function ($scope, $sce, $timeout) {

    this.myObject = $scope.myObject;
    this.myKey = $scope.myKey;
    this.myValue = $scope.myValue;
    this.editMode = false;
    this.old = $scope.myValue;

    this.updateHtml = function (src) {
        this.tinymceHtml = $sce.trustAsResourceUrl(src);
    }

    $scope.tinymceOptions = {
        setup: function (editor) {
            $timeout(function () {
                editor.focus();
            }, 200)
        },
        plugins: ['advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table contextmenu paste code',
        ],
        toolbar: 'insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat code |',
        statusbar: false,
        menubar: false,
        height: 250,
        anchor_bottom: false,
        anchor_top: false
    };
    
    this.getContent = function () {
        
    };

    this.openeditor = function () {
        this.editMode = true;
        console.log("EDIT MODE:", this.editMode);
    };

    this.save = function () {
        this.editMode = false;
        console.log('Editor content:', this.tinymceModel);
        this.old = this.myValue;
    }

    this.cancel = function () {
        this.myValue = this.old;
        this.editMode = false;
    }

  }
])﻿
