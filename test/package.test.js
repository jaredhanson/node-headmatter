/* global describe, it */

var headmatter = require('..');
var expect = require('chai').expect;


describe('headmatter', function() {
  
  describe('parse', function() {
    
    it('should parse no front matter', function() {
      var str = [
        'This is content'
      ].join('\n')
      
      expect(headmatter.parse(str)).to.deep.equal({
        head: {},
        content: 'This is content'
      });
    }); // should parse YAML
    
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
    
    it('should parse YAML with Windows line endings', function() {
      var str = [
        '---',
        'foo: bar',
        '---',
        'This is content'
      ].join('\r\n')
      
      expect(headmatter.parse(str)).to.deep.equal({
        head: { foo: 'bar' },
        content: 'This is content'
      });
    }); // should parse YAML
    
    it('should throw when parsing invalid YAML', function() {
      var str = [
        '---',
        'windows_drive: C:',
        '---',
        'This is content'
      ].join('\n')
      
      expect(function() { headmatter.parse(str) }).to.throw();
    }); // should throw when parsing invalid YAML
    
    it('should parse JSON', function() {
      var str = [
        '---',
        '{ "foo": "bar" }',
        '---',
        'This is content'
      ].join('\n')
      
      expect(headmatter.parse(str, JSON.parse)).to.deep.equal({
        head: { foo: 'bar' },
        content: 'This is content'
      });
    }); // should parse YAML
    
  }); // parse
  
  describe('check', function() {
    
    it('should return false when front matter not present', function() {
      var str = [
        'This is content'
      ].join('\n')
      
      expect(headmatter.check(str)).to.be.false;
    }); // should return false when front matter not present
    
    it('should return true when default delimiter is present', function() {
      var str = [
        '---',
        'foo: bar',
        '---',
        'This is content'
      ].join('\n')
      
      expect(headmatter.check(str)).to.be.true;
    }); // should return true when default delimiter is present
    
    it('should return true when delimiter is present', function() {
      var str = [
        '+++',
        'foo: bar',
        '+++',
        'This is content'
      ].join('\n')
      
      expect(headmatter.check(str, '+++')).to.be.true;
    }); // should return true when default delimiter is present
    
    it('should return false when delimiter is not present', function() {
      var str = [
        '---',
        'foo: bar',
        '---',
        'This is content'
      ].join('\n')
      
      expect(headmatter.check(str, '+++')).to.be.false;
    }); // should return false when delimiter is not present
    
  }); // check
  
});
