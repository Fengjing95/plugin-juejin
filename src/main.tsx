/*
 * @Date: 2023-03-27 21:35:37
 * @Author: 枫
 * @LastEditors: 枫
 * @description: description
 * @LastEditTime: 2023-03-29 17:19:29
 */
import { monkeyWindow } from '$';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { insertSpecialColumn } from './plugins/specialColumn';

insertSpecialColumn()
// @ts-ignore
monkeyWindow.onurlchange = insertSpecialColumn

// ReactDOM.createRoot(
//   (() => {
//     const app = document.createElement('div');
//     document.body.append(app);
    
//     insertSpecialColumn()
//     // @ts-ignore
//     monkeyWindow.onurlchange = insertSpecialColumn

//     return app;
//   })(),
// ).render(
//   <React.StrictMode>
//     <></>
//   </React.StrictMode>
// );