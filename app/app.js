
// base framework
import $ from 'jquery';

// legacy loading for bootstrap javascript
window.$ = window.jQuery = $;
require('bootstrap');

// import our styles
import './stylesheets/base.scss';
import _ from 'underscore';
// add new pages here

// on document load
$(function(){

  //kick off the App
  console.log('%c App Started', 'color:green');

  //launch navbar if you have one
  // navbar.init();

  // This is the Router: which page are we on??
  // switch(window.location.pathname){
  // case '/pages/page.html': 
  //   new pageController();
  //   break;
  // }


  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('Impressed yet? Hire me now! www.laurielinz.com');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  

  // add some html content will not need if not using the template
  $('#root').html('<button class="btn btn-default" type="submit">Button</button>');

  // use a template
  _.templateSettings = {
    evaluate:    /{{([\s\S]+?)}}/g,
    interpolate: /{{-([\s\S]+?)}}/g,
    escape:      /{{=([\s\S]+?)}}/g
  };

  var template = '<button class="btn btn-default" type="submit">{{= name}}</button>';
  var compiledTemplate = _.template(template);
  $('#root').html(compiledTemplate({name: '<fruit>'}));

  // optionally animate that content
  $('#root button').animate({fontSize: 50}, 1000);

});
