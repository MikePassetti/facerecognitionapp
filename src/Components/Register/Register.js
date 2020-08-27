import React from 'react';

class Register extends React.Component {
    constructor (props) {
            super(props);
            this.state = {
                email: '',
                password: '',
                name: ''            
            }
        }
        
        onNameChange = (event) => {
            this.setState({name: event.target.value})
        }

        onEmailChange = (event) => {
            this.setState({email: event.target.value})
        }
        
        onPasswordChange = (event) => {
            this.setState({password: event.target.value})
        }

        onSubmitRegister = (e) => {
            e.preventDefault();
            fetch('https://frozen-castle-67201.herokuapp.com/register', {
                method: 'post',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    name: this.state.name
                }) 
            })
            .then(response => response.json())
            .then (user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')
                }
            })
        }
    render () {
        return (
        <div className='register w-100 tc justify-center flex'>
            <main className='black-80 ba pa2 tc'>
                <form className='measure'>
                    <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                        <div className='f4 fw6 ph0 mh0'>Register</div>
                        <div className='mt3'>
                            <label className='db fw6 lh-copy f6' htmlFor='Name'>Name</label>
                            <input onChange={this.onNameChange} className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='text' name='name'  id='name'/>
                        </div>
                        <div className='mt3'>
                            <label className='db fw6 lh-copy f6' htmlFor='email-address'>Email</label>
                            <input onChange={this.onEmailChange} className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='email' name='email-address'  id='email-address'/>
                        </div>
                        <div className='mv3'>
                            <label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
                            <input onChange={this.onPasswordChange} className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='password' name='password'  id='password'/>
                        </div>
                    </fieldset>
                    <div>
                        <input 
                        className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib' 
                        type='submit' 
                        value='register'
                        onClick={this.onSubmitRegister}
                        />
                    </div>
                </form>
            </main>
        </div>  
        ) 
    }
}

export default Register;