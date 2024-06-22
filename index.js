        let btn1 = document.getElementById("pro-create");
        let btn2 = document.getElementById("cancel");
        let btn5 = document.getElementById("cancelBtn");
        let pop = document.querySelector(".popup");
        let pop1 = document.querySelector(".popup1");
        let inputValue = document.getElementById("name");
        let cr = document.getElementById("create");
        let btn3 = document.querySelector(".header-menu");
        let pro = document.querySelector(".projects");
        let content = document.querySelector(".content-box");
        let btn4 = document.getElementById("sprint");
        let popful = document.querySelector(".popupfull");
        let epic = document.getElementById("epic");
        let xbutton = document.getElementById("closeButton");
        let link_menu = document.querySelector(".overlay-menu");

        // side var custome element start        
        class MyCustomElements extends HTMLElement {
            constructor() {
                super();               
            }

               connectedCallback() {
                this.render();
               }
               render() {
                
                this.innerHTML = `
                <style> .sidebar ul a {
                        color: #fff;
                        transition: all 0.5s;
                    }
                    .sidebar ul a:hover {
                        color: rgb(217, 0, 255);
                        padding-left: 10px;
                    }
                    .sidebar ul li {
                        margin-bottom: 10px;
                    }
                    .logo {
                        font-size: 30px;
                        color: #e35fff;
                    }    
                    </style>                
                        <div class="link">

                            <a href="#" class="logo">Sprints</a>
                                    

                            <ul>
                                <li><a href="#">&spades; Home</a></li>
                                <li><a href="#">&spades; About</a></li>
                                <li><a href="#">&spades; Servces</a></li>
                                <li><a href="#">&spades; Portfolio</a></li>
                                <li><a href="#">&spades; Contact us</a></li>
                                   
                            </ul>
                                   
                                <h4>Projects</h4>
                                    <ul id="newproject"></ul> 
                                </div>               
                `
                

            }
        }
        customElements.define("my-sidebar", MyCustomElements);

        // custome header menu start

        class HeaderMenu extends HTMLElement {

            constructor() {
                super();
                
            }
            connectedCallback() {

                this.render();
            }
            render() {
                this.innerHTML = `
                <style>
                    .menu li {
                    display: inline-block;
                    margin-right: 15px;
                    }
                    .menu li a {
                    background-color: rgb(188 182 186 / 21%);
                    color: #000;
                    padding: 5px 20px;
                    border-radius: 30px;
                    }
                    .menu li a.active {
                    background-color: #b416d6;
                    color: #fff;
                    }

                    </style>
                
                    <ul class="menu">
                        <li><a href="#backlog" class="active">Backlog</a></li>
                        <li><a href="#board">Board</a></li>
                        <li><a href="#report">Report</a></li>
                        <li><a href="#epics">Epics</a></li>
                         <li><a href="#todo">Todo</a></li>
                        </ul>
                    
                `

            }
        }
        customElements.define("top-menu", HeaderMenu);

        // custome myform start

        class MyForm extends HTMLElement {

            constructor() {
                super();
               
            }

               connectedCallback() {

                this.render();
               }
               render() {
               
                this.innerHTML = `
                 <form id="dataform">
                    <label>Name</label>
                    <input type="text" placeholder="enter name" id="newname" />
                    <label>Description</label>
                    <textarea type="text" rows="5" id="newmsg" ></textarea>
                    <label>Choose Type</label>
                    <select id="select">
                        <option value="Todo">Todo</option>
                        <option value="Inprogress">Inprogress</option>
                        <option value="Done">Done</option>
                    </select>
                    <button type="submit" id="insert">Create</button> 
                   
                </form> 
                
                `
               }
           


        }
        customElements.define("my-form", MyForm);

        /// custome form end ///

        
        btn1.addEventListener("click", function() {
           pop.classList.add("active");
        });
    
        btn2.addEventListener("click", function() {

            pop.classList.remove("active");
        });
        btn4.addEventListener("click", function() {

           pop1.classList.add("active");
        });
        epic.addEventListener("click", function() {
            popful.classList.remove("hiden");
            popful.classList.add("visible");
         });
        btn5.addEventListener("click", function() {

           pop1.classList.remove("active");
        });
        xbutton.addEventListener("click", function() {

            popful.classList.remove("visible");
            popful.classList.add("hiden");
         });
        cr.addEventListener("click", function() {
            if (inputValue.value == "") {

                alert("Please enter projects");
            }
            else {
            let getoutput = inputValue.value;
            let ul = document.getElementById("newproject");
            let li = document.createElement("li"); 
            let a = document.createElement("a");
         
            //console.log(getoutput);
           let out =  ul.appendChild(li);
           let mine = out.appendChild(a);
           a.appendChild(document.createTextNode(inputValue.value));
           li.appendChild(a);
           pop.classList.remove("active");
           inputValue.value = "";
            pro.classList.add("hiden");
            btn3.classList.add("visible");
            content.classList.add("visible");
            }

          
          
        });

        let tabs = document.querySelectorAll(".menu a");
        let all_content = document.querySelectorAll(".content");

        tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                tabs.forEach ((tab) => { tab.classList.remove("active")});
                tab.classList.add("active");
                all_content.forEach(content => {content.classList.remove("active")});
                all_content[index].classList.add("active");
            })
        });

       //popup menu tab section start
        let tab_links = document.querySelectorAll(".overlay-menu a");
        //let tab_section = document.querySelectorAll(".section-box div"); 
        tab_links.forEach((tablink) => {
           tablink.addEventListener("click", (e) => {
            e.preventDefault();           
            tab_links.forEach(tablink => { tablink.classList.remove("active")});
            tablink.classList.add("active");
            let line = document.querySelector(".line");
            line.style.width = e.target.offsetWidth + "px";
            line.style.left = e.target.offsetLeft + "px";                     
           
           });
        });
        
            document.querySelectorAll('.overlay-menu a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
            e.preventDefault();            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);  
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
            });
        });

        var popup = document.getElementById("popup");
        var header = popup.querySelector(".overlay-menu");
        
        function updateHeaderPosition() {
          if (popup.scrollTop > 68) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }       
       
        popup.addEventListener("scroll", updateHeaderPosition);

         //popup menu tab section end

        // Borad tab data insert functionality start

        let myform = document.getElementById("dataform");
        let myname = document.getElementById("newname");
        let mymsg = document.getElementById("newmsg");
        let dropdown = document.getElementById("select");

     document.addEventListener('DOMContentLoaded', function() {
        myform.addEventListener("submit", (e)=> {
            e.preventDefault();
            let todo = document.querySelector(".todo .todo-content");
            let inp = document.querySelector(".inp .inp-content");
            let done = document.querySelector(".done .done-content");                    
            let span1 = document.getElementById("todo");
            let span2 = document.getElementById("inp");
            let span3 = document.getElementById("done");

            let item = document.createElement("div");
            let data1 = myname.value;
            let data2 = mymsg.value;
            let data3 = dropdown.value;
            let htmlData = `
            <h4>${data1}</h4>
            <p>${data2}</p>
            <p>Sprint Type: <b>${data3}</b></p>

            `;
            //console.log(htmlData);
            item.innerHTML += htmlData;
            if ( data1 == "" || data2 == "" || data3 == "") {
                alert("please enter your Board name");
            }
            else {
                if (data3 == "Todo") {
                    todo.appendChild(item);
                    let check_todolen = document.querySelectorAll(".todo-content div");                
                    txt1 = document.createTextNode(check_todolen.length);
                    span1.innerText = txt1.textContent;
                    alert("Board Item created successfully. Please view Board section");                   
                    
                }
                if (data3 == "Inprogress") {
                    inp.appendChild(item);
                    let check_inplen = document.querySelectorAll(".inp-content div");                
                    txt2 = document.createTextNode(check_inplen.length);
                    span2.innerText = txt2.textContent;
                
                    }
                if (data3 == "Done") {
                    done.appendChild(item);
                    let check_donelen = document.querySelectorAll(".done-content div");                
                    txt3 = document.createTextNode(check_donelen.length);
                    span3.innerText = txt3.textContent;                    
                }
               
            }        
            myform.reset();
        });
       
    });
     // Borad tab data insert functionality end


    /// get Data from Json and display the data
    function fetchAndDisplayData() {
    fetch("./data.json")
    .then(res => res.json())
    .then(data => { displayDataInTable(data.users)})
    .catch(error => console.error('Error loading JSON file:', error));
    }
    
    function displayDataInTable(data) {

        let insertData = document.querySelector("#innerData tbody"); 
            
               
        
        data.forEach((user) => {
                     
          let tr = document.createElement("tr");
          Object.values(user).forEach((obj) => {

            let td = document.createElement("td");
            td.textContent = obj;
            if (td.textContent == "Todo") {
                td.classList.add("orange"); 
            } 
            if (td.textContent == "InProgress") {
                td.classList.add("blue"); 
            } 
            if (td.textContent == "Done") {
                td.classList.add("green"); 
            } 
            tr.appendChild(td);
           


          });
          insertData.appendChild(tr);

        });
    }
    const report_btn = document.querySelector("#report");
    report_btn.addEventListener("click", fetchAndDisplayData);

    //todo tab functionality

    var add = document.getElementById("todo-form");
    var todo_content = document.getElementById("todocontent");
    var todo_name = document.getElementById("todo-name");
    var todo_msg = document.getElementById("todo-msg");

    add.addEventListener("submit", (e) => {
        e.preventDefault();

        let todo_name1 = todo_name.value;
        let todo_msg1 = todo_msg.value;
        let newTask = document.createElement("div");
        newTask.classList.add("task");
        newTask.setAttribute("draggable", "true");
        newTask.addEventListener("dragstart", () => {
            newTask.classList.add("is-dragging");
        });

        newTask.addEventListener("dragend", () => {
            newTask.classList.remove("is-dragging");
        });
          
        if (todo_name1 == "" || todo_msg1 == "") {
            alert("Please enter name and description")
        }
        else {

            let newData = `
                
            <h4>${todo_name1}</h4>
            <p>${todo_msg1}</p>
        `;
        newTask.innerHTML += newData;
        todo_content.appendChild(newTask); 
        }
        add.reset(); 
    });

    // add drag and drop functionality

    const draggables = document.querySelectorAll(".task");
       const droppables = document.querySelectorAll(".card");

        draggables.forEach((task) => {
            task.addEventListener("dragstart", () => {
                task.classList.add("is-dragging");
            });
            task.addEventListener("dragend", () => {
                task.classList.remove("is-dragging");
            });
        });

        droppables.forEach((zone) => {
            zone.addEventListener("dragover", (e) => {
                e.preventDefault();

                const bottomTask = insertAboveTask(zone, e.clientY);
                const curTask = document.querySelector(".is-dragging");

                if (!bottomTask) {
                zone.appendChild(curTask);
                } 
                else {
                zone.insertBefore(curTask, bottomTask);
                }
            });
        });

        const insertAboveTask = (zone, mouseY) => {
        const els = zone.querySelectorAll(".task:not(.is-dragging)");

        let closestTask = null;
        let closestOffset = Number.NEGATIVE_INFINITY;

        els.forEach((task) => {
            const { top } = task.getBoundingClientRect();

            const offset = mouseY - top;

            if (offset < 0 && offset > closestOffset) {
            closestOffset = offset;
            closestTask = task;
            }
        });

  return closestTask;
};



    
    


    

       
