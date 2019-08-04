function toggle(c, f, btn) {
    if (c.style.display === 'none') {
      c.style.display = 'block';
      f.style.display = 'none';
    } else {
      c.style.display = 'none';
      f.style.display = 'block';
    }

    if (btn.innerHTML = "&deg;F ?") {
      btn.innerHTML = "&deg;C ?"
    } else {
      (btn.innerHTML = "&deg;F ?")
    }
  }

  export {toggle};