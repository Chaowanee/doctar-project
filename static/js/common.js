function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}
$(document).on("change", "#month",function(){
	amount_day = daysInMonth($("#month").val(),$("#year").val())
	$("#day").html("")
	for(i = 1; i< amount_day+1;i++){
		$("#day").append(new Option(i))
	}
});
$(document).on("change", "#year",function(){
	amount_day = daysInMonth($("#month").val(),$("#year").val())
	$("#day").html("")
	for(i = 1; i< amount_day+1;i++){
		$("#day").append(new Option(i))
	}
});

function join_event(event_id) {
	$.ajax({
		url: 'api/event_people.php',
		type: 'post',
		data: {"type":"add","event_id":event_id},
		success: function(result){
			result = JSON.parse(result)
			if(result['status'] == "success"){
				message = "ทำการขอเข้าร่วมเรียบร้อยแล้ว กรุณารอการยืนยัน"
			}
			else{
				message = "error"
			}
			$.ajax({
				url: 'api/modal.php',
				type: 'post',
				data: {"message":message},
				success: function(result){
					location.reload()
				}
			})
		}
	})
}

function delete_from_event(event_id, user_id) {
	$.ajax({
		url: 'api/event_people.php',
		type: 'post',
		data: {"type":"delete","user_id":user_id,"event_id":event_id},
		success: function(result){
			result = JSON.parse(result)
			if(result['status'] == "success"){
				message = "ทำการลบเรียบร้อยแล้ว"
			}
			else{
				message = "error"
			}
			$.ajax({
				url: 'api/modal.php',
				type: 'post',
				data: {"message":message},
				success: function(result){
					location.reload()
				}
			})
		}
	})
}

function accept_to_event(event_id, user_id) {
	$.ajax({
		url: 'api/event_people.php',
		type: 'post',
		data: {"type":"accept","user_id":user_id,"event_id":event_id},
		success: function(result){
			result = JSON.parse(result)
			if(result['status'] == "success"){
				message = "ยอมรับเรียบร้อยแล้ว"
			}
			else{
				message = "error"
			}
			$.ajax({
				url: 'api/modal.php',
				type: 'post',
				data: {"message":message},
				success: function(result){
					location.reload()
				}
			})
		}
	});
}