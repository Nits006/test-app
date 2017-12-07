
$(document).ready(function(){

	$("#btn-done").hide();
	$("#btn-back").hide();
	$("#family-age-section").hide();
	var ageSelector = '';
	for (var i = 18; i <= 100; i++) {
		ageSelector += '<option>'+i+' years</option>';
	}
	$("body").on('click', '.btn-open-modal', function() {
	    $('#healthInsuranceModal')
	        .prop('class', 'modal fade') // revert to default
	        .addClass( $(this).data('direction') );
	    $('#healthInsuranceModal').modal('show');
	});

	$("body").on('click' ,'.btn-continue', function() {

		var isCheckedAny = 0;
		var insuredMembers = '';
		$("#family-age-section form").html('');
		$('.family-checkbox:checked').map(function()
	    {
	    	isCheckedAny = 1;
		    var ageContent = '<div class="form-group family-field-container"><div class="col-xs-4">'+
	            '<span class="family_text">'+$(this).val()+'</span></div>'+
	            '<div class="col-xs-7">'+
	                '<select class="form-control input-sm">'+
	                    ageSelector+
	                '</select>'+
	            '</div></div></div>';
	        insuredMembers += $(this).val()+', ';
	        $("#family-age-section form").append(ageContent);
	    }).get();
		if(isCheckedAny == 0) {
			$("#validateMsg").text('Please select atleast 1 member to be insured.');
			return false;
		}

	    $(".member-content").text(insuredMembers);
	    $("#btn-back").show();
	    $("#btn-done").show();
	    $(".btn-continue").hide();
	    $("#family-section").hide();
	    $("#family-age-section").show();
	});

	$("body").on('click' ,'.family-checkbox', function() {
		if($(this).val() == '') {

		}
		$("#validateMsg").text('');
	});

	$("body").on('click' ,'#btn-back', function() {
		$("#btn-back").hide();
		$("#btn-done").hide();
	    $(".btn-continue").show();
		$("#family-age-section").hide();
		$("#family-section").show();
	});

});