import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

export class FormExample extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  render() {
    const { validated } = this.state;
    return (
      <Form
        noValidate
        validated={validated}
        onSubmit={e => this.handleSubmit(e)}
      >
      <center>
      <h1><u>Registration Form</u></h1><br/>
       <div  style={{border:'2px solid black', width:'700px'}}> 
       	<Form.Row style={{margin:'40px 0px 0px 0px'}}>
          	<Form.Group as={Col} md="4" controlId="validationCustom01">
            	<Form.Label>First name</Form.Label>
	            <Form.Control
	              required
	              type="text"
	              placeholder="First name"
	            />
	           {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>*/}
         	</Form.Group>
         	<Form.Group as={Col} md="4" controlId="validationCustom02">
         		<Form.Label>Last name</Form.Label>
            	<Form.Control
	              required
	              type="text"
	              placeholder="Last name"
	            />
            	{/*<Form.Control.Feedback>Looks good!</Form.Control.Feedback>*/}
          	</Form.Group>
          	<Form.Group as={Col} md="4" controlId="validationCustomUsername">
            	<Form.Label>Username@</Form.Label>
	            <InputGroup>
	              <Form.Control
	                type="text"
	                placeholder="Username"
	                aria-describedby="inputGroupPrepend"
	                required
	              />
	              {/*<Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>*/}
	            </InputGroup>
          	</Form.Group>
        	</Form.Row>
        	<br/><br/><br/><br/><br/>  	
        	<Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
           {/* <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>*/}
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            {/*<Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>*/}
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            {/*<Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>*/}
          </Form.Group>
        </Form.Row><br/><br/><br/><br/><br/>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
         <Button type="submit">Submit form</Button><br/><br/>
      </div></center><br/>
      </Form>
      
    );
  }
}

export default(FormExample);
