import React, { useReducer, useEffect, useState } from 'react';
import styles from './css/Signup.module.css';
import { Icon } from '@iconify/react';
import CheckMasterRole from './CheckRole';
import SignupFooter from './SignupFooter';

//state type

type State = {
    username: string
    email: string
    password:  string
    isButtonDisabled: boolean
    helperText: string
    isError: boolean
    };

const initialState = {
    username: "",
    email: "",
    password: "",
    isButtonDisabled: true,
    helperText: "",
    isError: false,
};

type Action = { type: 'setUsername', payload: string } 
    | { type: 'setEmail', payload: string } 
    | { type: 'setPassword', payload: string } 
    | { type: 'setIsButtonDisabled', payload: boolean } 
    | { type: 'signupSuccess', payload: string } 
    | { type: 'signupFailed', payload: string } 
    | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action)  => {
    switch (action.type) {
        case 'setUsername': 
          return {
              ...state,
              username: action.payload
        };
        case 'setEmail': 
          return {
              ...state,
              email: action.payload
        };
        case 'setPassword': 
          return {
              ...state,
              password: action.payload
        };
        case 'setIsButtonDisabled': 
          return {
              ...state,
              isButtonDisabled: action.payload
        };
        case 'signupSuccess': 
          return {
              ...state,
              helperText: action.payload,
              isError: false
        };
        case 'signupFailed': 
          return {
              ...state,
              helperText: action.payload,
              isError: true
          };
        case 'setIsError': 
          return {
              ...state,
              isError: action.payload
        };
    }
}


const SignUp = ({onSignup, onGoHomeLog}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const [user, setUser] = useState({});

  useEffect(() => {
    if (state.username.trim() && state.email.trim() && state.password.trim()) {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: false
      });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password, state.email]);

  const handleSignup = () => {
    onSignup(user)
    if (state.username === 'username' && state.email === 'name@sample.com' && state.password === 'password') {
      dispatch({
        type: 'signupSuccess',
        payload: 'SignUp Successfully'
      });
    } else {
      dispatch({
        type: 'signupFailed',
        payload: 'Incorrect username or password'
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleSignup();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };
  
  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch({
      type: 'setEmail',
      payload: event.target.value
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }
  const handleCheckChange = (isChecked) => {
    setUser({...user, checked: isChecked});
  }

  return (
      <div className={styles.signupContainer}>
        <form className={styles.inputContainer} noValidate autoComplete="off">
          <div className={styles.titleBox}> 
            <h1 className={styles.title}>Hola, Vecino! </h1>
            <Icon className= {styles.iconHouse} icon="noto:house-with-garden" />
          </div>
          <div className={styles.inputs}>
              <input type="text" className="username" placeholder="Nombre" onChange={handleUsernameChange} onKeyPress={handleKeyPress} required/>

              <input type="email" className="email" placeholder="Email" onChange={handleEmailChange} onKeyPress={handleKeyPress} required/>
              
              <input type="password" className="password" placeholder="Contraseña" onChange={handlePasswordChange} onKeyPress={handleKeyPress} required/>

              <button className={styles.loginBtn} onClick={handleSignup} disabled={state.isButtonDisabled}>Registrate</button>
          </div>
          <CheckMasterRole onCheck={handleCheckChange}/>
        </form>
        <div className={styles.decoLinesContainer}>
            <div className={styles.decoLine1}></div>
            <div className={styles.decoLine2}></div>
            <div className={styles.decoLine3}></div>
            <div className={styles.decoLine4}></div>
            <div className={styles.decoLine5}></div>
        </div>
        <SignupFooter onGoHomeLog={onGoHomeLog}/>
      </div>
  );
}


export default SignUp;