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

function apiResult(){
	return Math.floor(Math.random() * Math.floor(10));
}

function clearField(e){
	if ( $(e.target).closest('.modal-form').hasClass('error') == true ) {
		$(e.target).closest('.modal-form').removeClass('error');
	}
}

function goBack(e){
	loadModal();
}

function continueToApp(e){
	$('#overlay, #loginForm').removeClass('active');
}

function startAudioRecording(e){
	$('.modal-action').html('<a href="#" onclick="stopRecording()" class="stopPhrase recording">Stop Recording<span>2/2</span></a>');

	stopPhraseBtn();
}

function startFirstAudioRecording(e){
	$('.modal-action').html('<a href="#" onclick="stopRecording()" class="stopPhrase recording">Stop Recording<span>2/2</span></a>');

	stopFirstPhraseBtn();
}


function stopAudioRecording(e){
	$('.modal-form').removeClass('error');

	if ( apiResult() > 3 ) {

		$('.modal-body h1').html('Success.');
		$('.modal-body p').html('Press <strong>continue</strong> to start using the application.');
		$('.modal-form').hide();
		$('.modal-action').html('<a href="#" class="continue">Continue to Application</a>');

		continueBtn();

	} else {

		$('.modal-body h1').html('Oops.');
		$('.modal-body p').html('<strong>That recording did not match our records.</strong> Please repeat the phrase below.');
		$('.modal-form').html('<div class=\'phrase\'><h3>Toto, I\'ve a feeling we\'re not in Kansas anymore.</h3></div>');
		$('.modal-action').html('<a href="#" onclick="startRecording()" class="checkPhrase">Say Phrase</a>');

		sayPhraseBtn();

	}
}

function stopFirstAudioRecording(e){
	$('.modal-form').removeClass('error');

	$('.modal-body h1').html('Success.');
	$('.modal-body p').html('Great. Please <strong>return to log in form</strong> to begin.');
	$('.modal-form').html('');
	$('.modal-action').html('<a href="#" class="goBack continue">Go to Login</a>');

	goBackBtn();
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
			$('.modal-action').html('<a href="#" onclick="startRecording()" class="checkPhrase">Say Phrase<span>2/2</span></a>');

			sayPhraseBtn();

		} else {

			$('.modal-body h1').html('Oops.');
			$('.modal-body p').html('<strong>That usename is not registered.</strong> To enroll, enter your email address below.');
			$('.modal-form').html('<input type="text" value="" placeholder="--" />');
			$('.modal-action').html('<a href="#" class="enroll full">Sign Up<span>1/2</span></a>');

			nameFieldBtn();
			enrollBtn();
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
	$('.modal-body p').html('To enroll, <strong>enter your email address</strong> below.');
	$('.modal-form').html('<input type="text" value="" placeholder="--" />');
	$('.modal-action').html('<a href="#" class="recordPhase">Sign Up<span>1/2</span></a><a href="#" class="goBack">Go Back</a>');

	recordPhraseBtn();
	nameFieldBtn();
	goBackBtn();

	$('#loginForm > .content').addClass('active');
}

function enrollUserName() {
	var data = {};

	$('#loginForm > .content').removeClass('active');

	$('.modal-body h1').html('Speak Phrase.');
	$('.modal-body p').html('Great. Now <strong>repeat the phrase</strong> below. Click <strong>say phrase</strong> when you\'re ready.');
	$('.modal-form').html('<div class=\'phrase\'><h3>Toto, I\'ve a feeling we\'re not in Kansas anymore.</h3></div>');
	$('.modal-action').html('<a href="#" onclick="startRecording()" class="checkPhrase">Say Phrase<span>2/2</span></a>');

	sayFirstPhraseBtn();

	$('#loginForm > .content').addClass('active');
}

function loadModal() {
	$('#overlay, #loginForm, #loginForm > .content').removeClass('active');

	$('.modal-body h1').html('Log In.');
	$('.modal-body p').html('To access this site, please <strong>enter your user name</strong> to get started.');
	$('.modal-form').html('<input type="text" value="" placeholder="--" />');
	$('.modal-action').html('<a href="#" class="checkName">Next<span>1/2</span></a><a href="#" class="enrollUser">Sign Up</a>');

	$('#overlay, #loginForm, #loginForm > .content').addClass('active');

	checkNameBtn();
	enrollUserBtn();
	nameFieldBtn();
}

(function($){

	setTimeout(
		function() {
			loadModal();
		}, 1500
	);

})(jQuery);

function checkNameBtn() {
	let checkName = document.getElementsByClassName('checkName')[0];
	checkName.addEventListener('click',checkUserName,false);
}

function enrollBtn() {
	let enroll = document.getElementsByClassName('enroll')[0];
	enroll.addEventListener('click',enrollUserName,false);
}

function enrollUserBtn() {
	let enroll = document.getElementsByClassName('enrollUser')[0];
	enroll.addEventListener('click',enrollUser,false);
}

function nameFieldBtn() {
	let nameField = document.getElementsByTagName('input')[0];
	nameField.addEventListener('click',clearField,false);
}

function sayPhraseBtn() {
	let say = document.getElementsByClassName('checkPhrase')[0];
	say.addEventListener('click',startAudioRecording,false);
}

function sayFirstPhraseBtn() {
	let say = document.getElementsByClassName('checkPhrase')[0];
	say.addEventListener('click',startFirstAudioRecording,false);
}

function stopPhraseBtn() {
	let stop = document.getElementsByClassName('stopPhrase')[0];
	stop.addEventListener('click',stopAudioRecording,false);
}

function stopFirstPhraseBtn() {
	let stop = document.getElementsByClassName('stopPhrase')[0];
	stop.addEventListener('click',stopFirstAudioRecording,false);
}

function goBackBtn() {
	let back = document.getElementsByClassName('goBack')[0];
	back.addEventListener('click',goBack,false);
}

function continueBtn() {
	let cont = document.getElementsByClassName('continue')[0];
	cont.addEventListener('click',continueToApp,false);
}

function recordPhraseBtn() {
	let recordPhase = document.getElementsByClassName('recordPhase')[0];
	recordPhase.addEventListener('click',enrollUserName,false);
}


