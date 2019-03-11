const Twitter = require('twitter');
const config = require('../../../config');

const client = new Twitter({
    consumer_key: config.twitter.consumer_key,
    consumer_secret: config.twitter.consumer_secret,
    access_token_key: config.twitter.access_token_key,
    access_token_secret: config.twitter.access_token_secret
});

export default function (callback) {
    return new Promise((resolve, reject) => {
        client.get('account/verify_credentials', {}, (error, data, response) => {
            if (!error && data && data.followers_count) {
                resolve(data.followers_count);
            } else {
                reject(error);
            }
        });
    })
};
