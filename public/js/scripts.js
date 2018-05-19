/*$.ajax({
	url: 'api/URL',
	type: 'POST',
	headers: {
		authorization: localStorage.getItem(TOKEN_ID)
	},
	data: data,
	contentType: "application/json;charset=utf-8",
	success: function (data) {},
});*/

function buildForm(parameters){
	let fields = JSON.parse(parameters), parameter, form = '', labelName, fieldId, fieldType;

	for ( let i=0;i < fields.length;i++){
		parameter = fields[i];
		
		switch(parameter) {
			case 'emailAddress':
				labelName = 'Email Address';
				fieldId = 'email_address';
				fieldType = 'text';
				break;

			case 'password':
				labelName = 'Password';
				fieldId = 'password';
				fieldType = 'password';
				break;

			case 'userName':
				labelName = 'User Name';
				fieldId = 'user_name';
				fieldType = 'text';
				break;

			case 'firstName':
				labelName = 'First Name';
				fieldId = 'first_name';
				fieldType = 'text';
				break;

			case 'lastName':
				labelName = 'Last Name';
				fieldId = 'last_name';
				fieldType = 'text';
				break;

			case 'phoneNumber':
				labelName = 'Phone Number';
				fieldId = 'phone_number';
				fieldType = 'number';
				break;
		}

		form += '<div id="' + fieldId + '" class="input"><label>' + labelName + '</label><input data-id="' + fieldId + '" type="' + fieldType + '" value="" placeholder="" /></div>';

	}

	return form;

}

function apiResult(){
	return Math.floor(Math.random() * Math.floor(10));
}

function clearField(e){
	if ( $(e.target).closest('.modal-form').hasClass('error') == true ) {
		$(e.target).closest('.modal-form').removeClass('error');
	}
}

function goBack(e){
	listeners.loadModal();
}

function continueToApp(e){
	$('#overlay, #loginForm').removeClass('active');
}

function startAudioRecording(e){
	$('.modal-action').html('<a href="#" onclick="stopRecording()" class="stopPhrase recording"><strong>Stop Recording</strong><span>2/2</span></a>');

	listeners.stopPhraseBtn();
}

function startFirstAudioRecording(e){
	$('.modal-action').html('<a href="#" onclick="stopRecording()" class="stopPhrase recording"><strong>Stop Recording</strong><span>2/2</span></a>');

	listeners.stopFirstPhraseBtn();
}


function stopAudioRecording(e){
	$('.modal-form').removeClass('error');

	if ( apiResult() > 3 ) {

		$('.modal-body h1').html('Success.');
		$('.modal-body p').html('Press <strong>continue</strong> to start using the application.');
		$('.modal-form').hide();
		$('.modal-action').html('<a href="#" class="continue"><strong>Continue to Application</strong></a>');

		listeners.continueBtn();

	} else {

		$('.modal-body h1').html('Oops.');
		$('.modal-body p').html('<strong>That recording did not match our records.</strong> Please repeat the phrase below.');
		$('.modal-form').html('<div class=\'phrase\'><h3>Toto, I\'ve a feeling we\'re not in Kansas anymore.</h3></div>');
		$('.modal-action').html('<a href="#" onclick="startRecording()" class="checkPhrase"><strong>Say Phrase</strong></a>');

		listeners.sayPhraseBtn();

	}
}

function stopFirstAudioRecording(e){
	$('.modal-form').removeClass('error');

	$('.modal-body h1').html('Success.');
	$('.modal-body p').html('Great. Please <strong>return to log in form</strong> to begin.');
	$('.modal-form').html('');
	$('.modal-action').html('<a href="#" class="goBack continue"><strong>Go to Login</strong></a>');

	listeners.goBackBtn();
}

function checkUserName() {
	var data = {},
		inputVal = $('.modal-form input').val();

	$('.modal-form').removeClass('error');

	if ( inputVal != '' ) {

		$('#loginForm > .content').removeClass('active');

		if ( apiResult() > 3 ) {

			$('.modal-body h1').html('Log In.');
			$('.modal-body p').html('Great. Now <strong>repeat the phrase</strong> below. Click <strong>say phrase</strong> when you\'re ready.');
			$('.modal-form').html('<div class=\'phrase\'><h3>Toto, I\'ve a feeling we\'re not in Kansas anymore.</h3></div>');
			$('.modal-action').html('<a href="#" onclick="startRecording()" class="checkPhrase"><strong>Say Phrase</strong><span>2/2</span></a>');

			listeners.sayPhraseBtn();

		} else {

			$('.modal-body h1').html('Oops.');
			$('.modal-body p').html('<strong>That usename is not registered.</strong> To enroll, enter your email address below.');
			$('.modal-form').html('<input type="text" value="" placeholder="--" />');
			$('.modal-action').html('<a href="#" class="enroll full"><strong>Sign Up</strong><span>1/2</span></a>');

			listeners.nameFieldBtn();
			listeners.enrollBtn();
		}

		$('#loginForm > .content').addClass('active');

	} else {

		$('.modal-form').addClass('error');

	}
}

