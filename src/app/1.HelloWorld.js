/**
 * src/index.js是入口文件
 * React应用只会读取此index.js文件以及它依赖的模块
 */
//引入React React核心模块
import React from 'react';
//React DOM相关的模块
import ReactDOM from 'react-dom';
//1. 使用ReactDOM的render方法把一个React元素渲染到页面中去
//2. 就是jsx=javascript+xml的一种混合写法，就是在javascript中可以编写html代码
// 3. React元素是虚拟DOM,它不是真实DOM，但是它描述了真实DOM的样子。在render的时候，render方法会把此虚拟DOM转化成真实DOM并插入到容器内部
//4. React本质上还是一个类似于jquery库，它会提供一些方法让我们来调用
ReactDOM.render(
  <h1>hello1</h1>,document.querySelector('#root')
);

