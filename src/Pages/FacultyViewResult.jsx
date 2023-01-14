import React, { useEffect } from 'react'
import { useSelector,useDispatch  } from 'react-redux';
import {facultyFetchResult  } from '../redux/action/facultyAction';
import {Table, Container} from 'react-bootstrap';
import Home from '../Components/FacultyHomeHelper';
let results = [];

const FacultyViewResult = () => {
  const store = useSelector((store) => store)
    const dispatch = useDispatch()


    useEffect(() => {
        
          dispatch( facultyFetchResult ({}))
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
      <th>Student ID</th>
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
                    <td>{res.userId}</td>
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

export default FacultyViewResult