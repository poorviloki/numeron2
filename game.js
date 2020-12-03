var number1box = document.getElementById("number1");
number1box.innerHTML = number1;

var number2box = document.getElementById("number2");
number2box.innerHTML = number2;

var number3;
var number3box = document.getElementById("number3")

var number4 = 0;
var operators_sign;

function randomise() {
    var number1 = Math.round(Math.random() * 100);
    var number2 = Math.round(Math.random() * 100);

    if (number1 < number2) {
        var extra = number1;
        number1 = number2;
        number2 = extra;
    }
    operators_sign = Math.round(Math.random() * 4);
    var number3;
    switch (operators_sign) {
        case 0:
            operators_sign = Math.round(Math.random() * 4);
            randomise();
            break;
            case 1:
                number3 = number1 + number2;
                number3box.innerHTML = number3;
                break;
            case 2:
                    number3 = number1 + number2;
                    number3box.innerHTML = number3;
                    break;
                    var number1 = Math.round(Math.random() * 100);
                    var number2 = Math.round(Math.random() * 100);
                    
                    var number1box = document.getElementById("number1");
                    number1box.innerHTML = number1;
                    
                    var number2box = document.getElementById("number2");
                    number2box.innerHTML = number2;
                    
                    var number3;
                    var number3box = document.getElementById("number3");
                    
                    var score = 0;
                    var operators_sign;
                    function randomise() {
                        var number1 = Math.round(Math.random() * 100);
                        var number2 = Math.round(Math.random() * 100);
                    
                        if (number1 < number2) {
                            var extra = number1;
                            number1 = number2;
                            number2 = extra;
                        }
                        operators_sign = Math.round(Math.random() * 4);
                        var number3;
                        switch (operators_sign) {
                            case 0:
                                operators_sign = Math.round(Math.random() * 4);
                                randomise();
                                break;
                            case 1:
                                if (number1 == 0 || number2 == 0) {
                                    randomise();
                                }
                                number3 = number1 + number2;
                                number3box.innerHTML = number3;
                                break;
                            case 2:
                                if (number1 == 0 || number2 == 0) {
                                    randomise();
                                }
                                number3 = number1 - number2;
                                number3box.innerHTML = number3;
                                break;
                    From FACE to Everyone:  11:19 PM
                    case 3:
                                if (number1 == 1 || number2 == 1) {
                                    randomise();
                                }
                                number3 = number1 * number2;
                                number3box.innerHTML = number3;
                                break;
                            case 4:
                                if (number1 == 1 || number2 == 1) {
                                    randomise();
                                }
                                number3 = Math.floor(number1 / number2);
                                number1 = number2 * number3;
                                number3box.innerHTML = number3;
                                break;
                        }
                        number1box.innerHTML = number1;
                        number2box.innerHTML = number2;
                    
                    }
                    randomise();
                    var plus = document.getElementById("plus");
                    plus.onclick = () => {
                        if (operators_sign == 1) {
                            score++;
                            randomise();
                            resetTime(timerId);
                        } else {
                            location.href = "./gameover.html?score" + score;
                        }
                    }
                    
                    var minus = document.getElementById("minus");
                    minus.onclick = () => {
                        if (operators_sign == 2) {
                            score++;
                            randomise();
                            resetTime(timerId);
                        } else {
                            location.href = "./gameover.html?score" + score;
                        }
                    }
                    
                    var mul = document.getElementById("mul");
                    mul.onclick = () => {
                        if (operators_sign == 3) {
                            score++;
                            randomise();
                            resetTime(timerId);
                        } else {
                            location.href = "./gameover.html?score" + score;
                        }
                    }
                    
                    var divide = document.getElementById("divide");
                    divide.onclick = () => {
                        if (operators_sign == 4) {
                            score++;
                            randomise();
                            resetTime(timerId);
                        } else {
                            location.href = "./gameover.html?score" + score;
                        }
                    }
                    