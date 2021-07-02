function myFunction()
  {
    var dots= document.getElementById("dots");
    var moreText= document.getElementById("moreText");
    var myBtn=document.getElementById("myBtn");

    if(dots.style.display ==="none") 
    {
      dots.style.display = "inline";
     moreText.style.display = "none";
     myBtn.innerHTML = "Read more";
    }
       else
       {
      dots.style.display = "none";
      moreText.style.display = "inline";
      myBtn.innerHTML = "Read less";
    }
  }
