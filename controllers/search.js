var Bing = require('node-bing-api')({ accKey: "HIKnlZyc/EnQLA9oXo9U5HHm/JCNaQWQe2K+CJk7ejM" });

exports.query = function(req, res) {
    var search = req.query.search;
    if (!search) {
        res.send(_sendErrorResponse());
        return;
    }
    Bing.web(search, {
        top: 5,  // Number of results (max 50)
        skip: 3,   // Skip first 3 results
        options: ['DisableLocationDetection', 'EnableHighlighting']
    }, function(error, res2, body){
        if (error) {
            res.send(_sendErrorResponse(error));
        }
        res.send(_packageResponse(body));
    });
};

exports.display = function(req, res) {
    res.render('index', {title: 'api'});
};
var _packageResponse = function(payload) {
    var util = require('util');
    payload = util.inspect(payload.d.results, false, null);
    var response = '{ok: true, data: ' + payload + '}';
    return (response);
};
var _sendErrorResponse = function(error) {
    error = error || null;
    var response = "";
    if (error) {
        response = '{ok: false, err: ' + error + '}';
        return response;
    }
    response = '{ok: false, err: No search param sent}';
    return response;
};