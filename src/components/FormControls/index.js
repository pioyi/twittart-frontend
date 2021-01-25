import "./FormControls.css"
import { useField } from "formik"

export const Input = ({ label, as, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className={`form__control ${meta.error ? "error" : ""}`}>
            <label htmlFor={field.name}>
                { meta.error || label }
            </label>
            { as === "textarea" ? (
                <textarea {...field} {...props} />
            ) : (
                <input {...field} {...props} />
            )}
        </div>
    )
}
