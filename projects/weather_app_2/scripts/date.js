function getDate (tag) {
    const now = new Date();
    const day = now.toLocaleString();
    tag.innerText = day;
}
export {getDate};