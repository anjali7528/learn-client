import React,{useRef,useState,useEffect} from 'react'
import {Badge,ListGroup,Form,Col,Row} from 'react-bootstrap'

const QuizScore = (props) => {
    const cop1 = useRef();
    const cop2 = useRef();
    const cop3 = useRef();
    const cop4 = useRef();
    const [ answer,setAnswer] = useState([])
    const [data,setData] = useState(false) 


    useEffect(()=>{
        if(data === true){
            props.setResponse([...answer])
            console.log(answer)
        }
        setAnswer([])
        setData(false)
    },[data])

    const nextHandler =()=>{
        handleAnswer(cop1)
        handleAnswer(cop2)  
        handleAnswer(cop3)  
        handleAnswer(cop4)

        setData(true)

    }

    const handleAnswer = (option) =>{
        // a b c d values here
        if(option.current.checked === true)
           setAnswer(answer => [...answer,option.current.value])
      }
        
  return (
    <div>QuizScore
        
        <ListGroup as="ol" >
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Question : {props.question}</div>
       <Form>
       <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Col sm={10}>
        <Form.Check
          type="checkbox"
          label={props.op1}
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          ref={cop1}
          value = "a"
        />
        <Form.Check
          type="checkbox"
          label={props.op2}
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          ref={cop2}
          value="b"
        />
        <Form.Check
          type="checkbox"
          label={props.op3}
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
          ref={cop3}
          value="c"
        />
        <Form.Check
          type="checkbox"
          label={props.op4}
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
          ref={cop4}
          value="d"
        />
      </Col>
    </Form.Group>
    </fieldset>
       </Form>
    </div>
    <Badge bg="danger" pill style={{marginRight:'40px'}}>
      Marks : {props.marks}
    </Badge>
   
  </ListGroup.Item>
</ListGroup>
<button onClick={nextHandler}>Submit Question</button>
    </div>
  )
}

export default QuizScore