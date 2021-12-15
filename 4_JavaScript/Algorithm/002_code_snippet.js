// (기본 자료구조 및 알고리즘)
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
// 3-2. 삽입 정렬
// 3-3. 병합 정렬
// 3-4. 퀵 정렬

// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회