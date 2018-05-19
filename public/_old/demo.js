let theApp = {
    headline:'',
    bodyTxt:'',
    primaryBtnTxt: '',
    primaryBtnClass: '',
    primaryBtnExtra: '',
    secondaryBtnTxt: '',
    secondaryBtnClass: '',
    fields: [],

    endpoint: "http://ec2-18-232-141-12.compute-1.amazonaws.com/hackitapi",

    init: {
        listeners: function() {
            let primaryBtn = document.getElementsByClassName('modal-action')[0].getElementsByTagName('a')[0],
                secondaryBtns = document.getElementsByClassName('secondary')[0].getElementsByTagName('a');

            primaryBtn.addEventListener('click',theApp.submit,false);

            for ( let i = 0; i < secondaryBtns.length; i++ ){
                secondaryBtns[i].addEventListener('click',theApp.submit,false);
            }
        }
    },

    launch: {
        loadUI: function(){
            theApp.launch.login();
            theApp.launch.updateAll();
            theApp.init.listeners();
            $('#loginForm').addClass('active');
        },
        updateH1: function(){
            $('.modal-body').find('h1').html(theApp.headline);
        },
        updateTxt: function(){
            $('.modal-body').find('p').html(theApp.bodyTxt);
        },
        updateInput: function(){
            let formFields = theApp.fields;
            $('.modal-form').empty();
            
            if (typeof theApp.fields == 'string'){
                $('.modal-form').append(theApp.fields);
            } else {
                for (let i = 0; i < formFields.length; i++){
                    $('.modal-form').append('<input type="' + formFields[i].fieldType + '" value="" data-id="' + formFields[i].label + '" placeholder="' + formFields[i].label + '">');
                }
            }
        },
        updatePrimary: function(){
            $('.modal-action').empty();
            $('.modal-action').append('<a'+ theApp.primaryBtnExtra + ' href="" class="' + theApp.primaryBtnClass + '">' + theApp.primaryBtnTxt + '</a>');
        },
        updateSecondary: function(){
            if ( $('.secondary > a').length ) {
                $('.secondary > a').attr('class',theApp.secondaryBtnClass).text(theApp.secondaryBtnTxt);
            } else {
                $('.secondary').prepend('<a href="" data-type="btn" class="' + theApp.secondaryBtnClass + '">' + theApp.secondaryBtnTxt + '</a>');
            }
        },
        updateAll: function(){
            theApp.launch.updateH1();
            theApp.launch.updateTxt();
            theApp.launch.updateInput();
            theApp.launch.updatePrimary();
            theApp.launch.updateSecondary();
        },
        enroll: function(){
            theApp.headline = 'Enroll Today.';
            theApp.bodyTxt = 'To enroll, please <span>fill out the form</span> below.',
            theApp.primaryBtnTxt = 'Sign Up';
            theApp.primaryBtnClass = 'signup';
            theApp.primaryBtnExtra = '';
            theApp.secondaryBtnTxt = 'Log In';
            theApp.secondaryBtnClass = 'login';
            theApp.fields = [{"fieldType":"text","label":"User Name"},{"fieldType":"text","label":"First Name"},{"fieldType":"text","label":"Last Name"},{"fieldType":"text","label":"Email Address"},{"fieldType":"text","label":"Phone Number"}];
            theApp.launch.updateAll();
            theApp.init.listeners();
        },
        login: function(){
            theApp.headline = 'Log In.';
            theApp.bodyTxt = 'To access this, please <span>enter your user name</span> to get started.',
            theApp.primaryBtnTxt = 'Log In';
            theApp.primaryBtnClass = 'login';
            theApp.primaryBtnExtra = '';
            theApp.secondaryBtnTxt = 'Enroll Now';
            theApp.secondaryBtnClass = 'enroll';
            theApp.fields = [{"fieldType":"text","label":"User Name"}];
            theApp.launch.updateAll();
            theApp.init.listeners();
        },
        voiceCapture: function(){
            theApp.headline = 'Say Phrase';
            theApp.bodyTxt = 'Great. Now <span>repeat the phrase</span> below. Click <span>say phrase</span> when you\'re ready.';
            theApp.primaryBtnTxt = 'Start Recording';
            theApp.primaryBtnClass = 'continue';
            theApp.primaryBtnExtra = ' onclick="toggleRecording(this);"';
            theApp.secondaryBtnTxt = 'Enroll Now';
            theApp.secondaryBtnClass = 'enroll';
            theApp.fields = '<div class=\'phrase\'><h3>Welcome to the Hackathon. It\'s going to be fun.</h3></div>';
            theApp.launch.updateAll();
            theApp.init.listeners();
        },
        voiceCapture2: function(){
            theApp.headline = 'Say Phrase';
            theApp.bodyTxt = 'Great. Now <span>repeat the phrase</span> below. Click <span>say phrase</span> when you\'re ready.';
            theApp.primaryBtnTxt = 'Start Recording';
            theApp.primaryBtnClass = 'continue';
            theApp.primaryBtnExtra = ' onclick="toggleRecording(this);"';
            theApp.secondaryBtnTxt = 'Enroll Now';
            theApp.secondaryBtnClass = 'enroll';
            theApp.fields = '<div class=\'phrase\'><h3>Welcome to the Hackathon. It\'s going to be fun.</h3></div>';
            theApp.launch.updateAll();
            theApp.init.listeners();
        },
        voiceCapture3: function(){
            theApp.headline = 'Say Phrase';
            theApp.bodyTxt = 'Great. Now <span>repeat the phrase</span> below. Click <span>say phrase</span> when you\'re ready.';
            theApp.primaryBtnTxt = 'Start Recording';
            theApp.primaryBtnClass = 'continue';
            theApp.primaryBtnExtra = ' onclick="toggleRecording(this);"';
            theApp.secondaryBtnTxt = 'Enroll Now';
            theApp.secondaryBtnClass = 'enroll';
            theApp.fields = '<div class=\'phrase\'><h3>Welcome to the Hackathon. It\'s going to be fun.</h3></div>';
            theApp.launch.updateAll();
            theApp.init.listeners();
        },
        recording: function(){
            theApp.primaryBtnTxt = 'Stop Recording';
            theApp.primaryBtnClass = 'recording';
            theApp.primaryBtnExtra = ' onclick="toggleRecording(this);"';
            theApp.launch.updatePrimary();
            theApp.init.listeners();
        },
        recording2: function(){
            theApp.primaryBtnTxt = 'Stop Recording';
            theApp.primaryBtnClass = 'recording';
            theApp.primaryBtnExtra = ' onclick="toggleRecording(this);"';
            theApp.launch.updatePrimary();
            theApp.init.listeners();
        },
        recording3: function(){
            theApp.primaryBtnTxt = 'Stop Recording';
            theApp.primaryBtnClass = 'recording';
            theApp.primaryBtnExtra = ' onclick="toggleRecording(this);"';
            theApp.launch.updatePrimary();
            theApp.init.listeners();
        },
        enrollApi: function(userId, biometricData, externalUserId, password, firstName, lastName, email, phoneNumber, created, lastUpdated) {
            try {
                var request = new XMLHttpRequest(); 
                request.open("POST", theApp.endpoint + "/api/Enroll", false); 
                request.setRequestHeader("Content-type", "application/json");
                //request.setRequestHeader('Access-Control-Allow-Origin', '');
                var obj = {
                    "UserId": userId,
                    "ExternalUserId": externalUserId,
                    "Password": password,
                    "FirstName": firstName,
                    "LastName": lastName,
                    "Email": email,
                    "PhoneNumber": phoneNumber,
                    "BiometricData": biometricData,
                    "Created": created,
                    "LastUpdated": lastUpdated
                };
        
                request.send(JSON.stringify(obj)); // specify the credentials to receive the token on request
                return request.responseText;
            } catch (error) {
                console.log(error);
                return null;
            }
        },
        updateEnrollApi: function(userId, biometricData, externalUserId, password, firstName, lastName, email, phoneNumber, created, lastUpdated) {
            try {
                var request = new XMLHttpRequest(); 
                request.open("PUT", theApp.endpoint + "/api/Enroll", false); 
                request.setRequestHeader("Content-type", "application/json");
                //request.setRequestHeader('Access-Control-Allow-Origin', '');
                var obj = {
                    "UserId": userId,
                    "ExternalUserId": externalUserId,
                    "Password": password,
                    "FirstName": firstName,
                    "LastName": lastName,
                    "Email": email,
                    "PhoneNumber": phoneNumber,
                    "BiometricData": biometricData,
                    "Created": created,
                    "LastUpdated": lastUpdated
                };
        
                request.send(JSON.stringify(obj)); // specify the credentials to receive the token on request
                return request.responseText;
            } catch (error) {
                console.log(error);
                return null;
            }
        },
        loginApi: function(userId, biometricData) {
            try {
                var request = new XMLHttpRequest(); 
                request.open("POST", theApp.endpoint + "/api/Authenticate", false); 
                request.setRequestHeader("Content-type", "application/json");
                //request.setRequestHeader('Access-Control-Allow-Origin', '');
                var obj = {
                    "UserId": userId,
                    "BiometricData": biometricData,
                };
        
                request.send(JSON.stringify(obj)); // specify the credentials to receive the token on request
                return request.responseText;
            } catch (error) {
                console.log(error);
                return null;
            }
        }, 
        success: function(){
            theApp.headline = 'Success';
            theApp.bodyTxt = 'Press <span>continue</span> to start using the application.';
            theApp.primaryBtnTxt = 'Continue to Application';
            theApp.primaryBtnClass = 'success';
            theApp.primaryBtnExtra = '';
            theApp.fields = '';
            theApp.launch.updateH1();
            theApp.launch.updateTxt();
            theApp.launch.updateInput();
            theApp.launch.updatePrimary();
            theApp.init.listeners();
        },
        done: function(){
            $('#overlay').hide();
            $('#loginForm').removeClass('active');
        }
    },
    data: {
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        biometricData: '',
        created: '',
        lastUpdated: '',
        externalUserId: ''
    },
    submit: function(e){
        e.preventDefault();
        //
        let btnType = $(e.target).attr('class');

        switch (btnType) {
            case 'login':
                // 1- check if email exists to proceed to the next step. if success, go to step two and ask for them to valid their voice phrase
                theApp.data.username = $('input[data-id="User Name"]').val();
                theApp.launch.voiceCapture();
                break;
            
            case 'continue': {
                // 2- if voice phrase validates, take email/username and voice data and check against voiceit.
                theApp.launch.recording();
                break;
            }
            case 'recording':
                // 3- stops recording and logs in.
                var xhr, reader;
                
                if (window.XMLHttpRequest) {
                    xhr = new XMLHttpRequest();
                } else if (window.ActiveXObject) {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }

                thisFile = xhr.open("GET","demo.wav");                
                reader = new FileReader();
                //theApp.data.biometricData = reader.readAsArrayBuffer(thisFile);
                theApp.launch.loginApi(theApp.data.username, theApp.data.biometricData);
                theApp.launch.success();
                break;

            case 'enroll':
                theApp.data.username = $('input[data-id="User Name"]').val();
                theApp.data.firstname = $('input[data-id="First Name"]').val();
                theApp.data.lastname = $('input[data-id="Last Name"]').val();
                theApp.data.phone = $('input[data-id="Phone Number"]').val();
                theApp.data.email = $('input[data-id="Email Address"]').val();
                theApp.launch.voiceCapture();
                break;
            case 'enrollVoice1':
                theApp.launch.enrollApi(theApp.data.username, theApp.data.biometricData, theApp.data.externalUserId, theApp.data.password, theApp.data.firstName,theApp.data.lastName, theApp.data.email, theApp.data.phoneNumber,theApp.data.created,theApp.data.lastUpdated);
                break;
            case 'enrollVoice2':
                theApp.launch.updateEnrollApi(theApp.data.username, theApp.data.biometricData, theApp.data.externalUserId, theApp.data.password, theApp.data.firstName,theApp.data.lastName, theApp.data.email, theApp.data.phoneNumber,theApp.data.created,theApp.data.lastUpdated);
                break;
            case 'enrollVoice3':
                theApp.launch.updateEnrollApi(theApp.data.username, theApp.data.biometricData, theApp.data.externalUserId, theApp.data.password, theApp.data.firstName,theApp.data.lastName, theApp.data.email, theApp.data.phoneNumber, theApp.data.created,theApp.data.lastUpdated);
                break;
            case 'success': 
                theApp.launch.done();
                break;
        }
    }
}

