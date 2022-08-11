// 삽입정렬

//1.
//2.
//3.

const _inArray = [5,4,6,7,8,3,2,1];

const solutionASC = (array) => {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let prev = i - 1;
        while ((prev >= 0) && (array[prev] > temp)) {
            array[prev +1] = array[prev];
            prev--;
        }
        array[prev+1]=temp;
    }
    console.log(array.toString());
}

const solutionDESC = (array) => {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let prev = i - 1;
        while ((prev >= 0) && (array[prev] < temp)) {
            array[prev +1] = array[prev];
            prev--;
        }
        array[prev+1]=temp;
    }
    console.log(array.toString());
}

solutionASC(_inArray);
solutionDESC(_inArray);
