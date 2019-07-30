// JQUERY:
//=======//


// SELECTORS:
//__________ //


// '$' is used to get a reference of DOM element. ex: $(''header'')
// CSS selectors syntax is used are for jquery selectors. ex: $(''#logo'')
// Difference between vanilla JS selectors and jquery selectors is that jquery returns array while vanilla doesn''t. 

// Element selector:
// ----------------- //
// $("h3").css({border: "3px solid red"});

// Class selector:
// ---------------- //
// $(".wrapper").css({border: "3px solid blue"});

// ID selector:
// ------------- //
// $("#clients").css({border: "3px solid yellow"});

// Filters selectors:
// -------- //
// Filters can be used to refine selectors and make them more specific.
// Filters are like pseudo classes in CSS.

// first & last:
// Selects the first/last element of a kind.
// $("header nav li:first").css({border: "3px solid red"});
// $("header nav li:last").css({border: "3px solid red"});

// first-child & last-child:
// Selects the first child/last-child element of a parent element.
// $("#contact:first-child").css({border: "3px solid red"});
// $("#contact:last-child").css({border: "3px solid red"});

// even & odd:
// Selects the even/odd elements starting from 0.
// $("header nav li:even").css({border: "3px solid blue"});
// $("header nav li:odd").css({border: "3px solid yellow"});

// not:
// Selects all the elements that do not match the mentioned statement. (ex: #contact)
// $("section:not('#contact')").css({border: "3px solid green"});

// less than & greater than:
// Selects the elements that are less/greater than the given index.
// $("#social-nav li:lt(3)").css({border: "3px solid blue"});
// $("#social-nav li:gt(3)").css({border: "3px solid blue"});

// attribute filter:
// Selects all elements with the attribute mentioned in the square brackets.
// $("div[class]").css({border: "3px solid pink"}); // this selects all divs with any kind of class. 
// $("img[alt]").css({border: "3px solid pink"}); // this selects all images with the attribute 'alt'.
// $("img[alt=quote]").css({border: "3px solid pink"}); // attribute filter with a specific value.

// Selectors methods:
// ----------------- //

// .next():
// Goes down and selects the next tag element.
// $("#contact-method").next().css({border: "3px solid red"});

// .prev():
// Goes up and selects the previous tag element.
// $("#social-nav").prev().css({border: "3px solid red"});

// .parent():
// Selects the parent of an element.
// $("#social-nav").parent().css({border: "3px solid pink"});

// .parents():
// Selects all the parents of an element.
// $("#social-nav").parents().css({border: "3px solid pink"});

// .children():
// Selects the children elements.
// $("#social-nav").prev().css({border: "3px solid green"});

// .find():
// Finds an element inside some section with the mentioned class .
// $("#contact").find(".facebook").css({border: "3px solid purple"});

// .closest():
// Selects the closest parent with a specific class of an element.
// $("#social-nav").closest().css({border: "3px solid orange"});


// ================================================================================================= //


// Chaining:
// ________ //


// Chaining is to write many methods in one statement.
// Chaining much methods will make the code unreadable.
// It's possible to line-break with every chained method.

// $("#contact-method").css({border: "3px solid red"})
// .next().css({border: "3px solid green"})
// .closest("section").css({border: "3px solid blue"});


// ================================================================================================= //


// Handling the content/innerHTML of an element:
// _____________________________________________ //


// let tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee'>The big fight live: Ham vs Cheese!</div>"
// let text = "The big fight live: Ham vs Cheese!"

// Adding:
// ------- //

// .append():
// Adds content to the bottom of an element.
// $("#tweets div").append(tweet);

// .prepend():
// Adds content to the top of an element.
// $("#tweets div").prepend(tweet);

// .before():
// Adds content before an element.
// $("#tweets div p").before(tweet);

// .after():
// Adds content after an element.
// $("#tweets div p").after(tweet);

// Replacing:
// ---------- //

// .html():
// Replaces the content of an element.
// $("#tweets div").html(tweet);

// .text():
// Replaces the content of an element.
// $("#tweets div p").html(text);

// Removing:
// --------- //

// .empty():
// Empties the content of an element.
// $("#points-of-sale").empty();

