$(function (){
	$('.color').on('click', function(){
		var color = $(this).data("week")
		var week = "." + color
		show(week)
	}) 
});

function show(week){
	if (!$(week).hasClass("active")) {
		$('.hide').removeClass('hide')
		$('.active').addClass('hide').removeClass('active')
		$(week).addClass('active')
	}
}


// var week;

// $(function() {
// 	$('#blue').click(function() {
//         week = '.week1';
//         change_panel(week);

//     });
// 	$("#red").click(function() {
// 		week = '.week2';
// 		change_panel(week);
// 	});
// })

// function change_panel(week) {
// 	if ($(week).hasClass('active')) {
// 		console.log("don't hide it");
// 	} else {
// 		$('.hide').removeClass('hide')
// 		$('.active').addClass('hide').removeClass('active');
// 		$(week).addClass('active');
// 	}
// }



