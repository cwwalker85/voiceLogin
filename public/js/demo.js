let callNumber = '';
let theApp = {
    headline:'',
    bodyTxt:'',
    primaryBtnTxt: '',
    primaryBtnClass: '',
    primaryBtnExtra: '',
    secondaryBtnTxt: '',
    secondaryBtnClass: '',
    fields: [],

    endpoint: "https://www.firstdatavoicelock.com/hackitapi",

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
        loadLink: function(){
            //$('body').append('<a style="display:none;" id="save"></a>');
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
                    let fieldId = formFields[i].label.replace(' ','');
                    $('.modal-form').append('<input type="' + formFields[i].fieldType + '" value="" id="' + fieldId + '" placeholder="' + formFields[i].label + '">');
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
        enrollSuccess: function(){
            theApp.headline = 'Great!';
            theApp.bodyTxt = 'Now, please <span>log in</span> with your user name and phrase.',
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
            theApp.primaryBtnClass = 'startRecording';
            theApp.primaryBtnExtra = ' onclick="toggleRecording(this);"';
            theApp.secondaryBtnTxt = 'Enroll Now';
            theApp.secondaryBtnClass = 'enroll';
            theApp.fields = '<div class=\'phrase\'><h3>Welcome to the Hackathon. It\'s going to be fun.</h3></div>';
            theApp.launch.updateAll();
            theApp.init.listeners();
        },
        voiceCapture1: function(){
            theApp.headline = 'Say Phrase';
            theApp.bodyTxt = 'Great. Now <span>repeat the phrase</span> below. Click <span>say phrase</span> when you\'re ready.';
            theApp.primaryBtnTxt = 'Start Recording';
            theApp.primaryBtnClass = 'startRecording1';
            theApp.primaryBtnExtra = ' onclick="toggleRecording(this);"';
            theApp.secondaryBtnTxt = 'Enroll Now';
            theApp.secondaryBtnClass = 'enroll';
            theApp.fields = '<div class=\'phrase\'><h3>Welcome to the Hackathon. It\'s going to be fun.</h3></div>';
            theApp.launch.updateAll();
            theApp.init.listeners();
        },
        voiceCapture2: function(){
            theApp.headline = 'Say Phrase';
            theApp.bodyTxt = 'Awesome. Let\'s <span>repeat the phrase</span> two more times.';
            theApp.primaryBtnTxt = 'Start Recording 2/3';
            theApp.primaryBtnClass = 'stopRecording2';
            theApp.primaryBtnExtra = ' onclick="toggleRecording(this);"';
            theApp.secondaryBtnTxt = 'Enroll Now';
            theApp.secondaryBtnClass = 'enroll';
            theApp.fields = '<div class=\'phrase\'><h3>Welcome to the Hackathon. It\'s going to be fun.</h3></div>';
            theApp.launch.updateAll();
            theApp.init.listeners();
        },
        voiceCapture3: function(){
            theApp.headline = 'Say Phrase';
            theApp.bodyTxt = 'Last Time. Finally, please <span>repeat the phrase</span> one more time.';
            theApp.primaryBtnTxt = 'Start Recording 3/3';
            theApp.primaryBtnClass = 'stopRecording3';
            theApp.primaryBtnExtra = ' onclick="toggleRecording(this);"';
            theApp.secondaryBtnTxt = 'Enroll Now';
            theApp.secondaryBtnClass = 'enroll';
            theApp.fields = '<div class=\'phrase\'><h3>Welcome to the Hackathon. It\'s going to be fun.</h3></div>';
            theApp.launch.updateAll();
            theApp.init.listeners();
        },
        recording: function(){
            theApp.primaryBtnTxt = 'Stop Recording 1/3';
            theApp.primaryBtnClass = 'recording';
            theApp.primaryBtnExtra = ' onclick="toggleRecording(this);"';
            theApp.launch.updatePrimary();
            theApp.init.listeners();
        },
        stopRecording: function(){
            theApp.primaryBtnTxt = 'Submit Recording';
            theApp.primaryBtnClass = 'submit';
            theApp.primaryBtnExtra = '';
            theApp.launch.updatePrimary();
            theApp.init.listeners();
        },
        stopRecording1: function(){
            theApp.primaryBtnTxt = 'Submit Recording';
            theApp.primaryBtnClass = 'submit1';
            theApp.primaryBtnExtra = '';
            theApp.launch.updatePrimary();
            theApp.init.listeners();
        },
        recording2: function(){
            theApp.primaryBtnTxt = 'Stop Recording 2/3';
            theApp.primaryBtnClass = 'recording2';
            theApp.primaryBtnExtra = '';
            theApp.launch.updatePrimary();
            theApp.init.listeners();
        },
        stopRecording2: function(){
            theApp.primaryBtnTxt = 'Submit Recording';
            theApp.primaryBtnClass = 'submit2';
            theApp.primaryBtnExtra = '';
            theApp.launch.updatePrimary();
            theApp.init.listeners();
        },

        recording3: function(){
            theApp.primaryBtnTxt = 'Stop Recording 3/3';
            theApp.primaryBtnClass = 'recording3';
            theApp.primaryBtnExtra = '';
            theApp.launch.updatePrimary();
            theApp.init.listeners();
        },
        stopRecording3: function(){
            theApp.primaryBtnTxt = 'Submit Recording';
            theApp.primaryBtnClass = 'submit3';
            theApp.primaryBtnExtra = '';
            theApp.launch.updatePrimary();
            theApp.init.listeners();
        },
        
        /*saveEnroll1Data: function(response){
            theApp.data.biometricData = response;
            theApp.launch.enrollApi(theApp.data.username, theApp.data.biometricData, theApp.data.externalUserId, theApp.data.password, theApp.data.firstName,theApp.data.lastName, theApp.data.email, theApp.data.phoneNumber,theApp.data.created,theApp.data.lastUpdated,'first');
        },*/

        saveEnroll0: function(){
            theApp.data.biometricData = $('#save').attr('href');
            
            var reader = new FileReader();
            reader.readAsDataURL(testBlob); 
            reader.onloadend = function() {
                theApp.launch.enroll0(theApp.data.username, reader.result, theApp.data.externalUserId, theApp.data.password, theApp.data.firstName,theApp.data.lastName, theApp.data.email, theApp.data.phoneNumber,theApp.data.created,theApp.data.lastUpdated,'first');          
            }
        },
        enroll0: function(userId, fileData, externalUserId, password, firstName, lastName, email, phoneNumber, created, lastUpdated, callNumber) {
            fileData = fileData.replace('data:audio/wav;base64,','');
            var obj = {
                "userId": userId,
                "ExternalUserId": externalUserId,
                "Password": password,
                "FirstName": firstName,
                "LastName": lastName,
                "Email": email,
                "PhoneNumber": phoneNumber,
                "BiometricDataBase64": fileData,
                "Created": created,
                "LastUpdated": lastUpdated
            };

            $.ajax({
                url: theApp.endpoint + '/api/Authenticate',
                type: 'POST',
                crossDomain: true,
                async: false,
                data: JSON.stringify(obj),
                contentType: "application/json",
                beforeSend: function(){
                    $('.modal-action').find('a').html('<i style="font-size: 16px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></i>');
                },
                success: function (data) {
                    console.log(data);
                    if ( data.Message.indexOf('Success') > -1 ) {
                        let name = data.Message.split('] ')[1];
                        theApp.launch.success(name);
                    } else {
                        theApp.launch.login();
                    }
                },
                error: function(xhr,message){
                    console.log(xhr);
                }
            });

            //theApp.launch.success();
        },

        saveEnroll1: function(){
            theApp.data.biometricData = $('#save').attr('href');
            
            var reader = new FileReader();
            reader.readAsDataURL(testBlob); 
            reader.onloadend = function() {
                theApp.launch.enroll1(theApp.data.username, reader.result, theApp.data.externalUserId, theApp.data.password, theApp.data.firstName,theApp.data.lastName, theApp.data.email, theApp.data.phoneNumber,theApp.data.created,theApp.data.lastUpdated,'first');          
            }
        },
        enroll1: function(userId, fileData, externalUserId, password, firstName, lastName, email, phoneNumber, created, lastUpdated, callNumber) {
            fileData = fileData.replace('data:audio/wav;base64,','');
            var obj = {
                "userId": userId,
                "ExternalUserId": externalUserId,
                "Password": password,
                "FirstName": firstName,
                "LastName": lastName,
                "Email": email,
                "PhoneNumber": phoneNumber,
                "BiometricDataBase64": fileData,
                "Created": created,
                "LastUpdated": lastUpdated
            };

            $.ajax({
                url: theApp.endpoint + '/api/Enroll',
                type: 'POST',
                crossDomain: true,
                async: false,
                data: JSON.stringify(obj),
                contentType: "application/json",
                beforeSend: function(){
                    $('.modal-action').find('a').html('<i style="font-size: 16px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></i>');
                },
                success: function (data) {
                    if ( data.Message == 'Enrollment Success') {
                        callNumber = 'second';
                        theApp.launch.voiceCapture2();
                    }
                },
                error: function(xhr,message){
                    console.log(xhr);
                }
            });

            theApp.launch.voiceCapture2();
        },

        saveEnroll2: function(){
            theApp.data.biometricData = $('#save').attr('href');
            
            var reader = new FileReader();
            reader.readAsDataURL(testBlob); 
            reader.onloadend = function() {
                theApp.launch.enroll2(theApp.data.username, reader.result, theApp.data.externalUserId, theApp.data.password, theApp.data.firstName,theApp.data.lastName, theApp.data.email, theApp.data.phoneNumber,theApp.data.created,theApp.data.lastUpdated,'second');          
            }
        },
        enroll2: function(userId, fileData, externalUserId, password, firstName, lastName, email, phoneNumber, created, lastUpdated, callNumber) {
            fileData = fileData.replace('data:audio/wav;base64,','');
            var obj = {
                "UserId": userId,
                "ExternalUserId": externalUserId,
                "Password": password,
                "FirstName": firstName,
                "LastName": lastName,
                "Email": email,
                "PhoneNumber": phoneNumber,
                "BiometricDataBase64": fileData,
                "Created": created,
                "LastUpdated": lastUpdated
            };

            $.ajax({
                url: theApp.endpoint + '/api/Enroll',
                type: 'PUT',
                async: false,
                data: JSON.stringify(obj),
                contentType: "application/json;charset=utf-8",
                beforeSend: function(){
                    $('.modal-action').find('a').html('<i style="font-size: 16px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></i>');
                },
                success: function (data) {
                    console.log(data);
                    if (data.Message == 'Enrollment Success') {
                        theApp.launch.voiceCapture3();
                    }

                    if (callNumber == 'third') {
                        theApp.launch.success();
                    }
                },
                error: function(xhr){

                }
            });

            theApp.launch.voiceCapture3();

            if (callNumber == 'third') {
                theApp.launch.login();
            }
        },

        saveEnroll3: function(){
            theApp.data.biometricData = $('#save').attr('href');
            
            var reader = new FileReader();
            reader.readAsDataURL(testBlob); 
            reader.onloadend = function() {
                theApp.launch.enroll2(theApp.data.username, reader.result, theApp.data.externalUserId, theApp.data.password, theApp.data.firstName,theApp.data.lastName, theApp.data.email, theApp.data.phoneNumber,theApp.data.created,theApp.data.lastUpdated,'third');          
            }
        },
        /*enroll3: function(userId, fileData, externalUserId, password, firstName, lastName, email, phoneNumber, created, lastUpdated, callNumber) {
            fileData = fileData.replace('data:audio/wav;base64,','');
            var obj = {
                "UserId": userId,
                "ExternalUserId": externalUserId,
                "Password": password,
                "FirstName": firstName,
                "LastName": lastName,
                "Email": email,
                "PhoneNumber": phoneNumber,
                "BiometricDataBase64": fileData,
                "Created": created,
                "LastUpdated": lastUpdated
            };

            $.ajax({
                url: theApp.endpoint + '/api/Enroll',
                type: 'PUT',
                async: false,
                data: JSON.stringify(obj),
                contentType: "application/json;charset=utf-8",
                success: function (data) {
                    console.log(data);
                    if (data.Message == 'Enrollment Success') {
                        theApp.launch.voiceCapture3();
                    }

                    if (callNumber == 'third') {
                        theApp.launch.success();
                    }
                },
                error: function(xhr){

                }
            });

            theApp.launch.voiceCapture3();
        },*/
        /*enrollApi: function(userId, biometricData, externalUserId, password, firstName, lastName, email, phoneNumber, created, lastUpdated) {

            var obj = {
                "userId": userId,
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

            $.ajax({
                url: theApp.endpoint + '/api/Enroll',
                type: 'POST',
                async: false,
                data: JSON.stringify(obj),
                contentType: "application/json;charset=utf-8",
                success: function (data) {
                    console.log(data);
                    theApp.launch.voiceCapture2();
                },
            });
        },*/
        updateEnrollApi: function(userId, biometricData, externalUserId, password, firstName, lastName, email, phoneNumber, created, lastUpdated,callNumber) {

            var obj = {
                "UserId": userId,
                "ExternalUserId": externalUserId,
                "Password": password,
                "FirstName": firstName,
                "LastName": lastName,
                "Email": email,
                "PhoneNumber": phoneNumber,
                "BiometricDataBase64": fileData,
                "Created": created,
                "LastUpdated": lastUpdated
            };

            $.ajax({
                url: theApp.endpoint + '/api/Enroll',
                type: 'PUT',
                async: false,
                data: JSON.stringify(obj),
                contentType: "application/json;charset=utf-8",
                success: function (data) {
                    console.log(data);
                    //if (data.Message == 'Enrollment Success') {
                        theApp.launch.voiceCapture3();
                    //}

                    if (callNumber == 'third') {
                        theApp.launch.login();
                    }
                },
                error: function(xhr){

                }
            });
        },
        loginApi: function(userId, biometricData) {
            var obj = {
                "UserId": userId,
                "BiometricData": biometricData,
            };

            $.ajax({
                url: theApp.endpoint + '/api/Authenticate',
                type: 'POST',
                async: false,
                data: JSON.stringify(obj),
                contentType: "application/json;charset=utf-8",
                success: function (data) {
                    console.log(data);
                },
            });

        }, 
        success: function(name){
            if (name != undefined) {
                theApp.headline = name;
            } else {
                theApp.headline = 'Success';
            }
            //theApp.headline = 'Success';
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
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
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
                theApp.data.username = $('#UserName').val();
                theApp.launch.voiceCapture();
                break;
            
            case 'start': {
                theApp.launch.recording();
                break;
            }

            case 'startRecording': {
                theApp.launch.stopRecording();
                break;
            }

            case 'startRecording1': {
                theApp.launch.stopRecording1();
                break;
            }

            case 'start2': {
                theApp.launch.recording();
                break;
            }

            case 'start3': {
                theApp.launch.recording();
                break;
            }

            case 'recording':
                var reader, thisFile;
                reader = new FileReader();
                thisFile = $('#save').attr('href');
                //theApp.data.biometricData = reader.readAsArrayBuffer(thisFile);
                theApp.data.biometricData = thisFile;
                theApp.launch.loginApi(theApp.data.username, theApp.data.biometricData);
                break;

            case 'enroll':
                theApp.launch.enroll();
                break;

            case 'signup':
                theApp.data.username = $('#UserName').val();
                theApp.data.firstName = $('#FirstName').val();
                theApp.data.lastName = $('#LastName').val();
                theApp.data.phoneNumber = $('#PhoneNumber').val();
                theApp.data.email = $('#EmailAddress').val();
                theApp.launch.voiceCapture1();
                break;

            case 'stopRecording1':
                theApp.launch.recording1();
                break;
            
            case 'submit':
                theApp.launch.saveEnroll0();
                break;

            case 'submit1':
                theApp.launch.saveEnroll1();
                break;

            case 'stopRecording2':
                theApp.launch.stopRecording2();
                break;

            case 'submit2':
                theApp.launch.saveEnroll2();
                break;

            case 'stopRecording3':
                theApp.launch.stopRecording3();
                break;

            case 'submit3':
                theApp.launch.saveEnroll3();
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
    theApp.launch.loadLink();
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

function arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}

function blobToFile(theBlob, fileName){
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
}