import "./FormControls.css"
import { Field, ErrorMessage } from "formik"

export const Input = ({ name, label, ...rest }) => {
    return (
        <div className="form-control">
            { label && <label htmlFor={name}>{ label }</label> }
            <Field name={name} {...rest} />
            <ErrorMessage name={name}>
                {err => <small className="form-error">{err}</small>}
            </ErrorMessage>
        </div>
    )
}