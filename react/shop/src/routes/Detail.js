import { useParams } from "react-router-dom";
import styled from 'styled-components'
function Detail(props) {
  let { id } = useParams();
  // console.log(typeof id) //is 는 string
  let item = props.shoes.find(x => x["id"] == id);


  let Box = styled.div`
  padding : 20px;
  color : grey
`;
  let Btn = styled.button`
  background : ${props => props.bg};
  color : ${props => props.bg == 'orange' ? 'blue' : 'yellow'};  padding : 10px;
`;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="shoes1" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price} 원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
        <div>
          <Box>
            <Btn bg="orange">orange button</Btn>
            <Btn bg="green">green button</Btn>

          </Box>
        </div>
      </div>
    </div>)
}

export default Detail