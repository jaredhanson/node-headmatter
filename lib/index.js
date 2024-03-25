var yaml = require('js-yaml')


exports.parse = function(str, parse, delim) {
  var data = str
    , parse = parse || yaml.safeLoad
    , delim = delim || '---'
    , fm = ''
    , obj;

  // check for front matter
  if (exports.check(str, delim)) {
    var eol = '\n';
    if (delim + '\r\n' === str.slice(0, delim.length + 2)) {
      eol = '\r\n'; // Windows
      str = str.substr(delim.length + 2);
    } else {
      eol = '\n'; // UNIX
      str = str.substr(delim.length + 1);
    }
  
    var i = str.indexOf(eol)
      , line;
    while (-1 != i) {
      line = str.slice(0, i + eol.length);
      str = str.substr(i + eol.length);

      if (delim === line.slice(0, 3)) {
        break;
      } else {
        fm += line;
      }

      i = str.indexOf(eol);
    }
    data = str;
  
    try {
      obj = parse(fm.trim());
    } catch (ex) {
      throw ex;
    }
  }
  
  return {
    front: obj || {},
    content: data
  }
}

exports.check = function(str, delim) {
  delim = delim || '---';
  
  return delim === str.slice(0, delim.length);
}
