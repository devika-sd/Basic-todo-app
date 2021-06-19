import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';


export default class Viewtodo extends Component {
    constructor() {
        super();
        this.state = { todos: [] ,listdata:[],check:false};
        console.log()
    }
    updatedata()
    {
        fetch('http://localhost:3004/todos')
                    .then(res => res.json())
                    .then(resdata => {
                    this.setState({ listdata: resdata });
                    console.log(this.state.listdata);
                    });
    }
    delRow(job)
    {
        fetch('http://localhost:3004/todos/'+job, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }}).then(response => response.json())
            .then(data => {
                console.log(data);
                this.props.delupdate();
                this.updatedata();
            });
    }
    jobstatue(event)
    {
        //console.log(event.target.id+" "+event.target.checked) 
        fetch('http://localhost:3004/todos',{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ job:event.target.id,jobstatus:event.target.checked })
        })
        .then(response => response.json())
        .then(data =>{
                this.updatedata();
                this.props.delupdate();
                console.log(data);
        });
    }
    render() {
        var list;
        if(this.props.listvalue)
        {
            list=this.props.listvalue.map((value,id)=>{
                return (    <tr key={id}>
                                <td><input type="checkbox" id={value.job} onChange={this.jobstatue.bind(this)} checked={value.jobstatus}/> {value.job} <i className="fas fa-trash" style={{float:'right',color:'red'}} onClick={this.delRow.bind(this,value.job)}></i></td>
                            </tr>
                        )
            })
        } 
        
        return (
            <>
            <Table striped bordered hover style={{width:'50%',margin:'30px auto'}}>
                <tbody>
                        {list}   
                </tbody>
            </Table>
            </>
        )
    }
}
