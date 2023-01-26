import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';
// function takes two arguments, HTML code and an HTML element. yani app'i rootun içinde gösterir.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
// React DOM, ilgili elementi ve elementin alt elemanlarını, bir önceki 
// versiyonlarıyla karşılaştırır. Farkları tespit ettikten sonra yalnızca gerekli olan
//  kısımlarda DOM güncellemesi yapar.