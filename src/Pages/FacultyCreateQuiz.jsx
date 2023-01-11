import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { adminGetAllSubject } from '../redux/action/adminAction'
import classnames from 'classnames'
import FacultyHomeHelper from '../Components/FacultyHomeHelper';
import Form from 'react-bootstrap/Form';
import FacultyNewQuiz from './Faculty/FacultyNewQuiz'
const FacultyCreateQuiz = () => {
    
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const [department, setDepartment] = useState('')
    const [year, setYear] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const [active, setActive] = useState("search");
    const [subjectCode,setSubjectCode] = useState("");


    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(adminGetAllSubject({ department, year }))
    }

    const handleSubmit = (e) =>{
        console.log(subjectCode)
        e.preventDefault()
        setActive("create")
    }

    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])

    useEffect(() => {
        if (store.admin.allSubject.length !== 0) {
            setIsLoading(false)
        }

    }, [store.admin.allSubject.length])
    return (
        <div>
        <div>
            {store.faculty.isAuthenticated ? <>
                <FacultyHomeHelper />
                {active === "search" && 
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <form noValidate onSubmit={formHandler}>
                                <div className="form-group">
                                    <label htmlFor="departmentId">Department</label>
                                    <select onChange={(e) => setDepartment(e.target.value)} className={classnames("form-control",
                                        {
                                            'is-invalid': error.department
                                        })} id="departmentId">
                                        <option>Select</option>
                                        <option value="E.C.E">E.C.E</option>
                                        <option value="C.S.E">C.S.E</option>
                                        <option value="E.E.E">E.E.E</option>
                                        <option value="I.T">I.T</option>
                                        <option value="Mechanical">Mechanical</option>
                                        <option value="Civil">Civil</option>
                                    </select>
                                    {error.department && (<div className="invalid-feedback">{error.department}</div>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="yearId">Year</label>
                                    <select onChange={(e) => setYear(e.target.value)} className={classnames("form-control",
                                        {
                                            'is-invalid': error.year
                                        })} id="yearId">
                                        <option>Select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                    {error.year && (<div className="invalid-feedback">{error.year}</div>)}
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-md-1">
                                        {
                                            isLoading && <div class="spinner-border text-primary" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                                {!isLoading && <button type="submit" className="btn btn-info btn-block  ">Search</button>}
                               
                            </form>


                        </div>
                        <div className="col-md-8">
                        <div>
                        {store.admin.allSubject.length !== 0 && <div><table className="table border">
                                <thead>
                                    <tr>
                                        <th scope="col">Select</th>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Subject Code</th>
                                        <th scope="col">Subject Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        store.admin.allSubject.map((res, index) =>
                                            <tr key={index}>
                                                <th scope="row">  <Form.Check type="radio" aria-label="radio 1" onChange={()=>setSubjectCode(res.subjectCode) } /></th>
                                                <td >{index + 1}</td>
                                                <td>{res.subjectCode}</td>
                                                <td>{res.subjectName}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <button onClick={handleSubmit}>Continue</button>
                            </div>
                            }
                        </div>
                            

                        </div>
                    </div>
                </div>}

                {active === "create" && 
                <div>
                       <FacultyNewQuiz subject={subjectCode}/>    

                </div>
                }

            </> : (history.push('/'))}
        </div>
        
    </div>

    )
}
export default FacultyCreateQuiz
