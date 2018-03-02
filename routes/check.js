var resp = require('./lib/resp.js');
var utils = require('./lib/utils.js');
var bugs = require('./models/bugs.js');

var query = utils.getQuery();
var page = query.page * 20 || 0;

var type = cache.get("type");
var content = cache.get("content");

if (!type) {
    res.json({ code: 500, error: '未选择类型' })
    return;
}

var result, count;
if (type === 'default') {
    count = bugs.count();
    result = bugs.find(page);
} else {
    count = bugs.count(type, content);
    result = bugs.find(page, type, content);
}

resp.render('./views/table.ejs', {
    page: 'result',
    result: result,
    count: count,
});
