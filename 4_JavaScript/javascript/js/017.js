// factorial
function factorial(n) {
    if (n <= 1) {
        return n;
    }
    return n * factorial(n-1);
}

// sigma
function sigma(n) {
    if (n <= 1) {
        return n;
    }
    return n + sigma(n-1);
}

// reverse string
function reverse(text) {
    text = text.toString();
    if (text.length <= 1) {
        return text;
    }
    return reverse(text.slice(1)) + text[0];
}

// comma
// 1,000,000 원 처럼 출력되게 수정해보기
function comma(text) {
    text = text.toString();
    if (text.length <= 1) {
        return text;
    }
    return text[0] + "," + comma(text.slice(1));
}

// Fibonacci
function fib(n) {
    if (n <= 1) {
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

// Fibonacci - Dinamic Programming
let fiboCache = [];
function fibo(n) {
    if (n in fiboCache) {
        return fiboCache[n];
    }
    fiboCache[n] = n <= 1 ? 1 : fibo(n-2) + fibo(n-1);
    return fiboCache[n];
}