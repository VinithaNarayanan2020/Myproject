      
        let btn1 = document.getElementById("pro-create");
        let btn2 = document.getElementById("cancel");
        let btn5 = document.getElementById("cancel1");
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
                        </ul>
                    
                `

            }
        }
        customElements.define("top-menu", HeaderMenu);

        class MyForm extends HTMLElement {

            constructor() {
                super();
               
            }

               connectedCallback() {

                this.render();
               }
               render() {
               
                this.innerHTML = `
                 <form>
                    <label>Name</label>
                    <input type="text" placeholder="enter name" id="name" />
                    <label>Description</label>
                    <input type="text" placeholder="enter  message" id="msg" />
                    <label>Description</label>
                    <select id="select">
                        <option value="Todo">Todo</option>
                        <option value="Inprogress">Inprogress</option>
                        <option value="Done">Done</option>
                    </select>
                   
                </form> 
                
                `
               }
           


        }
        customElements.define("my-form", MyForm);

        
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

        let tab_links = document.querySelectorAll(".overlay-menu a");
        let tab_section = document.querySelectorAll("section");
       
                
        tab_links.forEach((tablink, index) => {

           tablink.addEventListener("click", (e) => {
            e.preventDefault();
           
            tab_links.forEach(tablink => { tablink.classList.remove("active")});
            tablink.classList.add("active");
            let line = document.querySelector(".line");
            line.style.width = e.target.offsetWidth + "px";
            line.style.left = e.target.offsetLeft + "px";
            // let link_id = tablink.getAttribute("href").substring(1);
           
            // let section_id = document.getElementById(link_id);
            // section_id.scrollIntoView({
            //     behavior: 'smooth'
            //   });
            // window.scrollY( {
            //     top: section_id.offsetTop,
            //     behavior: "auto"
            // });

            
           
           })
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


    

       
