'use strict'
function get(){
  console.log(this);
}
get();
let obj = {get:get};
obj.get();