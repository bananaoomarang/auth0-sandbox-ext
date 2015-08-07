var jwt = require('jsonwebtoken');

module.exports = function (ctx, done) {
    if(!ctx.data.token) done('Must pass `token` to verify');

    var secret = new Buffer(ctx.data.CLIENT_SECRET, 'base64');

    jwt.verify(ctx.data.token, secret, function (err, user_payload) {
        if (err) return done(err);

        done(null, user_payload);
    });
};
