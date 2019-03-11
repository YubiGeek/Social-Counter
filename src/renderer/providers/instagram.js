var Instagram = require('instagram-node');
var config = require('../../../config');

var ig = new Instagram.instagram();

ig.use({
    access_token: config.instagram.access_token
});

export default function (callback) {
    return new Promise((resolve, reject) => {
        ig.user(config.instagram.user_id, (error, result, remaining, limit) => {
            if (!error && result && result.counts) {
                resolve(result.counts.followed_by);
            } else {
                reject(error);
            }
        });
    })
};
