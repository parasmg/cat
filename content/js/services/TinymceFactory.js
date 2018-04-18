catalogEditor.factory('TinymceFactory', [
    function () {
        return function (options) {
            console.log("Initializing tinymce");
            return tinymce.init(options);
        }
    }
])