let api = {
    runApi: function(req){
        $.ajax({
            url: "test.html",
            data: req,
            context: document.body,
            beforeSend: function(){},
            success:function(){}
        });
    }
}

$(document).ready(function(){
    theApp.launch.loadUI();
});

function enroll(userId, externalUserId, password, firstName, lastName, email, phoneNumber,
    biometricData, created, lastUpdated) 
{
    try {
        var request = new XMLHttpRequest(); 
        request.open("POST", endpoint + "/api/Enroll", false); 
        request.setRequestHeader("Content-type", "application/json");
        //request.setRequestHeader('Access-Control-Allow-Origin', '');
        var obj = {
            "UserId": userId,
            "ExternalUserId": externalUserId,
            "Password": password,
            "FirstName": firstName,
            "LastName": lastName,
            "Email": email,
            "PhoneNumber": phoneNumber,
            "BiometricData": biometricData,
            "Created": created,
            "LastUpdated": lastUpdated
        };

        request.send(JSON.stringify(obj)); // specify the credentials to receive the token on request
        return request.responseText;
    } catch (error) {
        console.log(error);
        return null;
    }
}

function authenticate(userId, externalUserId, password, firstName, lastName, email, phoneNumber,
    biometricData, created, lastUpdated) 
{
    try {
        var request = new XMLHttpRequest(); 
        request.open("POST", endpoint + "/api/Authenticate", false); 
        request.setRequestHeader("Content-type", "application/json");
        //request.setRequestHeader('Access-Control-Allow-Origin', '');
        var obj = {
            "UserId": userId,
            "ExternalUserId": externalUserId,
            "Password": password,
            "FirstName": firstName,
            "LastName": lastName,
            "Email": email,
            "PhoneNumber": phoneNumber,
            "BiometricData": biometricData,
            "Created": created,
            "LastUpdated": lastUpdated
        };

        request.send(JSON.stringify(obj)); // specify the credentials to receive the token on request
        return request.responseText;
    } catch (error) {
        console.log(error);
        return null;
    }
}

