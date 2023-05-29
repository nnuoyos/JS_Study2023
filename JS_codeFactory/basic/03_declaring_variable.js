/* 
Variable 선언하기
1) var - 더이상 사용하지 않는다
2) let
3) const
*/

var name ='코드팩토리';
//console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면 값을 추후 변경할 수 있다
 */
ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);
//newJeans = '코드팩토리';

/**
 * 선언과 할당
 * 1) 변수를 선언하는 것. var name;
 * 2) 할당 name = '코드팩토리'; (변수에 값을 넣어주는 것)
 */

let girlFriend;
console.log(girlFriend); //undefined : 변수를 선언만하고 할당하지 않았을 때의 초기값

//const girlFriend2; : const는 선언과 할당을 동시에 해야 에러가 나지 않는다