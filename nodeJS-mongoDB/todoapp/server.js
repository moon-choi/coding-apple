//이 세 줄이 서버를 띄우기 위한 기본 세팅.
//listen(서버띄울 포트번호, 함수)`

const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //POST 요청으로 서버에 데이터 전송하고 싶으면 1. body-parser 가 필요
const { response } = require("express");
const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
  "mongodb+srv://<username>:<password>@moonchoi.zfdki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  function (error, client) {
    app.listen(8080, function () {
      console.log("listening on 8080");
    });
    //8080port로 웹서버를 열고, 잘열리면 listening on 을 출력해주세요.
  }
);
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); //2. form 의 경우 input 에 name tag 필요

app.listen(8080, function () {
  console.log("listening on 8080");
});
//8080port로 웹서버를 열고, 잘열리면 listening on 을 출력해주세요.

app.get("/pet", function (request, response) {
  response.send("펫용품 쇼핑 페이지입니다.");
});
//누군가가 /pet으로 방문하면 안내문을 띄워주세요.

app.get("/beauty", function (request, response) {
  response.send("뷰티용품 쇼핑 페이지입니다.");
});

app.get("/", function (request, response) {
  // response.send('홈페이지입니다.')
  response.sendFile(__dirname + "/index.html"); //경로 접속했을때 html이걸 보내주세요.
});

app.get("/write", function (request, response) {
  // response.send('홈페이지입니다.')
  response.sendFile(__dirname + "/index.html"); //경로 접속했을때 html이걸 보내주세요.
});

app.post("/add", function (request, reponse) {
  response.send("전송완료");
  console.log(request.body.date);
  console.log(request.body.title);
});
