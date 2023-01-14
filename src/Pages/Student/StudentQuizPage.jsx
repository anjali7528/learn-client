import React,{useState,useEffect} from 'react'
import { Container,Table } from 'react-bootstrap'
import { uploadResult } from '../../redux/action/studentAction'
import QuizScore from './QuizScore'
import { useSelector, useDispatch } from 'react-redux'


const StudentQuizPage = (props) => {
  const store = useSelector((store) => store)
  const dispatch = useDispatch() 
    const[marks,setMarks] = useState(0)
    const[i,seti] = useState(0)
    const[response,setResponse] = useState([])
    const[end,setend] = useState(false)
    const[status,setStatus] = useState("");
    const nextHandler = ()=>{
      
        console.log(response);
        if(arrayEquals(response,props.quiz.questions[i].Answer) === true){
            setMarks(marks=>{
                return (marks+(+(props.quiz.questions[i].marks)))
            })
        }

        seti(i=>(i+1))
    }

    useEffect(() => {
      if(props.quiz.pmarks <= marks)
      setStatus("Passed")
    else
      setStatus("Fail")  
    }, [marks])


    const endQuizHandler = async ()=>{
         
         setend(true)
         dispatch(uploadResult({
          marks,
          courseID:props.quiz.courseid,
          pmarks:props.quiz.pmarks,
          subject:props.quiz.subject,
          status:status,
          userId:store.student.student.student.registrationNumber
  }))


     
  }

    function arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }
  return (
    <div>StudentQuizPage
         
        <Container>
        <Table striped>
      <thead>
        <tr>
          <th>Test Name : {props.quiz.subject}</th>
          <th>Course: {props.quiz.courseid}</th>
          <th>passing Marks:{props.quiz.pmarks}</th>
          <th>Current Marks : {marks}</th>
        </tr>
      </thead>
           </Table>
           </Container>
           {(i<props.quiz.questions.length)?
        <QuizScore 
        question={props.quiz.questions[i].question} 
        op1={props.quiz.questions[i].options[0]} 
        op2={props.quiz.questions[i].options[1]}
         op3={props.quiz.questions[i].options[2]} 
         op4={props.quiz.questions[i].options[3]} 
         marks={props.quiz.questions[i].marks} 
         setResponse={setResponse}
         />:<p></p>
        }
     {(i<props.quiz.questions.length)?
        <button onClick={nextHandler}>Next Question</button>:<p></p>}
        <button onClick={endQuizHandler}>End Quiz</button>
        <br></br>
        {end && <h1>You have {status} the test</h1>}
    </div>
  )
}

export default StudentQuizPage