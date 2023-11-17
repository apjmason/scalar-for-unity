/*
  Adds divs and classes to allow CSS grid to responsively update 
  Unity scalar viewer. Use with scalar-for-unity.css styles
    Austin Mason 11/17/23 
*/

$(document).ready(function() {
    $('body').on('pageLoadComplete',function() {
        $('.page > span').wrapInner('<div class="grid">');
        $('.terms').closest('.paragraph_wrapper').addClass('module_terms');
    });
  });