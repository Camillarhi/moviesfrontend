import { ErrorMessage, Field } from "formik";
import React from "react";

export default function TextField(props: textFieldProps) {
    return (
        <div className ="mb-3">
        <label htmlFor={props.field}>{props.displayName}</label>
        <Field name={props.field} id={props.field} className="form-control" />
        {/* <ErrorMessage name={props.field}>{msg=>
        <div className="text-danger">{msg}</div>} </ErrorMessage>*/}
        <ErrorMessage name={props.field} component="div" className="text-danger"/>
    </div>
    )
}

interface textFieldProps{
    field: string;
    displayName: string;
}



