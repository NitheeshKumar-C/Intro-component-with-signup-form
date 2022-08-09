var inputElement, currentInputField, parentNode, errorMessageElement, errorIconElement, validInputImg;
var isValid=true;
function validate(inputId){
    inputElement=document.getElementById(inputId);
    currentInputField=inputElement.getAttribute("placeholder");

    parentNode=document.getElementById(inputId).parentElement;
    errorMessageElement=parentNode.getElementsByTagName("p")[0];
    errorIconElement=parentNode.getElementsByTagName("img")[0];
    validInputImg=parentNode.getElementsByTagName("i")[0];
    if(currentInputField=="First Name"||currentInputField=="Last Name"){
        var value=inputElement.value;
        const regex = new RegExp('^([a-z|A-Z]+ ?[a-z|A-Z]*){0,15}$');
        if(!regex.test(value)){
            var message="Numberic or Special character value is not allowed";
            inValid(message);
        }
        else{
            valid(value);
        }
    }
    else if(currentInputField=="Email Address"){
        var value=inputElement.value;
        const regex = new RegExp('^([^0-9][a-z|A-Z]+\.?[0-9]*@[a-z]+[\.]{1}[a-z]{2,5}){0,}$');
        if(!regex.test(value)){
            var message="Enter valid mail ID";
            inValid(message);
        }
        else{
            valid(value);
        }
    }else{
        var value=inputElement.value;
        const regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/);
        const digit=new RegExp(/^(?=.*\d).{1,}$/);
        const capital=new RegExp(/^(?=.*[A-Z]).{1,}$/);
        const small=new RegExp(/^(?=.*[a-z]).{1,}$/);
        const scs=new RegExp(/^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{1,}$/);
        if(!regex.test(value)){
            if(!digit.test(value)){
                var message="Enter atleast one digit";
                inValid(message);
            }
            else if(!capital.test(value)){
                var message="Enter atleast one Capital letter";
                inValid(message);
            }
            else if(!small.test(value)){
                var message="Enter atleast one Capital letter";
                inValid(message);
            }
            else if(!scs.test(value)){
                var message="Enter atleast one Special character";
                inValid(message);
            }
            else{
                var message="passward length should be atleast 6";
                inValid(message);
            }
            if(value.length==0){
                errorIconElement.style.visibility="hidden";
                errorMessageElement.style.visibility="hidden";
                validInputImg.style.visibility="hidden";
                isValid=false;
            }
            
        }
        else{
            valid(value);
        }
    }
}

function inValid(message){
    errorIconElement.style.visibility="visible";
    errorMessageElement.innerHTML=message;
    errorMessageElement.style.visibility="visible";
    validInputImg.style.visibility="hidden";
    isValid=false;
}
function valid(value){
    errorIconElement.style.visibility="hidden";
    errorMessageElement.style.visibility="hidden";
    if(value.length!=0){
        validInputImg.style.visibility="visible";
        isValid=true;
    }else{
        validInputImg.style.visibility="hidden";
        isValid=false;
    }
}

// sendDetails()
function sendDetails(){
        var inputs=document.getElementsByTagName("input");
        var notEmpty=true;
        for(let i=0;i<inputs.length;i++){
            if(inputs[i].value==''){
                parentNode=inputs[i].parentElement;
                errorMessageElement=parentNode.getElementsByTagName("p")[0];
                errorIconElement=parentNode.getElementsByTagName("img")[0];
                validInputImg=parentNode.getElementsByTagName("i")[0];
                inValid(inputs[i].getAttribute("placeholder")+" should not be empty");
                notEmpty=false;
            }
        }
        if(isValid && notEmpty){
            window.confirm("Are you sure the entered details are correct?")?window.alert("You have sucessfully created an account"):"";
        }
        else{
            console.log("NO")
        }
}