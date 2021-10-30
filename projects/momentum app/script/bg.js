function setBg() {
  let today = new Date(),
      hour = today.getHours();

    
  if (hour < 12) {
    document.body.style.backgroundImage = "url('images/image1.jpg')";
    document.body.style.backgroundSize = "cover";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('images/image2.jpg')";
    document.body.style.backgroundSize = "cover";
  } else {
    document.body.style.backgroundImage = "url('images/image3.jpg')";
    document.body.style.backgroundSize = "cover";
  }
}

setBg();
