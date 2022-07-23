// JSX에서 데이터바인딩하기
데이터바인딩이라는 전문용어는 별거아니고

자바스크립트 데이터를 HTML에 꽂아넣는 작업을 뜻한다. 

// public 폴더의 용도 

여러가지 소스코드는 src 폴더에 보관하면 되는데 

이미지같은 static 파일의 경우 public 폴더에 보관해도 됩니다.

리액트로 개발을 끝내면 build 작업이라는걸 하는데 

지금까지 짰던 코드를 한 파일로 압축해주는 작업입니다. 

src 폴더에 있던 코드와 파일은 다 압축이 되는데 public 폴더에 있는 것들은 그대로 보존해줍니다. 

그래서 형태를 보존하고 싶은 파일은 public 폴더에 넣으면 되는데 js 파일은 그럴 일은 거의 없고 

이미지, txt, json 등 수정이 필요없는 static 파일들의 경우엔 public 폴더에 보관해도 상관없습니다.

//  12 분
이미지 넣는 법 & public 폴더 이용하기

 

0:00 대문만들기 & css파일에서 이미지넣기

2:55 html에서 이미지 넣을 땐

5:41 상품목록 레이아웃 만들기

8:58 public 폴더 이용할 수도 있음

 

 

리액트는 원래 좀 자유롭습니다. 

이미지 넣는 법도 서너개 있습니다.

 

 

 

 

강의에서 사용하는 신발 이미지 URL 

 

https://codingapple1.github.io/shop/shoes1.jpg

https://codingapple1.github.io/shop/shoes2.jpg

https://codingapple1.github.io/shop/shoes3.jpg

 

 

 

 

 

대문만들기

 

심심하니까 메인페이지에 큰 사진 하나 넣어봅시다.

<div className="main-bg"></div> 하나 넣고 css 파일에서 디자인넣으면 될 것 같은데 

 

 

(App.css)

.main-bg {
  height : 300px;
  background-image : url('./bg.png');
  background-size : cover;
  background-position : center;
}
이렇게 디자인해봤습니다.

css 파일에서 src 폴더안에 있는 사진을 사용하고 싶으면 

./이미지경로

사용하면 됩니다.

강의에서 쓰는 사진은 밑에 있긴합니다 

 

 

 

 

 

 

html 안에서 src 폴더의 이미지를 넣고 싶으면 

 

html 안에서 이미지를 집어넣고 싶으면 

이미지를 import 해오고 사용해야합니다. 

 

import bg from './bg.png'

function App(){
  return (
    <div>
      <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>
    </div>
  )
}
1. import 작명 from './이미지경로' 한 다음에

2. 이미지경로가 필요한 곳에서 작명한걸 사용하면 됩니다. 

<img>태그 쓰고싶으면 <img src={bg}/> 이렇게 써도 보입니다. 

귀찮으면 css파일을 활용합시다. 

 

 

 

 

 

 

 

 

화면을 가로로 3등분하고 싶으면 

 

Bootstrap쓰면 레이아웃 짜는게 약간 간편해집니다. 

가로로 화면을 3등분하고 싶으면 

 

<div className="container">
  <div className="row">
    <div className="col-md-4">안녕</div>
    <div className="col-md-4">안녕</div>
    <div className="col-md-4">안녕</div>
  </div>
</div> 
이거 복사붙여넣기하면 됩니다.

심지어 모바일 사이즈에선 알아서 세로로 정렬해줍니다. 

물론 CSS 잘하면 직접 하는게 더 효율적임 

 

실은 React-bootstrap 사이트에서 Row 아니면 Grid 라고 검색해서 그거 복붙해야하는데

저건 원조 Bootstrap 사이트에서 복붙했습니다.

import 하기 귀찮아서 그랬습니다.

 

그래서 쇼핑몰스럽게 상품을 3개 진열해봤습니다. 

 

 

 

function App(){
  return (
    <div className="App">
      (Navbar와 대문은 생략)

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
        </div>
      </div>
    </div>
  )
}
어디 호스팅되어있는 외부 이미지는 절대경로 그대로 작성하면 잘보입니다. 

 

 

 

 

 

 

public 폴더의 용도 

 

여러가지 소스코드는 src 폴더에 보관하면 되는데 

이미지같은 static 파일의 경우 public 폴더에 보관해도 됩니다.

 

리액트로 개발을 끝내면 build 작업이라는걸 하는데 

지금까지 짰던 코드를 한 파일로 압축해주는 작업입니다. 

src 폴더에 있던 코드와 파일은 다 압축이 되는데 public 폴더에 있는 것들은 그대로 보존해줍니다. 

그래서 형태를 보존하고 싶은 파일은 public 폴더에 넣으면 되는데 js 파일은 그럴 일은 거의 없고 

이미지, txt, json 등 수정이 필요없는 static 파일들의 경우엔 public 폴더에 보관해도 상관없습니다.

 
// public 폴더에 있는 이미지 사용할 땐

<img src="/logo192.png" /> 
그냥 /이미지경로 사용하면 됩니다. 편리하죠?

그래서 페이지에 이미지 100장을 넣어야하는 경우 

public 폴더에 밀어넣으면 import 100번 안해도 되니 편리합니다. 

css 파일에서도 /이미지경로 사용하면 됩니다.
 
<img src={process.env.PUBLIC_URL + '/logo192.png'} /> 
하지만 권장되는 방식은 이렇게입니다. 

왜냐면 리액트로 만든 html 페이지를 배포할 때

codingapple.com 경로에 배포하면 아무런 문제가 없지만

codingapple.com/어쩌구/ 경로에 배포하면

/logo192.png 이렇게 쓰면 파일을 찾을 수 없다고 나올 수도 있습니다. 

그래서 /어쩌구/ 를 뜻하는 process.env.PUBLIC_URL 이것도 더해주면 된다고 하는군요. 

 

codingapple.com/어쩌구/ 경로에 리액트로 만든 페이지를 배포할 일이 아예 없으면 굳이 안해도 됩니다. 

 