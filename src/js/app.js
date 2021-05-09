import $ from 'jquery';
import { greet } from './modules/greet';

$('body')
  .append(result)
  .append(`<p>${greet('app')}</p>`);

const promise = new Promise((resolve) => {
  setTimeout(() => resolve('hello!'), 3000);
});

async function delayHello() {
  const value = await promise;
  console.log(value);
}
