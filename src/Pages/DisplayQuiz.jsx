import React from 'react'
import {ListGroup,Form,Col,Row} from 'react-bootstrap'


const DisplayQuiz = (props) => {
  return (
    <div>
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
    />
    <Form.Check
      type="checkbox"
      label={props.op2}
      name="formHorizontalRadios"
      id="formHorizontalRadios2"
    />
    <Form.Check
      type="checkbox"
      label={props.op3}
      name="formHorizontalRadios"
      id="formHorizontalRadios3"
    />
    <Form.Check
      type="checkbox"
      label={props.op4}
      name="formHorizontalRadios"
      id="formHorizontalRadios3"
    />
  </Col>
</Form.Group>
</fieldset>
   </Form>
</div>
</ListGroup.Item>
</ListGroup>
</div>
  )
}

export default DisplayQuiz