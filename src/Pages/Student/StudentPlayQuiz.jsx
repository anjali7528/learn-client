import React, { useEffect,useState  } from 'react'
import { useSelector,useDispatch  } from 'react-redux';
import {studentFetchQuiz } from '../../redux/action/studentAction';
import Home from '../../Components/HomeHelper'
import {Table,Form, Container} from 'react-bootstrap';
import StudentQuizPage from './StudentQuizPage'
let quizes = [];


const StudentPlayQuiz = () => {

    const store = useSelector((store) => store)
    const dispatch = useDispatch()
   const [isLoading,setLoading]   = useState(false);
    const[quizidx,setQuiz] = useState([])

    useEffect(() => {
          dispatch(studentFetchQuiz({
            department:store.student.student.student.department
        }))
      ;
    },[])

    quizes = store.student.fetchedQuiz;

    const handleSubmit = () =>{
        setLoading(true);
    }

  return (
    <div>
        <Home/>
        {!isLoading &&
        <Container>
          <h1>Quizes</h1>
       <Table striped>
      <thead>
        <tr>
          <th></th>
          <th>Sr no.</th>
          <th>Course ID</th>
          <th>Subject</th>
         
        </tr>
      </thead>
      
      <tbody>
      {
               quizes.length !== 0 && quizes.allQuiz.map((res, index) =>
                     <tr key={index}>
                          <th scope="row">  <Form.Check type="radio" aria-label="radio 1" onChange={()=>setQuiz(index)} /></th>
                        <td >{index + 1}</td>
                       <td>{res.courseid}</td>
                      <td>{res.subject}</td>
                       </tr>)}
      </tbody>
    </Table>
    <button onClick={handleSubmit}>Play Quiz</button>
      
    </Container>
      }
    {isLoading && 
                <div>
                   <StudentQuizPage quiz={quizes.allQuiz[quizidx]}/>
                </div>
                }
      </div>
  )
}

export default StudentPlayQuiz