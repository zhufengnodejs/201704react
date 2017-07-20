function sum(a,b){
  return a+b;
}
function add(fn,...args){
  return fn.apply(null,args)
}
let r = add(sum,2,4);
console.log(r);