// Webshims
$.webshims.setOptions("forms", {
  lazyCustomMessages: true,
  replaceValidationUI: true,
  overrideMessages: true,
});

$.webshims.polyfill('forms canvas');

// Toggle accordeon
$(function(){$(".a-toggle").accordion({collapsible:true,active:false,heightStyle:"content"})});

// Dropdown menu
$(function(){$("ul.dropdown li").hover(function(){$(this).addClass("hover");$("ul:first",this).css("visibility","visible")},function(){$(this).removeClass("hover");$("ul:first",this).css("visibility","hidden")});$("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ")});