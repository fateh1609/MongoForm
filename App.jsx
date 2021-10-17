import React, {Components} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Components {
    constructor(){
        super()
        this.state={
            fullName:'',
            email:'',
            age:'',
            fathersname:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeage = this.changeage.bind(this)
        this.changeFathersName = this.changeFathersName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changeage(event){
        this.setState({
            age:event.target.value
        })
    }
    changeFathersName(event){
        this.setState({
            fathersname:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered ={
            fullName:this.state.fullName,
            email:this.state.email,
            age:this.state.age,
            fathersname:this.state.fathersname
        }

        axios.post('http://localhost:4000/app/form', registered)
        .then(response => console.log(response.data))

        this.setState({
            fullName:'',
            email:'',
            age:'',
            fathersname:''
        })
    }

    render() {
        return(
            <Div>
                <Div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text'
                            placeholder='Full Name'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='e-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />

                            <input type = 'number'
                            placeholder='age'
                            onChange={this.changeage}
                            value={this.state.age}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='FathersName'
                            onChange={this.changeFathersName}
                            value={this.state.fathersname}
                            className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-alert btn-block' value='Submit'></input>
                        </form>
                    </div>
                </Div>
            </Div>
        );
    }
}

export default App;