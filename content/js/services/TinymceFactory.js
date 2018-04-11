catalogEditor.factory('TinymceFactory', [
    function () {
        return function (options) {
            return tinymce.init(options);
        }
    }
])