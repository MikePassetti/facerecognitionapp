import React from 'react';

class Signin extends React.Component {
    constructor (props) {
            super(props);
            this.state = {
                signInEmail: '',
                signInPassword: ''            }
        }
        
        onEmailChange = (event) => {
            this.setState({signInEmail: event.target.value})
        }
        
        onPasswordChange = (event) => {
            this.setState({signInPassword: event.target.value})
        }

        onSubmitSignIn = (e) => {
            e.preventDefault();
            fetch('https://frozen-castle-67201.herokuapp.com/signin', {
                method: 'post',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.signInEmail,
                    password: this.state.signInPassword
                }) 
            })
            .then(response => response.json())
            .then(user => {
                if(user.id){
                  this.props.loadUser(user);
                  this.props.onRouteChange('home');
                }   
            })
        }

    render () {
        return (
            <div className='signin w-100 tc justify-center flex'>
                <main className='black-80 ba pa2 tc'>
                    <form className='measure'>
                        <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                            <div className='f4 fw6 ph0 mh0'>Sign In</div>
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
                            value='Sign in'
                            onClick={this.onSubmitSignIn}
                            />
                        </div>
                    </form>
                </main>
            </div>  
        )    
    }   
}

export default Signin;