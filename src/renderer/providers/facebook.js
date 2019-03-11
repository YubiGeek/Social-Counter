var FB = require('fb');
var config = require('../../../config');

FB.options({
    version: 'v2.9'
});

export default function (callback) {
    return new Promise((resolve, reject) => {
        FB.api('me', {
            fields: ['id', 'name', 'fan_count'],
            access_token: config.facebook.access_token
        }, function (result) {
            if (result && result.fan_count) {
                resolve(result.fan_count);
            } else {
                reject(result);
            }
        });
    })
};
