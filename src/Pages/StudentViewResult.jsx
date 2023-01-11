import React, { useEffect,useState  } from 'react'
import { useSelector,useDispatch  } from 'react-redux';
import { studentFetchResult } from '../redux/action/studentAction';
import {Table, Container} from 'react-bootstrap';
import Home from '../Components/HomeHelper'
let results = [];


const StudentViewResult = () => {

    const store = useSelector((store) => store)
    const dispatch = useDispatch()


    useEffect(() => {
        
          dispatch( studentFetchResult({
            userId:store.student.student.student.registrationNumber
        }))
      ;
    },[])

    results = store.student.fetchedResult;

  return (
    <div>
        <Home/>
        {console.log(results)}
       <Container>
       <Table striped>
      <thead>
        <tr>
        
          <th>Sr No.</th>
          <th>Course id</th>
          <th>Subject</th>
          <th>Passing Marks</th>
          <th>Obtained Marks</th>
          <th>Status</th>
        </tr>
      </thead>
      
      <tbody>
      {   results.length !== 0 && results.result.map((res, index) =>
                     <tr key={index}>
                        <td >{index + 1}</td>
                       <td>{res.courseID}</td>
                      <td>{res.subject}</td>
                      <td>{res.pmarks}</td>
                      <td>{res.marks}</td>
                      <td>{res.status}</td>
                       </tr>)}
      </tbody>
    </Table>
    </Container>
    </div>
  )
}

export default StudentViewResult