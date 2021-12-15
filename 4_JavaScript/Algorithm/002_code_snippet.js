// (기본 자료구조 및 알고리즘)
// 1. 스택과 큐
// 2. 연결리스트(linked list)
// 3. 정렬
// 3-1. 선택정렬
// 3-2. 삽입정렬
// 3-3. 병합정렬
// 3-4. 퀵정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

// 1. 스택과 큐
// 1-1. 스택
class Stack {
    constructor() {
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
    }

    pop(index = this.arr.length - 1) {
        // index가 입력이 안되었을 때
        if (index === this.arr.length - 1) {
            return this.arr.pop();
        }
        else {
            // index가 입력이 되었을 때
            let result = this.arr.splice(index, 1);
            return result;
        }
    }

    empty() {
        if(this.arr.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    top() {
        return this.arr[this.arr.length - 1];
    }

    bottom() {
        return this.arr[0];
    }
}

let s = new Stack()
for (let i = 0; i < 10; i++) {
    s.push(i * 10);
}
s.pop();
s.pop(5);
console.log(s);

// 2. 연결리스트(linked list)
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node('init');
        this.head = init;
        this.tail = init;

        this.데이터수 = 0;
    }

    get fullData(){
        // return 'hello world'
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        let s = ''
        for (let i = 0; i < this.데이터수; i++) {
            s += `${순회용현재노드.data}, `;
            순회용현재노드 = 순회용현재노드.next;
        }
        return JSON.parse(`[${s.slice(0, -2)}]`)
    }

    length(){
        return this.데이터수;
    }

    append(data){
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.데이터수 += 1;
    }

    toString(){
        // return 'hello world';
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        let s = '';
        for (let i = 0; i < this.데이터수; i++) {
            s += `${순회용현재노드.data},`
            순회용현재노드 = 순회용현재노드.next;
        }
        return s.slice(0, -1);
    }

    insert(index, data){
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        for (let i = 0; i < index - 1; i++) {
            순회용현재노드 = 순회용현재노드.next;
        }

        let 새로운노드 = new Node(data);
        새로운노드.next = 순회용현재노드.next;
        순회용현재노드.next = 새로운노드;
        this.데이터수 += 1;
    }
}

l = new LinkedList();

// 3. 정렬
// 3-1. 선택 정렬
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr
}

let s = [10, 5, 7, 9, 2];
console.log(selectionSort(arr));

// 3-2. 삽입 정렬
// 3-3. 병합 정렬
function mergeSort(arr) {
    let arrSize = arr.length;
    let resultArr = new Array();

    if (arrSize <= 1) {
        return arr;
    }

    let midIndex = parseInt(arrSize / 2);
    let preArr = mergeSort(arr.slice(0, midIndex));
    let postArr = mergeSort(arr.slice(midIndex));
    
    while (preArr.length !== 0 && postArr.length !== 0) {
        if (preArr[0] < postArr[0]) {
            resultArr.push(preArr.shift());
        }
        else {
            resultArr.push(postArr.shift());
        }
    }

    while (preArr.length !== 0) {
        resultArr.push(preArr.shift());
    }

    while (postArr.length !== 0) {
        resultArr.push(postArr.shift());
    }
    
    return resultArr;
}
let s = [10, 5, 7, 9, 2];
console.log(mergeSort(s));

// 3-4. 퀵 정렬
function quickSort(arr) {
    let arrSize = arr.length;
    let resultArr = [];

    if (arrSize <= 1) {
        return arr;
    }

    let pivotIndex = parseInt(arrSize / 2);
    let preArr = [];
    let postArr = [];

    for (let i = 0; i < arrSize; i++) {
        if (arr[i] <= arr[pivotIndex]) {
            preArr.push(arr[i]);
        }
        else {
            postArr.push(arr[i]);
        }
    }
    console.log(preArr, postArr);

    return resultArr.concat(preArr).concat(postArr);
}
let s = [10, 5, 7, 9, 2];
console.log(quickSort(s));

// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회


// 3.2 삽입정렬(자기가 들어갈 위치를 찾아감!, O(n**2))


let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function 삽입값이들어갈인덱스(정렬된배열, 삽입값){
    for (const i in 정렬된배열) {
        if (삽입값 < 정렬된배열[i]) {
            return i
        }
    }
    return 정렬된배열.length;
}

for (let i = 0; i < 배열의길이; i++) {
    let 삽입값 = 입력값.shift()
    let 인덱스 = 삽입값이들어갈인덱스(정렬된배열, 삽입값);
    정렬된배열.splice(인덱스, 0, 삽입값);
    console.log(`인덱스 : ${인덱스}\n삽입값 : ${삽입값}\n 정렬된배열 : ${정렬된배열}\n`)
}


// 좀 더 어렵게
function insertIndex(sorted_arr, value) {
    //삽입될 위치를 찾는 함수
    for(let i in sorted_arr){
        if(value < sorted_arr[i]){
            return i;
        }
    }
    return sorted_arr.length;
}

function insertSort(arr) {
    let sorted_arr = [];

    while (arr.length != 0){
        let value = arr.shift();
        //삽입될 위치를 반환함
        let index = insertIndex(sorted_arr, value);
        //삽입될 위치에 값을 반환
        sorted_arr.splice(index, 0, value);
    }
    return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));


// 3.3 병합정렬(Worst와 Best 모두 O(nlogn), 어떤 정렬보다 빠름, 동일 할 수 있음)
// let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];
// let 정렬된배열 = [];

// 분할(이해를 돕기 위해 8개로 조정)
[5, 10, 66, 77], [54, 32, 11, 15]
[5, 10], [66, 77], [54, 32], [11, 15]
[5], [10], [66], [77], [54], [32], [11], [15]

//정복(0번째끼리 비교!)
[5, 10], [66, 77], [32, 54], [11, 15]
[5, 10, 66, 77], [11, 15, 32, 54]
[5, 10, 11, 15, 32, 54, 66, 77]

// step 1
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열){
    let 입력배열의길이 = 입력배열.length;
    if (입력배열의길이 <= 1){
        return 입력배열
    }
    let 중간값 = parseInt(입력배열의길이 / 2);
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
    let 그룹둘 = 병합정렬(입력배열.slice(중간값))
    return `그룹하나 : ${그룹하나} \n 그룹둘 : ${그룹둘}\n\n`
}

console.log(병합정렬(입력값));

//step2
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열) {
    let 입력배열의길이 = 입력배열.length;
    let 결과값 = [];

    if (입력배열의길이 <= 1) {
        return 입력배열
    }

    let 중간값 = parseInt(입력배열의길이 / 2);
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
    let 그룹둘 = 병합정렬(입력배열.slice(중간값));

    while (그룹하나.length != 0 && 그룹둘.length != 0) {
        if (그룹하나[0] < 그룹둘[0]) {
            결과값.push(그룹하나.shift());
        } else {
            결과값.push(그룹둘.shift());
        }
    }

    while(그룹하나.length != 0) {
        결과값.push(그룹하나.shift());
    }

    while(그룹둘.length != 0) {
        결과값.push(그룹둘.shift());
    }

    return 결과값
}

console.log(병합정렬(입력값));

// 3.4 퀵정렬



// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회



// 목차(실전 코딩테스트 풀이)
// 1. 18년도
// 2. 19년도
// 3. 20년도
// 4. 21년도