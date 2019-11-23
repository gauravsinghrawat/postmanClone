# postmanClone
This the demo working clone of Post man API to make different type of requests to test our server API.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PostMan API clone</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="prism.css">
    <style>
        *{
            padding: 0;
            margin: 0;
        }
        body{
            width:100%;
            height: 100vh;
            background: url(m.jpg);
            background-attachment: fixed;
            color: #fff;
        }
        section{
            position: absolute;
            width: 100%;
            height: 100%;
        }
        .container-fluid{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
           text-align: left;
            background: rgba(1,1,88,.8);
            transition: .5s;
        }
        legend{
            color: #111;
            font-weight: 500;
            font-size: 26px;
        }
        #jsonText{
            width: 100%;
            overflow: scroll;
            background: #555;
            color:#fff;
        }
        #responseText{
            width: 100%;
            overflow: scroll;
            background: #555;
            color:#fff;
        }
        #notify>h3{
            transition: 1s;
        }
        .header{
            text-align: center; color: aliceblue;font-weight: 600;
            text-transform: uppercase; 
        }
        #responsePre{
            max-height: 500px;
        }
        /*panda css*/
        .panda-base{
                width: 200px;
            height: 150px;
            border: 10px solid black;
            border-radius: 50%;
            position: relative;
            display: block;
            left:40%;
            top:20%;
            background: yellow;
            overflow: visible;
            z-index:100;
            box-shadow: 0px 0px 30px    20px rgba(211,211,11,.8);
                animation: jump 9s ease-in-out infinite;
        }
        @keyframes  jump{
            0%{
                transform: translate(0px,0px);
            }
            10%{
                transform: translate(  40px,60px);
            }
            20%{
                transform: translate( -40px,50px);
            }
            30%{
                transform: translate( -60px, -60px);
            }
            40%{
                transform: translate(  80px,50px);
            }
             50%{
                transform: translate(  40px,60px);
            }
            60%{
                transform: translate( -40px,50px);
            }
            70%{
                transform: translate( -60px, -60px);
            }
            80%{
                transform: translate(  80px,50px);
            }
            
        }
     
        .ear1{
            position: relative;
            width:40px;
            height: 57px;
            background: black;
            border-radius: 50%;
            left:199px;
            bottom :  -30px;
            z-index: -1;
        }
          .ear2{
            position: relative;
            width:40px;
            height: 57px;
            background: black;
            border-radius: 50%;
            left:   -40px;
             bottom:20px;
            z-index:-1;
        }
        @keyframes mouth1{
           10%{
                transform: scale(1)rotate  Y( 10deg)
            }
            50%{
                transform: scale(1.3)rotateY(   -30deg);
            }
        }
        
        .body{
            position: relative;
            width: 170px;
            height: 180px;
            border:15px solid;
            border-radius:40%;
            left:-0px;
            bottom: 9px;
            background: #ff9999;
            z-index: -1;
            border-top-color: transparent;
            box-shadow: 0px 0px 30px 10px;
            animation: body 1s ease-in-out             infinite;
        }
        
        @keyframes body{
           30%{
                transform: scale(1);
            }
            50%{
                transform: scale(1);
                opacity: .9;
            }
        }
                       

        .eye-left{
            position: relative;
             width: 50px;
            height: 50px;
            background: black;
            border-radius: 50%;
            transform: rotate(-40deg);
            bottom: 310px;
            left: 20px;
        }
        
        .eye-right{
           position: relative;
            width: 50px;
            height: 50px;
            background: black;
            border-radius: 50%;
            transform: rotate(60deg);
            left:100px;
            bottom: 360px;
        }
        
        .eyeball-left{
            position: relative;
             width: 30px;
            height: 30px;
            background: #ffffff;
            border-radius: 50%;
            bottom: 410px;
            left: 25px;
         animation: eyeball 2s ease-in-out infinite;
        }
    
        .eyeball-right{
              position: relative;
            width: 30px;
            height: 30px;
            background: white;
            border-radius: 50%;
            left:110px;
            bottom: 440px;
            animation: eyeball 2s ease-in-out infinite;
        }
        
        .lnner-eyeball{
             width: 22px;
            height: 22px;
            background: #000000;
            border-radius: 50%;
            bottom: 410px;
            left: 55px;
         animation: eyeball 2s ease-in-out infinite;
        }
        
        .fnner-eyeball{
             width: 22px;
            height: 22px;
            background: #000000;
            border-radius: 50%;
            bottom: 410px;
            left: 55px;
         animation: eyeball 2s ease-in-out infinite;
        }
        
            @keyframes eyeball{
            15%{
                transform: scale(1) translate(5px,0px);
            }
            50%{
                transform: scale(1) translate(-1px,5px);
            }
        }
        .nose{
              position: relative;
            width: 60px;
            height: 10px;
            background: red;
            border:15px solid;
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
            left:52px;
            bottom: 410px;
            animation: mouth 1.9s ease-in-out infinite;
        }
        @keyframes mouth{
       60%{
                transform: scale(.9);
            }
    77%{
                transform: scale(1.3) rotateY(80deg);
        border-top-right-radius: 50px;
                    border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
        width: 9px;
        height: 20px;
            background: red;
            }
        }
        .hand-left{
            position: relative;
            width: 100px;
            height: 30px;
            background: #000006;
            border-radius: 20px;
            bottom: 400px;
            left: -70px;
            transform: rotate(50deg);
            z-index: -1;
            transform-origin: right;
            
            animation: legs 2s  ease-in   infinite;
        }
        .hand-right{
            position: relative;
            width: 100px;
            height: 30px;
            background: black;
            border-radius: 20px;
            bottom: 435px;
            left:  170px;
            transform: rotate(50deg);
            z-index: -1;
            transform-origin: left;
            animation: legs 2s ease-out                  infinite;
        }
        .bledder{
            position: relative;
            width: 90px;
            height: 40px;
            background: black;
            border-radius: 50px;
            bottom: 350px;
            left: 55px;
            animation: body 2s ease infinite;
        }
        .leg-left{
            position: relative;
            width: 40px;
            height: 90px;
            border-radius: 20px;
            background: black;
            bottom: 330px;
            left: 25px;
            transform-origin: top;
            transform: rotate(20deg);
            animation: legs 1s ease infinite;
        }
        .leg-right{
            position: relative;
            width: 40px;
            height: 90px;
            border-radius: 20px;
            background: black;
            bottom: 420px;
            left: 140px;
             transform-origin: top;
            transform: rotate( -20deg);
            animation: legs 1s ease-in-out infinite;
        }
        @keyframes legs{
           50%{
                transform: rotateX(0deg);
            }
            50%{
                transform: rotateX(40deg)
                    scale(1.2);
                opacity: .8;
            }
        }
    </style>
