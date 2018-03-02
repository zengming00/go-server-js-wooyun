var db = require('./models/db.js');
var types = require('types');

var db = db.getConn();

function count(wtype, wcontent) {
    var ret;
    if (wtype) {
        ret = db.query("select count(*) from bugs where " + wtype + " like ?", wcontent);
    } else {
        ret = db.query('select count(*) from bugs');
    }

    if (ret.err) {
        throw ret.err;
    }
    var rows = ret.value;
    while (rows.next()) {
        var n = types.newInt();
        var err = rows.scan(n);
        if (err) {
            throw err;
        }
        ret = types.intValue(n);
        break;
    }
    var err = rows.err();
    if (err) {
        rows.close();
        throw err;
    }
    err = rows.close();
    if (err) {
        throw err;
    }
    return ret;
}

function find(page, wtype, wcontent) {
    var ret;
    if (wtype) {
        ret = db.query("select * from bugs where " + wtype + " like ? order by date desc limit " + page + ",20", wcontent);
    } else {
        ret = db.query("select * from bugs order by date desc limit " + page + ",20");
    }

    if (ret.err) {
        throw ret.err;
    }
    var arr = [];
    var rows = ret.value;
    while (rows.next()) {
        var name = types.newString();
        var title = types.newString();
        var author = types.newString();
        var date = types.newString();
        var type = types.newString();
        var crop = types.newString();

        var err = rows.scan(name, title, author, date, type, crop);
        if (err) {
            throw err;
        }
        arr.push({
            name: types.stringValue(name),
            title: types.stringValue(title),
            author: types.stringValue(author),
            date: types.stringValue(date),
            type: types.stringValue(type),
            crop: types.stringValue(crop),
        })
    }
    var err = rows.err();
    if (err) {
        rows.close();
        throw err;
    }
    err = rows.close();
    if (err) {
        throw err;
    }
    return arr;
}

exports.find = find;
exports.count = count;












