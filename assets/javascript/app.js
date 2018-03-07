 
 
 var timer= 30;
 var count = 30;


// Count of Right, Wrong, and unanswered Qustions
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;



// ------------------------ Game Functions are below ------------------------
$(document).ready(function(){

	
	$("#main-secton").hide();
	$("#end-container").hide();



	$("#start_button").on("click", function(){

		$("#start_container").hide();


		$("#main-container").show();

		startCountdown();
		return;

	});

	
	function countdown(){

		count--;

    	$('#timer_number').html(count + " Seconds");


			$("#done_button").on("click", function(){

			
            count = 0; 
            return;

			});


			
			if(count == -1){
				timeUp();

				$("#main-container").hide();

			}


	}

	function startCountdown(){

		setInterval(countdown, 1000);

	}


	function timeUp(){


	
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();

		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Kimberly"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Zip Code"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "Friends"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Family Matters"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "Baby One More Time"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "RL Stine"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q7 == undefined){
			unansweredCount++;
		}
		else if(Q7 == "Ash"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q8 == undefined){
			unansweredCount++;
		}
		else if(Q8 == "Alanis Morissette"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q9 == undefined){
			unansweredCount++;
		}
          		else if(Q9 == "Airheads"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q10 == undefined){
			unansweredCount++;
		}
		else if(Q10 == "Crash"){
			correctCount++;
		}
		else{
			wrongCount++;
		}
        $("#end_container").show();

		$('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);

	



	}

});
