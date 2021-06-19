import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';



export default class Todo extends Component {
    constructor()
    {
        super();
        this.state={newtodo:''};
    }

    handleClick(event)
    {
        this.setState({newtodo:event.target.value});
    }
    addData()
    {
        fetch('http://localhost:3004/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ job: this.state.newtodo })
        })
        .then(response => response.json())
        .then(data => {
            this.setState({ postId: data.id });
            this.props.makeupdate();
        });
        
    }
    render() {
        return (
            <>
            <Container>
                    <Nav bg="dark" variant="dark" className="justify-content-center" activeKey="/home" style={{ marginTop: "15px", marginBottom: '15px' }}>
                        <h1>My Todo</h1>
                    </Nav>
            </Container>
            <div>
                
                <Card style={{ width: '50%', margin: 'auto' }} bg="light">

                    <Card.Body>
                        <Card.Title>Enter todo Items</Card.Title>
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={this.handleClick.bind(this)}
                            />
                            <InputGroup.Append>
                                <Button variant="success" onClick={this.addData.bind(this)}>Add</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Card.Body>
                </Card>
            </div>
            </>
        )
    }
}
