var input = {'array' : []};

input.getInput = function(){
    return this.array.join("");
}

var output = {};
output.text = document.getElementById("output");

var clickNumbers = function(event){
    var str = event.target.innerHTML;
    switch (str){
        case 'BS':
        input.array.pop();
        break;
        case '+':
        input.array.push(' ' + str+ ' ');
        break;
        case '-':
        input.array.push(' ' + str+ ' ');
        break;
        case '*':
        input.array.push(' ' + str+ ' ');
        break;
        case '/':
        input.array.push(' ' + str+ ' ');
        break;
        default:
        input.array.push(str);       
    }
    if(input.array.length == 0) {
        output.text.innerHTML = "Empty";
    }  else {
        output.text.innerHTML = input.getInput();
    }

    // output.text.innerHTML = input.getInput();
}

var showResult = function(event){
    console.log("showResult");
    console.log(event.target.innerHTML);
}













// function spl(){
//     var ip = document.getElementById('ip1').value;
//     var aa = ip.split(" ");  //배열
//     return aa;
// };   

// function calculate(arr){
//     for(i = 1; i < (arr.length - i); i++){
//         switch(arr[(2 * i) - 1]){
//             case "+":
//             arr[0] = Number(arr[0]) + Number(arr[2 * i]);
//             break;

//             case "-":
//             arr[0] = Number(arr[0]) - Number(arr[2 * i]);
//             break;

//             case "*":
//             arr[0] = Number(arr[0]) * Number(arr[2 * i]);
//             break;

//             case "/":
//             arr[0] = Number(arr[0]) / Number(arr[2 * i]);
//             break;

//             default:
//             alert("알맞은 연산자를 입력해 주세요 + - * /");
//             arr[0] = "연산자 입력 오류";
//             break;
//         };
//     }
// };

// function print(v){
//     return "최종 결과값은 " + v + "입니다.";
// };

// function main(){
//     var ary = spl();
//     calculate(ary);
//     var out = document.getElementById('output');
//     out.innerHTML = print(ary[0])
// };   