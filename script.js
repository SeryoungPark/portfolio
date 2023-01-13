$(document).ready(function(){
	$(window).mouseenter(function(){
		var images = new Array();
		images = [
		"1.jpg",
		"2.jpg",
		"4.jpg",
		"5.jpg",
		"6.jpg",
		"8.jpg",
		"9.jpg",
		"10.jpg",
		"11.png",
		"12.jpg",
		"13.jpg",
		"14.jpg"
		];
		var number = Math.floor(Math.random() * images.length);
		var img = images[number];
		$("#img").attr("src", img);
		
	});

	

  	 $('.open').click(function(){
  		if ($(this).attr("id")){
  	 		$(this).css({'color' : '#f44b0f'});
  	 		$(".open").not($(this)).css({'color' : '#adadad'})
  	 	}
  	 });
	
  		

	  	$('.works1').mouseenter(function(){
	  		$('#works1').show();
	  	});
	  	$('.works1').mouseleave(function(){
	  		$('#works1').hide()
	  	})

	  	$('.works2').mouseenter(function(){
	  		$('#works2').show();
	  	});
	  	$('.works2').mouseleave(function(){
	  		$('#works2').hide()
	  	})

	  	$('.works3').mouseenter(function(){
	  		$('#works3').show();
	  	});
	  	$('.works3').mouseleave(function(){
	  		$('#works3').hide()
	  	})

	  	$('.works4').mouseenter(function(){
	  		$('#works4').show();
	  	});
	  	$('.works4').mouseleave(function(){
	  		$('#works4').hide()
	  	})

	  	$('.works5').mouseenter(function(){
	  		$('#works5').show();
	  	});
	  	$('.works5').mouseleave(function(){
	  		$('#works5').hide()
	  	})

	  	$('.works6').mouseenter(function(){
	  		$('#works6').show();
	  	});
	  	$('.works6').mouseleave(function(){
	  		$('#works6').hide()
	  	})

	  	$('.works7').mouseenter(function(){
	  		$('#works7').show();
	  	});
	  	$('.works7').mouseleave(function(){
	  		$('#works7').hide()
	  	})

	  	$('.works8').mouseenter(function(){
	  		$('#works8').show();
	  	});
	  	$('.works8').mouseleave(function(){
	  		$('#works8').hide()
	  	})

	  	$('.works9').mouseenter(function(){
	  		$('#works9').show();
	  	});
	  	$('.works9').mouseleave(function(){
	  		$('#works9').hide()
	  	})

	  	$('.works10').mouseenter(function(){
	  		$('#works10').show();
	  	});
	  	$('.works10').mouseleave(function(){
	  		$('#works10').hide()
	  	})

	  	$('.works11').mouseenter(function(){
	  		$('#works11').show();
	  	});
	  	$('.works11').mouseleave(function(){
	  		$('#works11').hide()
	  	})

	  	$('.works12').mouseenter(function(){
	  		$('#works12').show();
	  	});
	  	$('.works12').mouseleave(function(){
	  		$('#works12').hide()
	  	})

	  	$('.works13').mouseenter(function(){
	  		$('#works13').show();
	  	});
	  	$('.works13').mouseleave(function(){
	  		$('#works13').hide()
	  	})

	  	$('.works14').mouseenter(function(){
	  		$('#works14').show();
	  	});
	  	$('.works14').mouseleave(function(){
	  		$('#works14').hide()
	  	})

	  	$('.works15').mouseenter(function(){
	  		$('#works15').show();
	  	});
	  	$('.works15').mouseleave(function(){
	  		$('#works15').hide()
	  	})

	  	$('.works16').mouseenter(function(){
	  		$('#works16').show();
	  	});
	  	$('.works16').mouseleave(function(){
	  		$('#works16').hide()
	  	})

	  	$('.works17').mouseenter(function(){
	  		$('#works17').show();
	  	});
	  	$('.works17').mouseleave(function(){
	  		$('#works17').hide()
	  	})
	})