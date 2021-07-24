// get date day + month + year

var dateFun= new Date(),
    userName = document.getElementsByClassName("name")[0],
    date = document.getElementsByClassName("dayDate")[0].children[0],
    tasksContainer = document.getElementsByClassName("tasksCont")[0],
    tasksLenght = document.getElementsByClassName("taskNum")[0],
    addBut = document.getElementsByClassName("addBut")[0],
    put = document.getElementsByClassName("put")[0],
    index = 2,
    trashing = document.getElementsByClassName("trashing");
    
    date.innerHTML = dateFun.getDate() + "th " +  " " +  dateFun.toLocaleString('default', { month: 'long' }) + " " + dateFun.getFullYear();
    
    // set user name on onload page
    
    window.onload = function(){
        userName.innerHTML = prompt("Please enter your name");
    }
    
    // get tasks length function
    
    function tasksLen(){
        tasksLenght.children[0].children[0].innerHTML  = tasksContainer.children.length;
    }
    tasksLen();
    
    // charkar function
    
    
    
    addBut.onclick = function chakar(){
        taskSection = document.createElement("div");
        task = document.createElement("div");
        checkBox = document.createElement("div");
        trash = document.createElement("div");
        rightIcon =  document.createElement("i");
        input = document.createElement("input");
        label = document.createElement("label");
        hour = document.createElement("sapn");
        trashIcon = document.createElement("i");
        
        // add class to created elements
        taskSection.classList.add("taskSection");
        task.classList.add("task");
        checkBox.classList.add("checkBox");
        trash.classList.add("trash");
        hour.classList.add("hour");
        rightIcon.classList.add("fa");
        trashIcon.classList.add("fa");
        trashIcon.classList.add("trashing");
        
        
        //appaned created elements to tasksContainer
        taskSection.appendChild(task);
        task.appendChild(checkBox);
        task.appendChild(trash);
        trash.appendChild(hour);
        trash.appendChild(trashIcon);
        checkBox.appendChild(input);
        checkBox.appendChild(label);
        checkBox.appendChild(rightIcon);
        
        // set values to created elements
        rightIcon.innerHTML = "\uf054";
        trashIcon.innerHTML = "\uf2ed";
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        hour.innerHTML = addZero(dateFun.getHours()) + ":" + addZero(dateFun.getMinutes());


        //set attribuets to created input chackBox and label
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", index);
        input.setAttribute("name", index);
        label.setAttribute("for", index);
        label.innerHTML = put.value;
        put.value = "";
        
        tasksContainer.appendChild(taskSection)
        
        // tasks length
        tasksLen();
        trashh();
        index++;

    }

function trashh(){
    for(i=0; i<tasksContainer.children.length; i++){
        trashing[i].setAttribute("value" ,i );
        tasksArray = Array.from(tasksContainer.children);
        trashing[i].onclick = function(){
            tasksArray[this.getAttribute("value")].remove();
            tasksLen();
        }
    }
}