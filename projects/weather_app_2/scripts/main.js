import {conditionsState} from './conditions.js'
conditionsState();
import {dateState} from './date.js'
dateState();
import {toggleState} from './toggle.js'
toggleState();

console.log('main.js is ready');
// ------------------------------------------------------- //

const API_key = "uLcGCTGBk2tvfKmztREtgRCGXG1U17sG";
fetch(API_key).then(r => {
    console.log(r);
}).catch(err => console.log(err))