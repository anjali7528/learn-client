import React from 'react'
import { Container,Table,Form,ListGroup,Row,Col } from 'react-bootstrap'

const Quiz = (props) => {
  return (
    <div>
        <Container>
        <Table striped>
      <thead>
        <tr>
          <th>Test Name : {props.quiz.subject}</th>
          <th>Course: {props.quiz.courseid}</th>
          <th>passing Marks:{props.quiz.pmarks}</th>
        </tr>
      </thead>
           </Table>

           {props.quiz.questions.map((res,idx)=>
            <ListGroup as="ol" >
<ListGroup.Item
as="li"
className="d-flex justify-content-between align-items-start"
>
<div className="ms-2 me-auto">
  <div className="fw-bold">Question : {res.question}</div>
   <Form>
   <fieldset>
<Form.Group as={Row} className="mb-3">
  <Col sm={10}>
    {res.options.map((res2,index)=>
    <Form.Check
    type="checkbox"
    label={res2}
    name="formHorizontalRadios"
    id="formHorizontalRadios1"
  />
    )}
    <div style={{display:"flex", justifyContent:"flex-end", width:"80vw"}}><h6>marks:{res.marks}</h6></div>
  </Col>
</Form.Group>
</fieldset>
   </Form>
</div>
</ListGroup.Item>
</ListGroup>
           )}
          
           

        </Container>
        {console.log(props)}
    </div>
  )
}

export default Quiz