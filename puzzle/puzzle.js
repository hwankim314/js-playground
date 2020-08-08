var ranList = ["EAGLE", "TIGER", "ELEPHANT", "GIRAFFE", "OSTRICH",
                "LIZARD", "DRAGON", "PELICAN", "FLAMINGO", "PENGUIN"];
var pick = function(event){
    var ranPick = ranList[Math.floor(Math.random() * ranList.length)];
    word1.innerHTML = ranPick;
    return word1.innerHTML;
};
var pickSpl = pick().split("");

var btnVal = [];
var copyBtnText = function(){
    for(var i = 0; i < pickSpl.length; i++){
        btnVal[i].innerHTML = pickSpl[i];
    }
};

var createBtn = function(){
    for (var i = 0; i < pickSpl.length; i++){
        var btn = document.createElement("button");
        btn.innerHTML = pickSpl[i];
        word2.appendChild(btn);
        btnVal.push(btn);
    }
};
createBtn();

var ranran = function(){
    Math.floor(Math.random() * 5)
    return Math.floor(Math.random() * 5);
}
var shuffle = function(){
    while(ranran() === 1){
        swap();
    };
    while(ranran() === 2){
        shiftR();
    };
    while(ranran() === 3){
        shiftL();
    };
};

var swap = function (event) {
    pickSpl.reverse();
    copyBtnText();
};

var shiftR = function (event) {
    pickSpl.unshift(pickSpl.pop());
    copyBtnText();
};

var shiftL = function (event) {
    pickSpl.push(pickSpl.shift());
    copyBtnText();
};

var judge = function(event){
    if(word1.innerHTML === pickSpl.join("")){
        alert("단어 맞추기를 성공하셨습니다!");
    } else {
        alert("다시 해보세요");
    }
};