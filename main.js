 
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
        
        //notification will be disappear after 2 sec
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
        cfluid.style.background = 'rgba(31,1,5,.9)';
        
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

            fetch(url,{
                    method: 'GET',
                params:{ _limit:2 }
                })
                .then((response)=> {
                if(response.ok){
                resStatus.innerHTML = response.status + ' ok';
                resType.innerHTML = response.type;
                var t2 = Date.now();
                resTime.innerHTML = (t2-t) + ' ms';
                return response.text()
               }else{
                    resStatus.innerHTML = response.status + ' Not found..';
                }
                }).then((text)=>{
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
                .then((response)=> {
                if(response.ok){
                resStatus.innerHTML = response.status + ' ok';
                resType.innerHTML = response.type;
                var t2 = Date.now();
                resTime.innerHTML = (t2-t) + ' ms';
                return response.text()
               }else{
                    resStatus.innerHTML = response.status + ' Not found..';
                }
                })
                .then((text)=>{
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
          .then((response)=> {
                if(response.ok){
                resStatus.innerHTML = response.status + ' ok';
                resType.innerHTML = response.type;
                var t2 = Date.now();
                resTime.innerHTML = (t2-t) + ' ms';
                return response.text()
               }else{
                    resStatus.innerHTML = response.status + ' Not found..';
                }
                })
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
              .then((response)=> {
                if(response.ok){
                resStatus.innerHTML = response.status + ' ok';
                resType.innerHTML = response.type;
                var t2 = Date.now();
                resTime.innerHTML = (t2-t) + ' ms';
                return response.text()
               }else{
                    resStatus.innerHTML = response.status + ' Not found..';
                }
                })
              .then((json) =>{ 
                    document.getElementById('responseText').value = json;
                    document.getElementById('prismText').innerHTML = json;
                });
            }
        else if( requestType == 'DELETE' && url != ''){
            fetch(url,{
                        method: 'DELETE'
                    }).then((response)=> {
                if(response.ok){
                resStatus.innerHTML = response.status + ' ok';
                resType.innerHTML = response.type;
                var t2 = Date.now();
                resTime.innerHTML = (t2-t) + ' ms';
                return response.text()
               }else{
                    resStatus.innerHTML = response.status + ' Not found..';
                }
                })
                .then(res=>document.getElementById('prismText').innerHTML = res);
        }
        else if(requestType == 'FILTER' && url != ''){
            fetch(url)
                .then((response)=> {
                if(response.ok){
                resStatus.innerHTML = response.status + ' ok';
                resType.innerHTML = response.type;
                var t2 = Date.now();
                resTime.innerHTML = (t2-t) + ' ms';
                return response.text()
               }else{
                    resStatus.innerHTML = response.status + ' Not found..';
                }
                })
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
      
