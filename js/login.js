$(document).ready(function(){
   
    $("#uname").on("input",function(){
        
        let unam= $("#uname").val();
        console.log(unam);
        if(unam=="admin"){
            $("#errunam").html(" ");
            $("#symuser").css("color","green");
        }else{
            $("#uname").focus();
            $("#errunam").html("Enter Valid Username *");
            $("#errunam").css("color","red");
            $("#symuser").css("color","red");
        }
    });
    $("#pass").on("input",function(){
        let pass=$("#pass").val();
        if(pass=="12345"){
            $("#errpass").html(" ");
            $("#sympass").css("color","green");
        }else{
            $("#pass").focus();
            $("#errpass").html("Enter Valid Password *");
            $("#errpass").css("color","red");
            $("#sympass").css("color","red");
        }

    });
    // $("#butt").click(function(){
    //     let unam= $("#uname").val();
    //     let pass=$("#pass").val();
    //     console.log(unam);
    //     console.log(pass);
    //     if(unam.trim()==""){
    //         $("#uname").focus();
    //         $("#errunam").html("Enter Valid Username *");
    //         $("#errunam").css("color","red");
    //         $("#symuser").css("color","red");
            
    //     }else if(pass.trim()==""){
    //         $("#pass").focus();
    //         $("#errpass").html("Enter Valid Password *");
    //         $("#errpass").css("color","red");
    //         $("#sympass").css("color","red");
    //     }else if((unam=="admin") && (pass=="12345")){
    //         console.log("login successfully");
    //         callback();
    //         return true;
    //     }else{
    //         $("#uname").focus();
    //         alert("Invalid Username or password");
    //         // $("#err").css("color","red");
    //         $("#symuser").css("color","red");
    //         $("#sympass").css("color","red");   
    //     }
    // });
});
function dispaly(callback){
    let unam=document.getElementById("uname");
    let pass=document.getElementById("pass");
    if(unam.value.trim()==""){
        $("#uname").focus();
        $("#errunam").html("Enter Valid Username *");
        $("#errunam").css("color","red");
        $("#symuser").css("color","red");
                
    }else if(pass.value.trim()==""){
        $("#pass").focus();
        $("#errpass").html("Enter Valid Password *");
        $("#errpass").css("color","red");
        $("#sympass").css("color","red");
    }else if((unam.value=="admin") && (pass.value=="12345")){
        console.log("login successfully");
        callback(true);
               
    }else{
        $("#uname").focus();
        $("#symuser").css("color","red");
        $("#sympass").css("color","red"); 
        document.getElementById("uname").innerHTML="";
        document.getElementById("pass").innerHTML= "";
        alert("Invalid Username or password");
                  
    }

}
function redirect(status){ 
    if(status){
        window.location.assign("index.html");
    }else{
        window.location.assign("login.html");
    }
    
}




    