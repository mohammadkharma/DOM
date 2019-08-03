function getDate (tag, object) {
    let date = new Date(object.LocalObservationDateTime);
    tag.innerHTML = date.toDateString();
}
export {getDate};