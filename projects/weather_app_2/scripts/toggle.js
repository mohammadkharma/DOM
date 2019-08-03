function toggle(tag) {
    if (tag.innerHTML == "Hello") {
      tag.innerHTML = "Swapped text!";
    } else {
      tag.innerHTML = "Hello";
    }
  }

  export {toggle};