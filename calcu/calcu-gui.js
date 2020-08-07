//input 입력 부분
var input = {'array' : []};
input.getInput = function(){
    return this.array.join("");
};

//output 값 출력 부분
var output = {};
output.text = document.getElementById("output");

//숫자와 연산자 버튼 클릭
var clickNumbers = function(event){
    var str = event.target.innerHTML;

    if (str === 'BS'){
        input.array.pop();
    } else if (str === '+' || str === '-' || str === '*' || str === '/'){
        input.array.push(' ' + str + ' ');
    } else {
        input.array.push(str);
    }

    if(input.array.length == 0) {
        output.text.innerHTML = "Empty";
    }  else {
        output.text.innerHTML = input.getInput();
    };

};

//입력값 배열로 만들기
var spl = function(){
    var ip = output.text.innerHTML;
    var aa = ip.split(" ");  //배열로
    return aa;
};

//계산
var calculate = function(arr){
    for(i = 1; i < (arr.length - i); i++){
        switch(arr[(2 * i) - 1]){
            case "+":
            arr[0] = Number(arr[0]) + Number(arr[2 * i]);
            break;

            case "-":
            arr[0] = Number(arr[0]) - Number(arr[2 * i]);
            break;

            case "*":
            arr[0] = Number(arr[0]) * Number(arr[2 * i]);
            break;

            case "/":
            arr[0] = Number(arr[0]) / Number(arr[2 * i]);
            break;
        };
    }
};

//'=' 버튼
var showResult = function(event){
    var ary = spl();
    calculate(ary);
    output.text.innerHTML = ary[0];
};

var allClear = function(event){
    output.text.innerHTML = "0";

};

//추가로 필요한 기능
//음수표현, 우선순위, 디자인