// 선택 정렬

const _inArray = [5,4,6,7,8,3,2,1];



const solutionASC = (array) => {
    let minIdex, temp;
    for (let i = 0; i < array.length-1; i++) {
        minIdex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIdex]){
                minIdex = j;
            }
            //치환
            temp = array[i];
            array[i] = array[minIdex]
            array[minIdex] = temp;
        }
    }
    console.log(array.toString());
    // console.log(array.join('\n'));
}

const solutionDESC = (array) => {
    let maxIdex, temp;
    for (let i = 0; i < array.length-1; i++) {
        maxIdex = i;
        for (let j = i +1; j < array.length; j++) {
            if (array[j] > array[maxIdex]){
                maxIdex = j;
            }
        }
        temp = array[i];
        array[i] = array[maxIdex];
        array[maxIdex] = temp;
    }
    console.log(array.toString());
    // console.log(array.join('\n'));
}

solutionASC(_inArray);
solutionDESC(_inArray);
