catalogEditor.factory('AppSupport', ['AUTH_EVENT', '$log',

function (AUTH_EVENT, $log) {
    return {
        mark: function (name) {
            performance.mark(name);
        }
    }
}])