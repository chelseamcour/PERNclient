let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3002/';
        break;
    case 'cmc-blue-lootlog-client.herokuapp.com':
        APIURL = 'https://cc-blue-lootlog-server.herokuapp.com'
}

export default APIURL;