function getEnroll(userId, password) 
{
    try {
        var request = new XMLHttpRequest(); 
        request.open("GET", endpoint + "/api/Enroll?userId=" + userId + "&password=" + password, false); 
        request.setRequestHeader("Content-type", "application/json");
        //request.setRequestHeader('Access-Control-Allow-Origin', '');
        request.send(); // specify the credentials to receive the token on request
        return request.responseText;
    } catch (error) {
        console.log(error);
        return null;
    }
}

function updateEnroll(userId, externalUserId, password, firstName, lastName, email, phoneNumber,
    biometricData, created, lastUpdated) 
{
    try {
        var request = new XMLHttpRequest(); 
        request.open("PUT", endpoint + "/api/Enroll", false); 
        request.setRequestHeader("Content-type", "application/json");
        //request.setRequestHeader('Access-Control-Allow-Origin', '');
        var obj = {
            "UserId": userId,
            "ExternalUserId": externalUserId,
            "Password": password,
            "FirstName": firstName,
            "LastName": lastName,
            "Email": email,
            "PhoneNumber": phoneNumber,
            "BiometricData": biometricData,
            "Created": created,
            "LastUpdated": lastUpdated
        };

        request.send(JSON.stringify(obj)); // specify the credentials to receive the token on request
        return request.responseText;
    } catch (error) {
        console.log(error);
        return null;
    }
}