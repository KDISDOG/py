var funcA = function(callback){
  var i = Math.random() + 1;

  windows.setTimeout(function(){
    console.log('function A');

    // 如果 callback 是個函式就呼叫它
    if( typeof callback === 'function' ){
      callback();
    }

  }, i * 1000);
};

var funcB = function(){
  var i = Math.random() + 1;

  window.setTimeout(function(){
    console.log('function B');
  }, i * 1000);
};

// 為了確保先執行 funcA 再執行 funcB, 呼叫 funcA() 的時候，將 funcB 作為參數帶入
funcA( funcB );
var funcA = function(callback){
  var i = Math.random() + 1;

  windows.setTimeout(function(){
    console.log('function A');

    // 如果 callback 是個函式就呼叫它
    if( typeof callback === 'function' ){
      callback();
    }

  }, i * 1000);
};

var funcB = function(){
  var i = Math.random() + 1;

  window.setTimeout(function(){
    console.log('function B');
  }, i * 1000);
};

// 為了確保先執行 funcA 再執行 funcB, 呼叫 funcA() 的時候，將 funcB 作為參數帶入
funcA( funcB );
var funcA = function(callback){
  var i = Math.random() + 1;

  windows.setTimeout(function(){
    console.log('function A');

    // 如果 callback 是個函式就呼叫它
    if( typeof callback === 'function' ){
      callback();
    }

  }, i * 1000);
};

var funcB = function(){
  var i = Math.random() + 1;

  window.setTimeout(function(){
    console.log('function B');
  }, i * 1000);
};

// 為了確保先執行 funcA 再執行 funcB, 呼叫 funcA() 的時候，將 funcB 作為參數帶入
funcA( funcB );