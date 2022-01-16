if($(window).width()>768){
    

$("#Open,.abc p").click(function () {
  $("#LC").css("width", "85%");
  $(".div1").css("width", "85%");
  $(".Main2").css("opacity", "0");
  $(".div1").css("opacity", "1");
  $(".div3").css("width", "85%");
  $(".div2").css("width", "85%");
  $(".Overlay").css("cursor", "pointer");
  $(".Overlay").css("display", "block");
});
$(".Overlay").click(function () {
  $(".Main2").css("width", "85%");

  $(".div3").css("width", "5%");
  $(".Main2").css("opacity", "1");
  $(".Main2").css("cursor", "");
  $(".Overlay").css("display", "none");
  // $(".div3").css("opacity","0")
});
$(".div3").click(function () {
  // $(".Main2").css("width","5%")
  // $(".Main2").css("opacity","0")
  $(this).css("width", "85%");
  $(".div2").css("width", "5%");
  $(".div1").css("width", "5%");
  $(".Main2").css("opacity", "0");
  $(".div3").css("opacity", "1");
  $(".Overlay").css("cursor", "pointer");
  $(".Overlay").css("display", "block");

});
$(".Overlay").click(function () {
  $(".Main2").css("width", "85%");

  $(".div3").css("width", "5%");
  $(".Main2").css("opacity", "1");
  $(".Main2").css("cursor", "");
  $(".Overlay").css("display", "none");
  // $(".div3").css("opacity","0")
});

$(".div2").click(function () {
  // $(".Main2").css("width","5%")
  // $(".Main2").css("opacity","0")
  $(this).css("width", "85%");
  $(".Main2").css("opacity", "0");
  $(".div2").css("opacity", "1");
  $(".div1").css("width", "5%");
  $(".div3").css("width", "85%");
  $(".Overlay").css("cursor", "pointer");
  $(".Overlay").css("display", "block");

});
$(".Overlay").click(function () {
  console.log("1");
  $(".Main2").css("width", "85%");
  $(".div2").css("width", "5%");
  $(".Main2").css("opacity", "1");
  $(".Main2").css("cursor", "");
  $(".div3").css("width", "5%");
  $(".Overlay").css("display", "none");
  // $(".div2").css("opacity","0")
});
$(".div1").click(function func() {
  // $(".Main2").css("width","5%")
  // $(".Main2").css("opacity","0")
  //   console.log("1");
  $(this).css("width", "85%");
  $(".Main2").css("opacity", "0");
  $(".div1").css("opacity", "1");
  $(".div3").css("width", "85%");
  $(".div2").css("width", "85%");
  $(".Overlay").css("cursor", "pointer");
  $(".Overlay").css("display", "block");

});
$(".Overlay").click(function () {
  $(".Main2").css("width", "85%");
  $(".div1").css("width", "5%");
  $(".div3").css("width", "5%");
  $(".div2").css("width", "5%");
  $(".Main2").css("opacity", "1");
  $(".Main2").css("cursor", "");
  $(".Overlay").css("display", "none");
  // $(".div3").css("opacity","0")
});
$(".head span,.abc p,.fab,.fas").hover(function () {
  $(this).css("cursor", "pointer");
});
}
// if ($(".div1").css("width", "5%")) {
//   $(".Overlay").css("display", "none");
// } else if ($(".div1").css("width", "85%")) {
//   $(".Overlay").css("display", "block");
// }

// $(".Main2,.Main").mousemove(function(e){
//     $("#Open").css("color", "rgb("+e.offsetX+","+e.offsetY+",25)");
//   console.log("x: "+ e.offsetX+ ","+ "y: " +e.offsetY); 
// })

// var x=$("#Open")
// x.addEventListener('mousemove', function color_change(e){
//  x.style.backgroundColor= "rgb("+e.offsetX+","+e.offsetY+",25)";
//   console.log("x: "+ e.offsetX+ ","+ "y: " +e.offsetY); 
// });