function enrollUser() {
	var data = {};

	$('#loginForm > .content').removeClass('active');

	$('.modal-body h1').html('Create Account.');
	$('.modal-body p').html('To enroll, please <strong>fill out the form</strong> below.');
	$('.modal-form').html(buildForm(JSON.stringify(['userName','password','firstName','lastName','emailAddress','phoneNumber'])));
	$('.modal-action').html('<a href="#" class="recordPhase">Sign Up</a><a href="#" class="goBack">Go Back</a>');

	listeners.recordPhraseBtn();
	listeners.nameFieldBtn();
	listeners.goBackBtn();

	$('#loginForm > .content').addClass('active');
}

function enrollUserName() {
	var data = {};

	$('#loginForm > .content').removeClass('active');

	$('.modal-body h1').html('Speak Phrase.');
	$('.modal-body p').html('Great. Now <strong>repeat the phrase</strong> below. Click <strong>say phrase</strong> when you\'re ready.');
	$('.modal-form').html('<div class=\'phrase\'><h3>Toto, I\'ve a feeling we\'re not in Kansas anymore.</h3></div>');
	$('.modal-action').html('<a href="#" onclick="startRecording()" class="checkPhrase">Say Phrase<span>1/3</span></a>');

	sayFirstPhraseBtn();

	$('#loginForm > .content').addClass('active');
}

function loadModal() {
	$('#overlay, #loginForm, #loginForm > .content').removeClass('active');

	$('.modal-body h1').html('Log In.');
	$('.modal-body p').html('To access this site, please <strong>enter your user name</strong> to get started.');
	$('.modal-form').html(buildForm(JSON.stringify(['userName'])));
	$('.modal-action').html('<a href="#" class="checkName">Next<span>1/2</span></a><a href="#" class="enrollUser">Sign Up</a>');

	$('#overlay, #loginForm, #loginForm > .content').addClass('active');

	listeners.checkNameBtn();
	listeners.enrollUserBtn();
	listeners.nameFieldBtn();
}

(function($){

	setTimeout(
		function() {
			loadModal();
		}, 1500
	);

})(jQuery);

let listeners = {
	checkNameBtn: function() {
		let checkName = document.getElementsByClassName('checkName')[0];
		checkName.addEventListener('click',checkUserName,false);
	},

	enrollBtn: function() {
		let enroll = document.getElementsByClassName('enroll')[0];
		enroll.addEventListener('click',enrollUserName,false);
	},

	enrollUserBtn: function() {
		let enroll = document.getElementsByClassName('enrollUser')[0];
		enroll.addEventListener('click',enrollUser,false);
	},

	nameFieldBtn: function() {
		let nameField = document.getElementsByTagName('input')[0];
		nameField.addEventListener('click',clearField,false);
	},

	sayPhraseBtn: function() {
		let say = document.getElementsByClassName('checkPhrase')[0];
		say.addEventListener('click',startAudioRecording,false);
	},

	sayFirstPhraseBtn: function() {
		let say = document.getElementsByClassName('checkPhrase')[0];
		say.addEventListener('click',startFirstAudioRecording,false);
	},

	stopPhraseBtn: function() {
		let stop = document.getElementsByClassName('stopPhrase')[0];
		stop.addEventListener('click',stopAudioRecording,false);
	},

	stopFirstPhraseBtn: function() {
		let stop = document.getElementsByClassName('stopPhrase')[0];
		stop.addEventListener('click',stopFirstAudioRecording,false);
	},

	goBackBtn: function() {
		let back = document.getElementsByClassName('goBack')[0];
		back.addEventListener('click',goBack,false);
	},

	continueBtn: function() {
		let cont = document.getElementsByClassName('continue')[0];
		cont.addEventListener('click',continueToApp,false);
	},

	recordPhraseBtn: function() {
		let recordPhase = document.getElementsByClassName('recordPhase')[0];
		recordPhase.addEventListener('click',enrollUserName,false);
	},

	input: function(){
		let allInputs = document.getElementsByTagName('input');

		for (let a = 0; a < allInputs.length; a++) {
			allInputs[a].addEventListener('focusin',inputs.onFocus,false);
			allInputs[a].addEventListener('focusout',inputs.onFocusOut,false);
		}
	}
}

let inputs = {
	onFocus: function(e){
		$(e.target).closest('div').addClass('selected');	
	},

	onFocusOut: function(e){
		if ( e.target.value == '' ) $(e.target).closest('div').removeClass('selected');
	}
}

let modal = function(){
	this.username = function(){},
	this.password = function(){},
	this.firstname = function(){},
	this.lastname = function(){},
	this.email = function(){},
	this.phone = function(){},

	this.formData = function(){}
}