</head>
<body>
    <section id="loader">
         <div class="panda-base">
        <div class="ear1"></div>
        <div class="ear2">
        </div>
    <div class="body"></div>
        
        <div class="eye-left">
        </div>
        <div class="eye-right"></div>
        <div class="eyeball-left">
            <div class="lnner-eyeball"></div>
        </div>
        <div class="eyeball-right">
            <div class="fnner-eyeball"></div>
        </div>
        <div class="nose"></div>
        <div class="hand-left"></div>
        <div class="hand-right"></div>
        <div class="bledder"></div>
        <div class="leg-left"></div>
        <div class="leg-right"></div>
    
    </div>
    </section>
    <div class="container-fluid " id="cfluid">
           <div class="col-md-9 header" >
               <h1 class="bg-info">PostMan API clone</h1>
           </div>
           <!-- URL input Box -->
            <div class="col-md-9" id="notify"></div>
             <div class="col-md-9 mb-3" id="requestUrl">
                   <legend class="col-form-label col-sm-4 mb-2 bg-warning">URL</legend>
                    <input type="text" class="form-control" id="url" placeholder="Enter url...">
             </div>
            <!-- requestType Radio button -->
            <div class="col-md-9">
              <legend class="col-form-label col-sm-4 pt-0 bg-warning">Request Type</legend>
               <label for="get">GET</label>
                <input  type="radio" name="requestType" value="GET" checked>
                 <label for="post">POST</label>
                <input type="radio" name="requestType" value="POST">
                <label for="patch">PATCH</label>
                <input type="radio" name="requestType" value="PATCH">
                <label for="put">PUT</label>
                <input type="radio" name="requestType" value="PUT">
                <label for="delete">DELETE</label>
                <input type="radio" name="requestType" value="DELETE">
            </div>
             <!-- contentType Radio button -->
            <div class="col-md-9">
              <legend class="col-form-label col-sm-4 pt-0 bg-warning">Content Type</legend>
               <label for="Json">Json</label>
                <input  type="radio" name="contentType" id="jsonRadio" value="json" checked>
                 <label for="post">Params</label>
                <input type="radio" name="contentType" id="paramsRadio" value="params">
            </div>
             <!-- Json and Raw params data Boxes -->
            <div class="col-md-9">
              <!-- json dataBox -->
               <div id="jsonBox">  
                   <legend class="col-form-label col-sm-4 pt-0 bg-warning ">Json Data</legend>
                    <textarea name="" id="jsonText" cols="80" rows="7"></textarea>
                </div>  
                <!-- Custom params Data Box-->
                <div id="paramsBox">  
                    <legend class="col-form-label col-sm-4 pt-0 bg-warning ">custom Params</legend>
                    <div class="paramsList">
                        <label for="customParams">Params1</label>
                        <input type="text" id="key1" placeholder="key1">
                        <input type="text" id="value1" placeholder="value1">
                        <button class="btn btn-warning " id="addParams">Add more params</button>
                    </div>
                </div>
            </div>
            <!-- Button for submission-->
            <div class="col-md-9 p-3">
                <button class="btn btn-success" id="submit">Submit</button>
            </div>
            <!-- seprator between request and response Boxes-->
            <hr class="bg-danger">
            <!--Response Box -->
            <div class="col-md-9">
               <div id="responseBox">  
                   <legend class="col-form-label col-sm-4 pt-0 bg-warning">Response Box</legend>
                   <button class="btn btn-info mt-2" id="dark">Dark Mode</button>
                   <button class="btn btn-info mt-2" id="grey">Grey Mode</button>
                   <pre id="responsePre" class="language-javascript">
                        <code class="language-javascript" id="prismText"></code>
                    </pre>
                    <textarea name="" id="responseText" cols="110" rows="20"></textarea>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                        <div class="res">
                           <label for="status"> Status</label>
                            <h3 id="resStatus"></h3>
                        </div>
                </div>
                <div class="col-md-3">
                    <div class="res">
                           <label for="type"> Type</label>
                            <h3 id="resType"></h3>
                        </div>
                </div>
                 <div class="col-md-3">
                    <div class="res">
                           <label for="size"> Size</label>
                            <h3 id="resSize"></h3>
                        </div>
                </div>
                 <div class="col-md-3">
                    <div class="res">
                           <label for="time"> Time</label>
                            <h3 id="resTime"></h3>
                        </div>
                </div>
            </div>
    </div>
    <!---------------------------- JavaScript starts here--------------------------------------->
    <script type="text/javascript">    
    
    let jsonRadio = document.getElementById('jsonRadio');
    let paramsRadio = document.getElementById('paramsRadio');
    
     let jsonBox = document.getElementById('jsonBox');
     let paramsBox = document.getElementById('paramsBox');
        
    let addParams = document.getElementById('addParams');
        
    let notify = document.getElementById('notify');
    let submit = document.getElementById('submit');
        
     let responsePre = document.getElementById('responsePre');
    let responseText = document.getElementById('responseText');
        
     let dark = document.getElementById('dark');
    let grey = document.getElementById('grey');
        
    let loader = document.getElementById('loader');
    let cfluid = document.getElementById('cfluid');
        
    let resStatus = document.getElementById('resStatus');
    let resType = document.getElementById('resType');
    let resSize = document.getElementById('resSize');
    let resTime = document.getElementById('resTime');
    
    //param count
    let addParamCount = 0;
    
    //initially hiding params box
    paramsBox.style.display = 'none';
    responseText.style.display = 'none';
    dark.style.display = 'none';
    loader.style.display = 'none';
    //document.querySelector('#loader').remove();
    //console.log(cfluid.parentElement.children[0].remove());
    
    //hiding jsonBox on selecting customParams
    paramsRadio.addEventListener('click',()=>{
       jsonBox.style.display = 'none';
        paramsBox.style.display = 'block';
    });
    //hiding params box on selecting jsonContent
    jsonRadio.addEventListener('click',()=>{
       jsonBox.style.display = 'block';
        paramsBox.style.display = 'none';
    });
     
    // function for create and remove dynamic params divs
    function dynamicParams(e){
         // string data to create div
        let string = `<label for="customParams">Params${addParamCount+2}</label>
                        <input type="text" id="key${addParamCount+2}" placeholder="key${addParamCount+2}">
                        <input type="text" id="value${addParamCount+2}" placeholder="value${addParamCount+2}">
                        <button class="btn btn-warning delParams ">Delete param Row</button>`;
        
         let node = document.createElement('div');
        node.setAttribute('class', 'paramsList pt-1');
        node.innerHTML = string;
       e.target.parentElement.parentElement.appendChild(node); 
    
        //delete extra params
        let delParams = document.getElementsByClassName('delParams');
        for(item of delParams){
            item.addEventListener('click', (e)=>{
               e.target.parentElement.remove(); 
            });
        }
        addParamCount++;
    }
    
    //notification function
    function notifyFun(){
        let notifyDiv = document.createElement('h3');
         notifyDiv.setAttribute('class','bg-danger');
        let text = 'Enter valid URL before making request..';
       notifyDiv.textContent = text;
        notify.style.zIndex = `10`;
        notifyDiv.style.transform = `translateX(00px)`;
        notify.appendChild(notifyDiv);
        
        //notification will be disappear after 3 sec
         setTimeout(()=>notify.firstChild.remove(),2000);
    }
   
    //add extra  params
    addParams.addEventListener('click', (e)=>{
            dynamicParams(e);
    });
        
    //request submission after filling data
    submit.addEventListener('click', ()=>{
        document.getElementById('responseText').value = 'Data Loading...... Please wait......';
        document.getElementById('prismText').innerHTML = 'Data Loading......Please wait......';
        loader.style.display = 'block';
        cfluid.style.background = 'rgba(1,1,55,.9)';
        
        let url = document.getElementById('url').value;
        let requestType = document.querySelector("input[name='requestType']:checked").value;
        let contentType = document.querySelector("input[name='contentType']:checked").value;
        
        setTimeout(function(){
        //--------------------- checking for content type ------------------ 
             if(contentType == 'params'){
            data = {};
            for(let i = 0; i < addParamCount + 1; i++){
                let key = document.getElementById('key'+(i+1)).value;
                let value = document.getElementById('value'+(i+1)).value;
                data[key] = value;
            }
            dataJson = JSON.stringify(data);
            //console.log(dataJson);
        }
        else{
            dataJson = document.getElementById('jsonText').value;
        }
     //---------after checking content making request to server ---------------------   
        if(requestType == 'GET' && url != ''){
            var t = Date.now();
            
           // var t = (new Date()).getTime();
            fetch(url,{
                    method: 'GET',
                   // mode: 'cors',
                   // headers: { "Content-type": "application/x-www-form-urlencoded"}
                params:{ _limit:2 }
                })
                .then(response => /*{*/
               // if(response.ok){
                /*resStatus.innerHTML = response.status + ' ok';
                resType.innerHTML = response.type;
                const reader = response.body.getReader();
                resSize.innerHTML = '';
                var t2 = Date.now();
                resTime.innerHTML = (t2-t) + ' ms';*/
                response.text()
              //  }else{
                //    resStatus.innerHTML = response.status + ' Not found..';
                //}
                /*}*/).then((text)=>{
                    document.getElementById('responseText').value = text;
                    document.getElementById('prismText').innerHTML = text;
                    Prism.highlightAll();
                }).catch(err=>console.log(err));
        }
        else if( requestType == 'POST' && url != ''){
            fetch(url,{
                    method: 'POST',
                    headers: {
                        "Content-type" : "application/json; charset=UTF-8"
                    },
                     body: dataJson
                })
                .then(response=>response.text())
                .then((text)=>{
                    //console.log(text);
                    document.getElementById('responseText').value = text;
                    document.getElementById('prismText').innerHTML = text;
                }).catch(err=>console.log(err));
        }
        else if(requestType == 'PUT' && url != ''){
            fetch(url, {
                method: 'PUT',
                body: dataJson,
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.text())
          .then((json) =>{ 
                document.getElementById('responseText').value = json;
                document.getElementById('prismText').innerHTML = json;
            });

        }
        else if( requestType == 'PATCH' && url != ''){
            fetch(url, {
                method: 'PATCH',
                body: dataJson,
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              })
              .then(response => response.text())
              .then((json) =>{ 
                    document.getElementById('responseText').value = json;
                    document.getElementById('prismText').innerHTML = json;
                });
            }
        else if( requestType == 'DELETE' && url != ''){
            fetch(url,{
                        method: 'DELETE'
                    }).then(response => response.text())
                .then(res=>document.getElementById('prismText').innerHTML = res);
        }
        else if(requestType == 'FILTER' && url != ''){
            fetch(url)
                .then(response => response.text())
                .then((json) => {
                    document.getElementById('responseText').value = json;
                    document.getElementById('prismText').innerHTML = json;
            });
        }
        else{
           // console.log('Please fill valid URL ');
            notifyFun();
            }
         loader.style.display = 'none';
        cfluid.style.background = 'rgba(11,1,88,.8)';
        },2000);
    });
    
    //dynamic response box and button hiding
        grey.addEventListener('click',()=>{
           responsePre.style.display = 'none'; 
           responseText.style.display = 'block'; 
            dark.style.display = 'block';
            grey.style.display = 'none';
        });
        dark.addEventListener('click',()=>{
           responsePre.style.display = 'block'; 
           responseText.style.display = 'none'; 
            grey.style.display = 'block';
            dark.style.display = 'none';
        });
        
    </script>
    <script src="prism.js"></script>
    <!--<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>-->
</body>
</html>