// .remove():
// Deletes the complete tag.
// $("#contact img").remove(); 

// ================================================================================================= //



// Wrapping & unwrapping elements:
// _______________________________ //

// .wrap():
// Wraps each matched element (individually) in one specific tag.
// $("section").wrap("<div>");

// .unwrap():
// UnWraps each matched element (individually) from its tag.
// $("section").unwrap();


// .wrapAll():
// Wraps all the matched elements in one specific tag.
// $("section").wrapAll("<div>");

// Example:
// A button to wrap and unwrap the section elements:
// 'button[0]' unwrap the element from the returned object:
// let wrapper = "<div class=wrapper>";
// let button = ".button";
// let wrapped = true;

// button[0].onclick = function () {
//     if(wrapped){
//         $("section").unwrap();
//         wrapped = false;
//         button.text("Wrap"); 
//     } else {
//         $("section").wrapAll(wrapper);
//         wrapped = true;
//         button.text("Unwrap"); 
//     }
// }


// ================================================================================================= //


// Handling attributes:
// ____________________ //


// .attr():
// Reads the attributes.
// $("#contact img").attr(");

// .attr(a, b):
// Sets a new attribute or updates an existing one.
// Takes two values, the attribute name and its value.
// $("#contact img").attr("alt", "location");

// .removeAttr():
// Removes an attribute completely.
// $("#contact img").removeAttr("alt");


// ================================================================================================= //


// Handling classes:
// ____________________ //


// .removeClass():
// Removes a class from the matched element.
// $("header .wrapper").removeClass("wrapper");

// .addClass():
// Adds a class to the matched element.
// $("header > div").addClass("wrapper");

// .toggleClass():
// Removes or adds a class depending on the current status of the element.
// Mostly used with buttons.
// In the example bellow, '.open' is a class styled in style.css to 'display: none'.
// $("#points-of-sale").css("height", 0).css("overflow", "hidden")
// let toggleButton = $("#lead-banner a");
// toggleButton[0].onclick = function () {
//     $("#points-of-sale").toggleClass("open");
//     return false;
// };


// ================================================================================================= //


// Handling CSS:
// ______________ //


// .css("property"):
// Reads the value of the CSS property of an element.
// $("#social-nav").css("position");

// .css("property", "value"):
// Sets a value for a new property or changes the value of an existing one.
// $("#social-nav").css("position", "fixed");

// .css({}):
// CSS objects are good when handling many CSS properties.
// $("#social-nav").css({
//     "position": "relative",
//     "left": "150px",
//     "opacity": "0.5",
//     "border-top": "4px solid red"
// });


// ================================================================================================= //


// Handling Events
// _______________ //


// Binding & unbinding events:
// --------------------------- //

// .on():
// Binds an event to a matched element and takes two parameters, event type and a callback function.
// This example will change the background if the clicked 'li' tags:
// let myList = $("#points-of-sale li")
// myList.on("click", function () {
//     $(this).css("background", "pink");
// });

// .off():
// Unbinds an event from a matched element with one parameter, event type.
// This example will change the background if the first clicked 'li' tags and then stops:
// let myList = $("points.of.sale li")
// myList.on("click", function () {
//     $(this).css("background": "pink");
//     myList.off("click");
// });

// Event Helper:
// ------------- //

// Helpers are a shorthand syntax for events.
// The first parameter (even type) to element directly then adding a callback function to it.
// $("#leader-banner").click(function(){
//     alert("You click me!");
// });

// Document Ready vs Window Load:
// ------------------------------ //

// $(document).ready:
// The state when the active page is loaded.
// $(document).ready(function(){
//     alert("The Document is ready!")
// });
// A short hand for doc.ready method: $(function(){})

// $(window).load:
// The state when the whole site is loaded including media.
// $(window).load(function(){
//     alert("The Window is loaded!")
// });

// Event Object:
// ------------- //

// Events have many properties and they are called Event Object.
// The parameter of the callback function of the even refers to the even itself.
// $(document).read(function(e){
//     console.log(e.target);
//     console.log("The type of the event is:", e.type);
//     console.log("The X co-ordinate of the page is:" + e.pageX);
//     console.log("The Y co-ordinate of the page is:" + e.pageY);
//     e.stopPropagation();
// });


