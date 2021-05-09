import $ from 'jquery';
import { greet } from './modules/greet';

$('body')
  .append(result)
  .append(`<p>${greet('app')}</p>`);
