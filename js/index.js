
// active Navbar 
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    let home= document.getElementById("home");
    document.body.style.backgroundImage="url('css/images/mainback.gif')";
    home.style.display="none"
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
     
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  //  ToDo List Dispaly JavaScript
  function todoList(){
    console.log("todolist");
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var todo= JSON.parse(this.responseText); 
          var txt="";
          txt += "<table border='6' class ='table table-striped' id='myTable'>"
          txt +="<tbody>"
          txt += "<thead><tr>"
            txt += "<th>" + " User Id "+ "</th>"
            txt += "<th>" + " ID " + "</th>" 
            txt += "<th>" + " Title" + "</th>"
            txt += "<th>" + " Completed " + "</th>"
            txt += "<th>" + " Status " + "</th>"
            txt+= "</tr></thead>";
          for (i=0;i<todo.length;i++) {
            
              txt += "<tr>"
              txt += "<td>" + todo[i].userId +"</td>"
              txt += "<td>" + todo[i].id  +"</td>"
              txt += "<td>" + todo[i].title +"</td>"
              txt +=  "<td id='complete'>" + todo[i].completed +" </td>"
              txt += "<td>" + check(todo[i].completed);   + "</td>"
              
              txt+= "</tr>";
          }
          // txt+="</tbody>"
          txt += "</table>"    
          document.getElementById("demo").innerHTML = txt;
        
          }
        };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    
    }
  // To Do List Ends
  //  Inputing Checkbox Dynamically
  function check(x){
    if(x==true){
      return '<input type="checkbox" checked disabled>'
    }else{
      
      
      $(document).ready(function(){
        var count=0;
        $("input").change(function(){
        
         
            if($(this).is(":checked")){
              count++;
              console.log(count +"count");
            }else{
              count--;
              console.log(count +"count");
            }
            var promise = new Promise(function(resolve,reject){

                if(count==5){
                let tab=document.getElementById("todo");
                tab.style.backgroundImage = "url('./css/images/cele.gif')";
                let mar=document.getElementById("marq");
                mar.innerHTML="Goals For Today Completed"
                document.getElementById("one").src="./css/images/celee.jpg"
                setTimeout(()=>{ resolve("Congrats.");},500);
              }else if(count<=5){
                reject("Not Completed! 'Complete atleast 5 Task'");
              }
          });
          promise
          .then(function(s) {alert(s +"5 Tasks have been Successfully Completed");})
          .catch(function(e){let mar=document.getElementById("marq"); mar.innerHTML="Goals For Today" +'"{'+ e +'}"'})
          
            var row = $(this).closest('tr');
            if($(this). prop("checked") == true){
              row.find('#complete').html('true');
            }else{
              row.find('#complete').html('flase');
            }
          });
        });
        return '<input type="checkbox" class="check" name="status" id ="check">'
    }
  }
 

