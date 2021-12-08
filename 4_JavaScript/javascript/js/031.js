// 예제-1
async function f() {
    return 100;
}

f().then(console.log); // 100

// 예제-2
async function fx() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(console.log("완료!")), 3000)
    });

    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

    console.log(result); // "완료!"
    return 100;
}

fx().then(function(result) { // (**)
    console.log(result); // 1
    return result * 2;
}).then(function(result2) { // (***)
    console.log(result2); // 2
    return result2 * 2;
}).then(function(result3) {
    console.log(result3); // 4
    return result3 * 2;
});