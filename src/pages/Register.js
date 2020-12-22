import React, { useContext } from 'react'
import { Input } from '../components/FormControls'
import { useMutation } from "@apollo/client"
import { SIGN_UP } from '../GraphQL/queries'
import { Formik, Form } from "formik"
import AuthContext from "../context/AuthContext"
import { Link } from "react-router-dom"

function Register(props) {
    const [addUser] = useMutation(SIGN_UP)
    const context = useContext(AuthContext)

    return (
        <section>
            <div className="form-flex">
                <Formik
                    initialValues={{ username: "", password: "", password2: "" }}
                    onSubmit={(values, { setErrors }) => {
                        addUser({ 
                            variables: values, 
                            update(proxy, result) {
                                context.login(result.data.addUser)
                                props.history.push("/")
                            }
                        }).catch(err => setErrors(err.graphQLErrors[0].extensions.exception.exceptionObject))
                    }}
                >
                    <Form>
                        <div className="form-intro">
                            <p>START FOR FREE</p>
                            <h2 className="intro__title">Sign up to Twittart</h2>
                            <p>Already have an account? <Link to="/login">Sign in instead!</Link></p>
                        </div>
                        <Input name="username" label="Username" type="text" />
                        <Input name="password" label="Password" type="password" />
                        <Input name="password2" label="Repeat Password" type="password" />
                        <button type="submit" className="btn primary">Create Account</button>
                    </Form>
                </Formik>
                <img src="register.svg" alt="register" />
            </div>
        </section>
    )
}

export default Register