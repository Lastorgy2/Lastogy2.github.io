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
//   //1.だけPASSする関数
//   return {value:()=>x};

//   //2.だけPASSする関数
//   // function add(y){
//   //   function value(){
//   //     if(!y){
//   //       return x;
//   //     } else {
//   //       return x+y;
//   //     }
//   //   }
//   //   return {value};
//   // }
//   // return add;

//   //3.だけPASSする関数
//   // function add(y){
//   //   function add2(z){
//   //     function value(){
//   //       // if(!y){
//   //       //   return x;
//   //       // } else {
//   //       //   return x+y;
//   //       // }
//   //       return x+y+z;
//   //     }
//   //     return {value};
//   //   }
//   //   return add2;
//   // }
//   // return add;

//   // 2.と3.をPASSする関数
//   // function add(y){
//   //   function add2(z){
//   //     function value(){
//   //       // if(!y){
//   //       //   return x;
//   //       // } else {
//   //       //   return x+y;
//   //       // }
//   //       return x+y+z;
//   //     }
//   //     return {value};
//   //   }
//   //   return add2;
//   // }
//   // return add;

// }

// 関数を一度呼び出すだけでも、value() で値を得られます。
// console.log(addCurry(1))
// test(addCurry(1).value(), 1);

// console.log(addCurry(1)(2))

// 関数呼び出しを連鎖させて、累計を出すことができます。
// test(addCurry(1)(2).value(), 3);
// test(addCurry(1)(2)(3).value(), 6);
// test(addCurry(1)(2)(3)(4)(5)(6).value(), 21);


// test2.value = function() {
//   console.log("test");
// }

// test2.value();

// console.log(test2)


function addCurry(x){
  //1.だけPASSする関数
  // return {value:()=>x};

  //2.だけPASSする関数
  function add(y){
    return {value:()=>x+y};
  }
  return add;

}

// test(addCurry(1).value(), 1);
test(addCurry(1)(2).value(), 3);
test(addCurry(1)(2)(3)(4)(5)(6).value(), 21);
