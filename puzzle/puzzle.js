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

var create = {};
create.createBtn = function(){
    for (var i = 0; i < pickSpl.length; i++){
        var btn = document.createElement("button");
        btn.innerHTML = pickSpl[i];
        word2.appendChild(btn);
        btnVal.push(btn);
    }
};
create.createBtn();

create.createBtn2 = function(){
    var pickSpl2 = pick().split("");

    for (var i = 0; i < pickSpl2.length; i++){
        var btn = document.createElement("button");
        btn.innerHTML = pickSpl2[i];
        word2.appendChild(btn);
        btnVal = [];
        btnVal.push(btn);

    }
}
create.delete = function(){
    while(word2.hasChildNodes()){
        word2.removeChild(word2.firstChild);      
    };
};

var ranran = function(){
    Math.floor(Math.random() * 3)
    return Math.floor(Math.random() * 3);
}
var shuffle = function(){
    while(ranran() === 1){
        shiftR();
    };
    while(ranran() === 2){
        swap();
    };
    while(ranran() === 0){
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
var score = document.getElementById("score");
var judge = function(event){
    var pickSpl = pick().split("");
    if(word1.innerHTML === pickSpl.join("")){
        alert("단어 맞추기를 성공하셨습니다!");
        create.delete();
        create.createBtn2();
        score.append("O");
        if(score.innerHTML === "OOO"){
            alert("Thank you for playing!")
        }
    } else {
        alert("다시 해보세요");
    }
};