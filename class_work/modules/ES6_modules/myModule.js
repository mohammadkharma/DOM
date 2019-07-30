function addTextBody(text) {
    const div = document.createElement('DIV');
    div.textContent = text;
    document.body.append(div);
}

function sayHello(name) {
    console.log(`Hello ${name}`);
}

export {addTextBody};
export default sayHello;