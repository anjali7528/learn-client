import React, { useEffect,useState  } from 'react'
import { useSelector,useDispatch  } from 'react-redux';
import FacultyHomeHelper from '../Components/FacultyHomeHelper'
import {factultyFetchQuiz } from '../redux/action/facultyAction';

import {Table,Form, Container} from 'react-bootstrap';
import Quiz from '../Pages/Quiz';
let quizes = [];

const FacultyshowAllQuiz = () => {
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
   const [isLoading,setLoading]   = useState(false);
    const[quizidx,setQuiz] = useState([])

    useEffect(() => {
        
          dispatch(factultyFetchQuiz({
            creatorID:store.faculty.faculty.faculty.registrationNumber
        }))
      ;
    },[])

    quizes = store.faculty.fetchedQuiz;

    const handleSubmit = () =>{
        setLoading(true);
    }

  return (
    <div>
        <FacultyHomeHelper/>
       {!isLoading &&
       <Container>
       <Table striped>
      <thead>
        <tr>
          <th></th>
          <th>Sr No.</th>
          <th>Course id</th>
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
    <button onClick={handleSubmit}>View Quiz</button>
    </Container>
}
    {isLoading && 
                <div>
                   <Quiz quiz={quizes.allQuiz[quizidx]}/>
                </div>
                }
      </div>
  )
}

export default FacultyshowAllQuiz