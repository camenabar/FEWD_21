var total = 0;

$(document).ready(function() {

	function add5() {
		total = total + 5;
		$('#result').html(total);
	}

	function add10() {
		total = total + 10;
		$('#result').html(total);

		if( total == 100 ){
			$('#result').addClass('you-did-it')
		}
	}

	function sub1() {
		total = total - 1;
		$('#result').html(total);
	}


	function reset() {
		total = 0;
		$('#result').html(total);
	}

	$('#add5').click(add5);
	$('#add10').click(add10);
	$('#sub1').click(sub1);
	$('#zero').click(reset);



});