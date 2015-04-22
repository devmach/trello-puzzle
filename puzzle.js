var TrelloPuzzle = {
  _letters : 'acdegilmnoprstuw',

  decode:  function(num) {
    var s = '';
    while(num > 37) {
      q = num % 37;
      s += this._letters.charAt(q)
      num = (num - q) / 37;
    }
    return s.split('').reverse().join('');
  },

  encode: function(str) {
    var h = 7;
    for(var i = 0; i < str.length; ++i) {
      h *= 37;
      h += this._letters.indexOf(str[i]);
    };

    return h;
  }
};


console.log("680131659347 === ", TrelloPuzzle.decode(680131659347));
console.log("leepadg === ", TrelloPuzzle.encode("leepadg"));

console.log("Encoding Test Passes: ", TrelloPuzzle.encode("leepadg") === 680131659347);
console.log("Decoding Test Passes: ", TrelloPuzzle.decode(680131659347) === "leepadg");
