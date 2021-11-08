import React, {useState, useReducer} from "react";
import Card from "../UI/Card";
import Button from "../UI//Button";


const emailReducer= (state, action)=> {
    if (action.type === "USER INPUT") {
        return {
            Value: action.val,
            isValid: action.val.includes("@gmail.com"),
            isValid: action.val.includes("@hotmail.com"),
            isValid: action.val.includes("yahoo.com"),
        };
    }
    return{
        value: "",
        isValid: false,
    }
};

const Login =(props) => {
    //const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");

    const [email, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });
    
    const emailChangeHandler = (e) => { 
        //console.log(e. target.value);
        //setEmail(e.target.value);
        dispatchEmail ({
            value: e.target.value,
            type: "USER_INPUT",
        });
    };
    
    const passwordChangeHandler = (e) => { 
        //console.log(e. target. value); 
        setPassword(e. target.value);
    };
    
    const handlerSubmit = (e) => {
        e.preventDefault();
        if (email.isValid){
            props.onLogin(email, password);
        }
        else {
            console.log("Email invalido");
        }
    };
    
    return (
        <Card>
            <form onSubmit ={handlerSubmit}>
                <label>Email</label>
                <input type="text" onChange={emailChangeHandler} />
                <label>Password</label> 
                <input type="password" onChange={passwordChangeHandler} />
                <Button>Login</Button>
            </form>
        </Card>
    );
};

export default Login;