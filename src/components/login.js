import { Container , Card , CardContent, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../config";

const Login =() => {

    // 1 formObject

    const url = app_config.backend_url
    const loginform ={
        email :'',
        password : '',
    }

    // 2.Submit Function

    const loginSubmit = (formdata) => {
        console.log(formdata);
        fetch(url+'/user/authenticate',
        {method : 'Post',
        body : JSON.stringify(formdata),
        headers : { "Content-Type" : "appication/json"},
    }).then((res) => {
        if (res.status === 200){
            Swal.fire({
                icon :"success",
                title : "success",
                text :"Login Successfully",

            })
        }else if (res.status === 400){
            Swal.fire({
                icon :"error",
                title : "error",
                text :"Login Failed",

            })
        }   
        return res.json()
    })
    }
    return (
        <Container maxWidth="xs" sx={{ display :"flex" ,}} className="mt-5 mb-5">
            <Card>
            <h1 className="text-center my-5"> <span className="text-primary">Login </span> Here</h1>
                <CardContent>
                    <Formik initialValues={loginform} onSubmit ={loginSubmit}>
                        {({values , handleSubmit , handleChange}) => (
                            <form onSubmit={handleSubmit}>
                            <TextField
                            label="Email" 
                            type="email"
                            variant="filled"
                            className="w-100 mb-5"
                            id="email"
                            onChange={handleChange}
                            value={values.email}/>
                            <TextField
                            label="Password" 
                            type="password"
                            variant="filled"
                            className="w-100 mb-5"
                            id="password"
                            onChange={handleChange}
                            value={values.password}/>
        
                            <Button variant="outlined" type="submit">Login</Button>
                            </form>
                        )}
                    
                    </Formik>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Login ;