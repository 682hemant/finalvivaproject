$(document).ready(function(){
  $("#caresel").click(function(){
    $(this).css({"opacity":"0.8"});
  });
});



$(document).ready(function(){
  $("#addto").click(function(){
    $(this).append("<span><i class='fas fa-check'></i><span>");
  });
});

function afterText() {
  var txt1 = "<p class='cart'> cart</p>";

    var txt3 = "<img class='cartimages' src ='images/small.jpg'>";        // Create element with HTML


  $("#productcate").before(txt1,txt3);    // Insert new elements after img
}