// ================================================================================================= //


// Animations:
// ___________ //


// Animations are the state of changing from one style to another.

// .animate():
// The animation method takes 4 parameter '.animate(CSS, time, easing, callback)'.
// CSS: The animation can be applied only numerical CSS properties.
// Time: The time of the animation progress in ms.
// Easing: 1-'swing(default)': starts slow then speed up. 2- 'linear': standard speed.
// Callback: a callback function (optional).

// Example:
// $(document).ready(function(){

//     function complete(){
//         alert("Animation Completed!");
//     }

//     $("section > h2").click(function(){
//         $(this).animate({"width": "500px", "height": "100px"}, 1000, "linear", complete);
//     });
// });

// Fading:
// ------- //

// .fadeIn():
// .fadeOut: (Completely the opposite of fadeIn)
// Fading in the matched element from its current capacity to zero capacity.
// The place of the element is removed after the fading finishes.
// One optional parameter: time of progress.
// $(document).ready(function(){
//     $("section > h2").click(function(){
//         $(this).fadeIn(2000).fadeOut(500);
//     });
// });

// .fadeTo:
// Fading in the matched element from its current capacity to another matched capacity.
// Two parameters are required: (time & the new capacity)
// $(document).ready(function(){
//     $("section > h2").click(function(){
//         $(this).fadeTo(500, 0.2)
//         .fadeTo(500, 0.6)
//         .fadeTo(500, 0.2)
//         .fadeTo(500, 0.6)
//         .fadeTo(500, 0.2)
//         .fadeTo(500, 0.6);
//     });
// });

// Hiding & Showing Elements:
// -------------------------- //

// .hide():
// .show(): (Completely the opposite of hide)
// Hiding the matched element.
// The place of the element is removed after the fading finishes.
// One optional parameter: time of progress.
// $(document).ready(function(){
//     $("section > h2").click(function(){
//         $(this).hide(1000).show(1000);
//     });
// });

// .toggle():
// Hide the element of the first click, then showing it back on the second click.
// One optional parameter: time of progress.
// The event should be applied on an external element to show the element back after it disappeared. 
// $(document).ready(function(){
//     $("img[alt=map]").click(function(){
//         $("section > h2").toggle(1000).toggle(1000);
//     });
// });

// Sliding:
// -------- //

// .slideUp():
// .slideDown(): (Completely the opposite of slideUp)
// Reducing the height of the element from current to zero.
// Can takes two parameters: time of progress and a callback function.

// .slideToggle():
// Slides up then slides down.
// Can takes two parameters: time of progress and a callback function.

// One example for all slides:
// --------------------------- //
// let slideButtons = "<div class='slide-button-up'>Slide Up</div>" +
//                 "<div class='slide-button-down'>Slide Down</div>" +
//                 "<div class='slide-button-toggle'>Slide Toggle</div>";
// $(".button").prepend(slideButtons)

// $(document).ready(function(){

//     $("div.slide-button-up").click(function(){
//         $("#lead-banner").slideUp(1000);
//     });

//     $("div.slide-button-down").click(function(){
//         $("#lead-banner").slideDown(1000);
//     });

//     $("div.slide-button-toggle").click(function(){
//         $("#lead-banner").slideToggle(1000, function(){
//             alert("The banner is toggled!");
//         });
//     }); 
// });


// Fading Animation Example:
// ------------------------- //

// $(document).ready(function(){

//     let allQuotes = $("blockquote");
//     let currentQuote = 0;

//     function changeQuote() {

//         $(allQuotes[currentQuote]).fadeOut(2000, function(){

//             if(currentQuote == allQuotes.length -1){
//                 currentQuote = 0;
//             } else {
//                 currentQuote++
//             }

//             $(allQuotes[currentQuote]).fadeOut(2000);

//         });
//     }

//     let quoteTime = setInterval(changeQuote, 3000);

// });

// Fading Sliding Example:
// ------------------------- //

// $(document).ready(function(){

//     let items = $("#points-of-sale li");

//     items.click(function(){
//         $(this).find("p").slideToggle(500);
//     });

// });


// ================================================================================================= //
