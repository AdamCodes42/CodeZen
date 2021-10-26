function glow(){
    let glow = document.getElementById('about-glow');
    let hide = document.getElementById('about');
    {

      if (glow.style.display === "none"){
        glow.style.display = "block";
        hide.style.display = 'none';
      }
      else {
        glow.style.display = "none";
        hide.style.display = 'block';
      }
    }
  }