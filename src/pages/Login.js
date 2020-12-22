import React, { useContext } from 'react'
import { Input } from '../components/FormControls'
import { useMutation } from "@apollo/client"
import { LOG_IN } from '../GraphQL/queries'
import { Formik, Form } from "formik"
import AuthContext from "../context/AuthContext"
import { Link } from "react-router-dom"

function Login(props) {
    const [addUser] = useMutation(LOG_IN)
    const context = useContext(AuthContext)

    return (
        <section>
            <div className="form-flex">
                <Formik
                    initialValues={{ username: "", password: "" }}
                    onSubmit={(values, { setErrors }) => {
                        addUser({ 
                            variables: values, 
                            update(proxy, result) {
                                context.login(result.data.loginUser)
                                props.history.push("/")
                            }
                        }).catch(err => setErrors(err.graphQLErrors[0].extensions.exception.exceptionObject))
                    }}
                >
                    <Form>
                        <div className="form-intro">
                            <p>START FOR FREE</p>
                            <h2 className="intro__title">Log-in to Twittart</h2>
                            <p>Haven't created an account yet? <Link to="/register">Sign up instead!</Link></p>
                        </div>
                        <Input name="username" label="Username" type="text" />
                        <Input name="password" label="Password" type="password" />
                        <button type="submit" className="btn primary">Login</button>
                    </Form>
                </Formik>
                <img src="login.svg" alt="login" />
            </div>
        </section>
    )
}

export default Login