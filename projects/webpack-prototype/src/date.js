function getDate (tag, object) {
    const date = new Date(object.LocalObservationDateTime);
    tag.innerHTML = date.toDateString();
}


export {getDate};