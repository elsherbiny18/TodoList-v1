//The Main selectors.
let $form=document.getElementById("tasks");
let $getData=document.getElementById("getData");
let $addData=document.getElementById("addData");
let $showData=document.getElementById("showData");
let $clearAll=document.getElementById("reset");
let $warn=document.getElementById("warn");
let $counterDone=document.querySelector("#done");
let $doneAll=document.getElementById("doneAll");



//Add new task.
$addData.addEventListener("click",function(e){

    if($getData.value===""){
        warn();
           setTimeout(focus,600);
           e.preventDefault();
        }

    else{
        addTodo();
    e.preventDefault();
    }
    
    
    
})

//Clear all tasks
$clearAll.addEventListener("click",function(){
    
        document.querySelectorAll("#todo").forEach(function(e){
            e.remove();
            $counterDone.innerHTML="Completed Tasks = "+0;
        })
                    
})

$doneAll.addEventListener("click",function(){
    document.querySelectorAll(".done").forEach(function(e){
            e.checked=true;
            e.parentElement.style.textDecoration="line-through";
           e.parentElement.style.backgroundColor="#228B22";
           e.parentElement.style.color="#fff";
           e.parentElement.classList.add("number");
           $counterDone.innerText= "Completed Tasks = "+document.getElementsByClassName("number").length;
    })
})
/*All Functions.*/

//Add todo Function.
function addTodo() {
    let $complete=document.createElement("button");
        $complete.innerHTML="Complete";
        $complete.setAttribute("id","comp");
        $complete.setAttribute("class","comp");



        let addCheck=document.createElement("input");
        addCheck.setAttribute("type","checkbox");
        addCheck.setAttribute("id","comp");


    
    let $delete=document.createElement("button");
        $delete.innerHTML="Delete";
        $delete.setAttribute("id","del");
        $delete.setAttribute("class","del");

    let $todo=document.createElement("div");
        $todo.setAttribute("id","todo");
        

    let Task=$getData.value;

    let taskText=document.createTextNode(Task);

    $todo.appendChild(taskText);
    $todo.appendChild($delete);
   // $todo.appendChild($complete);
    $todo.appendChild(addCheck);
    $showData.appendChild($todo);
    
    $getData.value="";
    
    $delete.setAttribute("onclick","deleteTodo()");
    $complete.setAttribute("onclick","completeTodo()");

    addCheck.setAttribute("class","done");
addCheck.setAttribute("onclick","check()");
}

function deleteTodo(){
    let del=document.querySelector("#del");
    
        del.parentElement.remove();    
}

//Checked Function.
function check() {
    var $check=document.querySelectorAll(".done");
    for(var i=0;i<$check.length;i++){
       if($check[i].checked==true){
           $check[i].parentElement.style.textDecoration="line-through";
           $check[i].parentElement.style.backgroundColor="#228B22";
           $check[i].parentElement.style.color="#fff";
           $check[i].parentElement.classList.add("number");
          
           
       }
       else{
           $check[i].parentElement.style.textDecoration="none";
           $check[i].parentElement.style.backgroundColor="#F8F8FF";
           $check[i].parentElement.style.color="#777";
           $check[i].parentElement.classList.remove("number");
       }

       if(document.getElementsByClassName("number")===undefined){
        $counterDone.innerHTML="Completed Tasks = "+0;
       }else{
           $counterDone.innerText= "Completed Tasks = "+document.getElementsByClassName("number").length;
       }

    }
}
//Warn Function;
function warn() {
    $warn.style.display="block";
    $getData.style.borderColor="red";
}
function focus() {
    $warn.style.display="none";
    $getData.style.borderColor="#eee";
}

