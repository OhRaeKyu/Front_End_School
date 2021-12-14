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
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;

        this.currentNode = undefined;
        this.dataSize = 0;
    }

    length() {
        return this.dataSize;
    }

    append(data) {
        let newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.dataSize += 1;
    }

    toString() {
        console.log(this.head.data);
        if(this.next) {
            this.next.toString();
        }
    }
}
// 3. 정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회