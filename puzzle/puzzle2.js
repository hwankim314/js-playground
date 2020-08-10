///HTML 태그
var word1 = document.getElementById("word1");
var word2 = document.getElementById("word2");
var check = document.getElementById("check");
var score = document.getElementById("score");

///랜덤뽑기 + 버튼
var game = {};
game.ranList = "BLUE,GREEN,YELLOW,BLACK,NAVY,DARKGRAY,SCALET,VIOLET,EMERALD,ROSEGOLD".split(",");
game.pick = function(){
    this.picked = this.ranList[Math.floor(Math.random() * this.ranList.length)];
    this.letters = this.picked.split("");
    word1.innerHTML = this.picked;
}
game.btns = [];
game.createBtn = function(){   
    for(var i = 0; i < this.letters.length; i++){
        var btn = document.createElement("button");
        btn.innerHTML = this.letters[i];
        word2.appendChild(btn);
        this.btns.push(btn);
    };
};
game.checkGood = function(){
    return this.picked === this.letters.join("");
}
game.updateDisplay = function(){
    if(this.checkGood()){
        check.innerHTML = '일치합니다';
    } else {
        check.innerHTML = '일치하지 않습니다.';
    }
}

game.copyBtnText = function(){
    for (var i = 0; i < this.letters.length; i++){
        this.btns[i].innerHTML = this.letters[i];
    };
};
//초기화
game.init = function(){
    this.pick();
    this.createBtn();
    this.updateDisplay();
}
game.init();
//삭제
game.clear = function(){
    for (var i = 0; i < this.btns.length; i++) {
        word2.removeChild(this.btns[i]);
    }
    this.btns = [];
}

///기능버튼
game.swap = function(){
    var temp = [];
    while (game.letters.length != 0){
        var s = game.letters.pop();
        temp.push(s);
    };
    game.letters = temp;
    game.copyBtnText();
    game.updateDisplay();
};

game.shiftR = function(){
    var s = game.letters.pop();
    game.letters.unshift(s)
    game.copyBtnText();
    game.updateDisplay();
};

game.shiftL = function(){
    var s = game.letters.shift();
    game.letters.push(s);
    game.copyBtnText();
    this.updateDisplay();
};

game.shuffle = function(){
    var toggle = Math.floor(Math.random() * 2) === 0;
    if(toggle){
        game.swap();
    }
    var n = Math.floor(Math.random() * (game.picked.length -1));
    for(var i = 0; i < n; i++){
        game.shiftR();
    }
};
game.shuffle();

game.progress = function(){
    if(game.checkGood()){
        game.clear();
        game.init();
        game.shuffle();
        score.append('O');
    }
    if(score.innerHTML === "OOO"){
        alert("Clear!")
    }
}
var swap = function(){
    game.swap();
    game.progress();
}
var shiftR = function(){
    game.shiftR();
    game.progress();
}
var shiftL = function(){
    game.shiftL();
    game.progress();
}


