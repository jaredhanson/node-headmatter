var yaml = require('js-yaml')


exports.parse = function(str, parse) {
  var data = str
    , parse = parse || yaml.safeLoad
    , fm = ''
    , obj;

  // check for front matter
  if ('---' === str.slice(0, 3)) {
    var eol = '\n';
    if ('---\r\n' === str.slice(0, 5)) {
      eol = '\r\n'; // Windows
      str = str.substr(5);
    } else {
      eol = '\n'; // UNIX
      str = str.substr(4);
    }
  
    var i = str.indexOf(eol)
      , line;
    while (-1 != i) {
      line = str.slice(0, i + eol.length);
      str = str.substr(i + eol.length);

      if ('---' === line.slice(0, 3)) {
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
    head: obj || {},
    content: data
  }
}
