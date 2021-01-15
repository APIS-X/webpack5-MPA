import styles from './style';

import $ from 'jquery';
import Swiper from 'Swiper';
import doT from 'dot';

$(function() {
  // const swiper = new Swiper('.swiper-container');

  const arrs = [1,2,3,4,5];
  const arrText = doT.template($("#dotTemplate").text());
	$(".list").html(arrText(arrs));
});
