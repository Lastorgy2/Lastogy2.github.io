'use strict'
// 1行目に記載している 'use strict' は削除しないでください


console.log("******ナイトメア問題******");
console.log("Q.1");

/**
 * @param {number} ???
 * @returns {Function} 呼び出しが連鎖でき、value メソッドで値を取り出せる関数
 */
// ここにコードを書きましょう



// function addCurry(x){
//   return {value:()=>x}; //オブジェクト(メソッドを返す)
// }

// function addCurry(x){
//   function add(y){
//     return {value:()=>x+y}; //オブジェクト(メソッドを返す)
//   }
//   return add; //内部関数を返してカリー化対応
// }

// test(addCurry(1).value(), 1);    //エラー：addCurry(...).value is not a function
// test(addCurry(1)(2).value(), 3); //PASS


// test(addCurry(1).value(), 1);    //PASS
// test(addCurry(1)(2).value(), 3); //エラー：addCurry(...) is not a function


// function addCurry(x){
//   function add(y){
//     return {value:()=>x+y}; //オブジェクト(メソッドを返す)
//   }
//   add.value = function() {return x}; //関数オブジェクトにメソッドを追加
//   return add; //内部関数を返してカリー化対応
// }

// test(addCurry(1).value(), 1);    //PASS
// test(addCurry(1)(2).value(), 3); //PASS

//一つ一つ処理
// function addCurry(x){
//   function add(y){
//     function add2(z){
//       function add3(a){
//         function add4(b){
//           function add5(c){
//             return {value:()=> x+y+z+a+b+c};
//           }
//           add5.value = ()=> x+y+z+a+b;
//           return add5; //内部関数を返してカリー化対応
//         }
//         add4.value = ()=> x+y+z+a;
//         return add4; //内部関数を返してカリー化対応
//       }
//       add3.value = ()=> x+y+z;
//       return add3; //内部関数を返してカリー化対応
//     }
//     add2.value = ()=> x+y;
//     return add2; //内部関数を返してカリー化対応
//   }
//   add.value = ()=>x;
//   return add; //内部関数を返してカリー化対応
// }

// test(addCurry(1).value(), 1);    //PASS
// test(addCurry(1)(2).value(), 3); //PASS
// test(addCurry(1)(2)(3)(4)(5)(6).value(), 21); //PASS

//リファクタリング
function addCurry(x){
  let sum = x; //積算用の変数定義＆初期化
  function add(y){
    sum += y; //sumは親関数に定義⇒関数内で使用可
    return add;
  }
  add.value = ()=>sum; //valueメソッドで合計値
  return add; //内部関数を返してカリー化対応
}

test(addCurry(1).value(), 1);    //PASS
test(addCurry(1)(2).value(), 3); //PASS
test(addCurry(1)(2)(3)(4)(5)(6).value(), 21); //PASS
