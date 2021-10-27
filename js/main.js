var arrNum = [];
//Nhap va luu tru mang
function addEleArray() {
    var num = document.querySelector("#numArr").value;
    arrNum.push(num);
    // console.log(arrNum);
    document.querySelector("#result__add").innerHTML = arrNum + ",";
}
document.querySelector("#btn__add").onclick = addEleArray;

//Bai 1:
function calcSum() {
    var sum = 0;
    for(index = 0; index < arrNum.length; index++){
        if (arrNum[index] > 0) {
            sum += Number(arrNum[index]);
        }else{
            console.log("Không hợp lệ");
        }
    }
    document.querySelector("#result__b1").innerHTML = sum;
}
document.querySelector("#btn__sum").onclick = calcSum;

//Bai 2:
function count() {
    var count = 0;
    for(index = 0; index < arrNum.length; index++){
        if (arrNum[index] > 0) {
            count++
        }else{
            console.log("Không hợp lệ");
        }
    }
    document.querySelector("#result__b2").innerHTML = count;
}
document.querySelector("#btn__sort").onclick = count;

//Bai 3:
function minNum() {
    var min = arrNum[0];
    for(var index = 1; index < arrNum.length; index++){
        if (min > arrNum[index]) {
            min = arrNum[index];
        }
    }
    document.querySelector("#result__b3").innerHTML = min;
}
document.querySelector("#btn__findMin").onclick = minNum;

//Bai 4:
function minNumPos() {
    var arrPossitive = [];
    for(var index = 0; index < arrNum.length; index++){
        if (arrNum[index] > 0) {
            arrPossitive.push(arrNum[index]);
        }
    }
    var min = arrPossitive[0];
    for(var index = 1; index < arrPossitive.length; index++){
        if (arrPossitive[index] < 0) {
            min = arrPossitive[index];
        }
    }
    document.querySelector("#result__b4").innerHTML = min;
}
document.querySelector("#btn__findMinPos").onclick = minNumPos;

//Bai 5:
function findEven() {
    var numEven = 0;
    for(var index = 0; index < arrNum.length; index++){
        if (arrNum[index] % 2 == 0) {
            numEven = arrNum[index];
        }
    }
    document.querySelector("#result__b5").innerHTML = numEven;
}
document.querySelector("#btn__even").onclick = findEven;

//Bai 6:
function numSwap(pos1, pos2) {
    var temp = arrNum[pos1];
    arrNum[pos1] = arrNum[pos2];
    arrNum[pos2] = temp;
}

function changPos() {
    var pos1 = document.querySelector("#numInputPos1").value;
    var pos2 = document.querySelector("#numInputPos2").value;
    numSwap(pos1, pos2);
    document.querySelector("#result__b6").innerHTML = arrNum;
}

document.querySelector("#btn__swap").onclick = changPos;

//Bai 7:
function sort() {
    for (var i = 0; i < arrNum.length; i++){
        for (var j = 0;j < arrNum.length - 1; j++){
            if (arrNum[j] > arrNum[j + 1]) {
                numSwap(j, j + 1);
            }
        }
    } 
    document.querySelector("#result__b7").innerHTML = arrNum;
}
document.querySelector("#btn__sortIncrease").onclick = sort;