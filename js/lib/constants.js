catalogEditor.constant('AUTH_EVENT', {
    'loginSuccess': {
        'code': 'auth-login-success',
        'text': 'You have successfully logged in'
    },
    'loginFailure': {
        'code': 'auth-login-failure',
        'text': 'The information you entered in incorrect'
    },                
    'logoutSuccess': {
        'code': 'auth-logout-success',
        'text': 'You have been logged out'
    },       
    'sessionTimeout': {
        'code': 'auth-session-timeout',
        'text': 'Your login session has expired. Please log in again'
    },
    'loginInProgress': {
        'code': 'auth-in-progress',
        'text': 'Checking the information you provided'
    }
    
});

catalogEditor.constant('USER', {
    'admin':'user-admin',
    'editor':'user-editor',
    'viewer':'user-viewer'
});

catalogEditor.constant('FIELD_TYPE', {
    'text': 1,
    'list': 2,
    'rich-text': 3,
    'h-list': 4
});