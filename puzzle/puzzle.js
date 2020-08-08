var str = document.getElementById("word1").innerHTML;
var word2 = document.getElementById("word2");

var game = {};
game.word = str.split("");
game.btns = [];
game.copyBtnText = function(){
    for (var i = 0; i < this.word.length; i++) {
        this.btns[i].innerHTML = this.word[i];
    }
};

for (var i = 0; i < str.length; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = str[i];
    word2.appendChild(btn);
    game.btns.push(btn);
};

var swap = function (event) {
    game.word.reverse();
    game.copyBtnText();
};

var shiftR = function (event) {
    game.word.unshift(game.word.pop());
    game.copyBtnText();
};

var shiftL = function (event) {
    game.word.push(game.word.shift());
    game.copyBtnText();
};

var judge = function(event){
    if(word1.innerHTML === game.word.join("")){
        alert("단어 맞추기를 성공하셨습니다!");
    } else {
        alert("다시 해보세요");
    }
}