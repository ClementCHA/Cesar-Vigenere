let assert = require('assert');


let app = require('../index');

describe('Array', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('Should return 0 when the value is 1', function(){
        assert.equal([1,2,3].indexOf(1), 0);
    })
});

describe('Make sure that the conversion function will return the propre encoded letter', function(){
    it('a will return d', function(){
        assert.equal(app.func.encode('a',3), 'd');
        assert.equal(app.func.encode('a',6), 'g');
        assert.equal(app.func.encode('a',0), 'a');
    });


    it('x, y, z will return a, b, c', function(){
        assert.equal(app.func.encode('x',3), 'a');
        assert.equal(app.func.encode('u',6), 'a');
        assert.equal(app.func.encode('b',25),'a')
    });

    it('A will return D', function(){
        assert.equal(app.func.encode('A',3), 'D');
        assert.equal(app.func.encode('A',6), 'G');
        assert.equal(app.func.encode('A',0), 'A');
    });
    it('X, Y, Z will return A, B, C', function(){
        assert.equal(app.func.encode('X',3), 'A');
        assert.equal(app.func.encode('U',6), 'A');
        assert.equal(app.func.encode('B',25), 'A');
    });
    

})

describe('test function message', function(){
 
    it('Message "ab" will return "de"', function(){
        assert.equal(app.func.shiftEncoding("ab",3), "de");
    });

    it('Message "aB" will return "dE"', function(){
        assert.equal(app.func.shiftEncoding("aB",3), "dE");
    });
    
    it('Message "Salut" will return "Vdoxw"', function(){
        assert.equal(app.func.shiftEncoding("Salut",3), "Vdoxw");
    });

    it('Message "Salut toi" will return "Vdoxw wrl"', function(){
        assert.equal(app.func.shiftEncoding("Salut toi",3), "Vdoxw wrl");
    });
    
    it('Message "Salut toi & toi" will return "Vdoxw wrl"', function(){
        assert.equal(app.func.shiftEncoding("Salut toi &12345 toi",3), "Vdoxw wrl &12345 wrl");
    });
    
    it('Message "Salut toi" will return "Vdoxw wrl"', function(){
        assert.equal(app.func.shiftEncoding("Salut toi",29), "Vdoxw wrl");
    });
    
    it('Message "Salut toi" will return "Vdoxw wrl"', function(){
        assert.equal(app.func.shiftEncoding("A",34), "I");
    });
})

describe("getIndexFromLetter", ()=>{
    it("a --> 0", ()=>{
        assert.equal(app.func.getIndexFromLetter("a"), 0)
        assert.equal(app.func.getIndexFromLetter("z"), 25)
    })
})

describe("Test function vigenereEncoding", ()=>{
    it("j with key m should be v", ()=>{
        assert.equal(app.func.vigenereEncoding("j", "m"), "v")
        assert.equal(app.func.vigenereEncoding("L", "Q"), "B")
        console.log("------------------")
        assert.equal(app.func.vigenereEncoding("j'adore ecouter la radio toute la journee", "musique"),
                    "v'uvwhy ioimbul pm lslyi xaolm bu naojvuy")
    })
})
