import $ from 'jquery';
import { greet } from './modules/greet';

$('body')
  .css('color', 'blue')
  .append(`<p>${greet('Another')}</p>`);
