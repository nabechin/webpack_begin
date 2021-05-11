import $ from 'jquery';
import { greet } from './modules/greet';
import '../scss/style.scss';

$('body')
  .append('result')
  .append(`<p>${greet('app')}</p>`);

// これらはES2015の構文なので、ES2015に対応していないブラウザは
// 動作しない。なので、polifilを使い、擬似的に変換する。
//
const promise = new Promise((resolve) => {
  setTimeout(() => resolve('hello!'), 3000);
});

promise.then(() => console.log('aaa'));
