/**
 * Data Type
 * 
 * 여섯개의 Primitive Type과 한 개의 오브젝트 타입이 있다.
 * 
 * 1) Number
 * 2) String
 * 3) Boolean 
 * 4) undefined
 * 5) null
 * 6) Symbol
 * 
 * 7) Object
 *      function 
 *      Array
 *      Object
 */

const age = 32;
//const tempature = -10;
const pi = 3.14;

console.log(typeof age);

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity); //number
console.log(typeof nInfinity); //number

/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화 하지 않았을 때 지정되는 값
 * 직접 undefined로 값을 초기화 하는 것은 지양해야 한다
 * 
 */
let noInit = undefined; // 지양할 것!!!
let noInit2; //이렇게 사용할 것을 권장
console.log(typeof noInit2); //undefined

/**
 * null 타입
 * undefined와 마찬가지로 값이 없다는 뜻이나, JS에서는 개발자가 명시적으로 없는 값으로 초기화 할 때 사용
 */
let init = null;
console.log(init); //null
console.log(typeof init); //object :: js에서 null 타입이 오브젝트로 나오는 건 버그이다...

/**
 * Symbol타입
 * 유일무이한 값을 생성할 때 사용한다. 다른 프리미티브 값들과 다르게 Symbol함수를 호출해서 사용한다
 * 
 */
const test1 = '1';
const test2 = '2';
console.log(test1===test2); //false

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1===symbol2); //false


/**
 * Object 타입
 * 
 * Map 
 * key:value 의 쌍으로 이루어져 있다
 * 
 */

const dictionary = {
    red : '빨간색',
    orange : '주황색',
    yellow : '노란색',
}
console.log(dictionary['red']);
console.log(dictionary.red);


/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시를 한다 (C언어)
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 갑에의해 타입을 추론한다 (JS)
 * 
 */