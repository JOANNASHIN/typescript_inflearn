// 함수의 파라미터에 타입을 정의하는 방식
function sumFunction(a: number, b: number) {
    return a + b;
}

sumFunction(10, 20);


//함수의 반환값에 타입을 정의하는 방식
function add():number {
    return 10;
}

// 함수의 타입을 정의하는 방식
function sumFunctionReturn(a: number, b: number):number {
    return a + b;
}

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?:string) {
    return a + b + c;
}