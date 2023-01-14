import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classnames from 'classnames'
import { uploadQuiz } from '../../redux/action/facultyAction'
import { useHistory } from 'react-router-dom'
import FacultymakeQuiz from '../Faculty/FacutlymakeQuiz'
import DisplayQuiz from '../DisplayQuiz'

const FacultyNewQuiz = (props) => {
    const store = useSelector((store) => store)
    const history = useHistory()
    const dispatch = useDispatch() 
    const [error, setError] = useState({})
    const [errorHelper, setErrorHelper] = useState({})
    const [testname, setTestName] = useState("")
    const [totalMarks, setTotalMarks] = useState()
    const [passingmarks , setPassingMarks] = useState("")
    const[questions,setQuestion] = useState([]);
    
    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])

    useEffect(() => {
        if (store.errorHelper) {
            setErrorHelper(store.errorHelper)
        }
    }, [store.errorHelper])

const submitQuizHandler=()=>{
    if(questions.length !==0){
        dispatch(uploadQuiz({
            courseid:props.subject,
            subject:testname,
           pmarks:passingmarks,
           questions: [...questions],
           creatorID:store.faculty.faculty.faculty.registrationNumber
    }))

    }
}
     
    const displayQuestion = questions.map((ques =>
      <DisplayQuiz question={ques.question} op1={ques.options[0]} op2={ques.options[1]} op3={ques.options[2]} op4={ques.options[3]} marks={ques.marks}/>)
      )
   
      
  return (
    <div>
    {store.faculty.isAuthenticated ? <>
        
        {store.faculty.fetchedStudentsHelper && <div className="row  justify-content-center mt-4">
            <div className="col-md-4">
                <form onSubmit={submitQuizHandler}>
                    <div className="form-group">
                        <label htmlFor="subjectId">Subject Code</label>
                        <input disabled className='form-control' value={props.subject}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="examId">Test Name</label>
                        <input className='form-control' placeholder='e.g. Java(st1)' onChange={e=> setTestName(e.target.value)} ></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="marksId">Passing Marks</label>
                        <input type="number" className={classnames("form-control",
                            {
                                'is-invalid': errorHelper.totalMarks

                            })} id="marksId"
                            value={totalMarks} onChange={(e) => setPassingMarks(e.target.value)} />
                        {errorHelper.totalMarks && (<div classNameName="invalid-feedback">{errorHelper.totalMarks}</div>)}
                    </div>
                    <button type="submit">Submit Quiz</button>
                   <h2>Add Questions</h2>
                   
                </form>
                <FacultymakeQuiz setQuestion={setQuestion} questions={questions}/>
                    {displayQuestion}
            </div>
        </div>
        }
    </> : (history.push('/'))}
    
</div>
  )}

export default FacultyNewQuiz