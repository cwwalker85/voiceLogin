function checkUserName() {
	var data = {};

	$.ajax({
		url: 'api/URL',
		type: 'POST',
		headers: {
			authorization: localStorage.getItem(TOKEN_ID)
		},
		data: data,
		contentType: "application/json;charset=utf-8",
		success: function (data) {},
	});
}

function enrollUserName() {
	var data = {};

	$.ajax({
		url: 'api/URL',
		type: 'POST',
		headers: {
			authorization: localStorage.getItem(TOKEN_ID)
		},
		data: data,
		contentType: "application/json;charset=utf-8",
		success: function (data) {},
	});
}

function setupFirstVoiceCaptuer() {
	var data = {};

	$.ajax({
		url: 'api/URL',
		type: 'POST',
		headers: {
			authorization: localStorage.getItem(TOKEN_ID)
		},
		data: data,
		contentType: "application/json;charset=utf-8",
		success: function (data) {},
	});
}

function checkVoiceCapture() {
	var data = {};

	$.ajax({
		url: 'api/URL',
		type: 'POST',
		headers: {
			authorization: localStorage.getItem(TOKEN_ID)
		},
		data: data,
		contentType: "application/json;charset=utf-8",
		success: function (data) {},
	});
}