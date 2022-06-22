const httpLibrary = require('http');
const urlLibrary  = require('url');
const catData = [
    {
        "id":"abys",
        "name": "Abyssinian",
        "description": "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals."
    },
    {
        "id":"abys1",
        "name": "Abyssinian1",
        "description": "The Abyssinian1 is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals."
    }
]

const routeHandler = function(req, res){
  const url = req.url;
  const urlInfo = urlLibrary.parse(url,true).query;
  const path = urlLibrary.parse(url).pathname;
  const method = req.method;
  if(path == '/breeds'){
    switch(method){
      case 'GET':
        handleGetRequest(res, urlInfo)
        break
      case 'POST':
        handlePostRequest(req, res)
        break
      case 'PUT':
        handlePutRequest()
        break
      // case 'DELETE':
      //   handleDeleteRequest()
      //   break;
    }
  }
}

const handleGetRequest = (res, urlInfo) => {
  returnData = catData
  if(method == 'GET'){
    res.statusCode = 200
    if(urlInfo.id){
        const matchedCats = catData.filter((cat) => {
            return cat.id==catId
        });
        returnData = matchedCats
    }
    res.setHeader("Content-Type","application/json");
    res.write(JSON.stringify(returnData))
    res.end()
  }
}

const handlePostRequest = (req,res) =>{
  let dataReceived = ''
  let postBody = ''
  req.on('data',payLoad=>{
      postBody+=payLoad;
  });
  req.on('end',()=>{
      dataReceived = JSON.parse(postBody)
      if(dataReceived.name == ''){
          res.statusCode = 422;
          res.write("Name is blank")
          res.end();
      }else{
          res.statusCode = 201
          res.write("")
          catData.push(dataReceived)
          res.end()
      }
  });
}

const httpServer1 = httpLibrary.createServer(routeHandler)


const httpServer = httpLibrary.createServer((req,res) => {
    const url = req.url;
    const urlInfo = urlLibrary.parse(url,true).query;
    const path = urlLibrary.parse(url).pathname;
    const catId = urlInfo.id;
    const method = req.method;
    var returnData = catData;
    if(path == '/breeds'){
        if(method == 'GET'){
            res.statusCode = 200;
            if(urlInfo.id){
                const matchedCats = catData.filter((cat) => {
                    return cat.id==catId;
                });
                returnData = matchedCats;
            }
            res.setHeader("Content-Type","application/json");
            res.write(JSON.stringify(returnData));
            res.end();
        }else if (method == 'POST'){
            let dataReceived = '';
            let postBody = '';
            req.on('data',payLoad=>{
                postBody+=payLoad.toString();
            });
            req.on('end',()=>{
                dataReceived = JSON.parse(postBody);
                if(dataReceived['name'] == ''){
                  res.statusCode = 422;
                  res.write("Name is required");
                  res.end();
                  }else{
                  res.statusCode = 201;
                  res.write("");
                  res.end();
              }
                
            });
        }
        else if (method == 'PUT'){
          let dataReceived = '';
          let postBody = '';
          req.on('data',payLoad=>{
            postBody+=payLoad.toString();
            req.on('end',()=>{
              dataReceived = JSON.parse(postBody);
              console.log(dataReceived)
              let cati
              catData.forEach((cat, catIndex) => {
                if(dataReceived.id == cat.id){
                  cati = catIndex
                }
              })
              console.log(cati)
                  catData[cati].name = dataReceived.name
                  catData[cati].description = dataReceived.description
                  console.log(catData)
                  res.statusCode = 200
                  res.write("");
                  res.end();
              //   }
              //   // else{
              //   //   res.statusCode = 422;
              //   //   res.write("Cat does not exist in data");
              //   //   res.end();
              //   // }
             
              
          });
        });
        }
    }else{
        res.statusCode = 404;
        res.write("Don't have what you are looking for");
        res.end();
    }
});
httpServer1listen(3000,'localhost',()=>{
    console.log("Server started..");
});