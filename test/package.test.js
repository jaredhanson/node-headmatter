/* global describe, it */

var headmatter = require('..');
var expect = require('chai').expect;


describe('headmatter', function() {
  
  describe('parse', function() {
    
    it('should parse YAML', function() {
      var str = [
        '---',
        'foo: bar',
        '---',
        'This is content'
      ].join('\n')
      
      expect(headmatter.parse(str)).to.deep.equal({
        head: { foo: 'bar' },
        content: 'This is content'
      });
    }); // should parse YAML
    
  }); // parse
  
});
