function toggle(c, f, btn) {
  if (c.style.display === 'none') {
    c.style.display = 'block';
    f.style.display = 'none';
  } else {
    c.style.display = 'none';
    f.style.display = 'block';
  }

  if (btn.innerHTML === "°F ?") {
    btn.innerHTML = "°C?"
  } else {
    btn.innerHTML = "°F ?";
  }
}

export {toggle};