import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../Utils/Button";
import { movieTheaterCreationDTO } from "./movieTheater.model";
import * as Yup from 'yup';
import Maps from "../Utils/Maps";

export default function MovieTheaterForm(props: movieTheaterFormProps) {
    return (
        <Formik 
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required("This Field Is Required").firstLetterUppercase()
            })}
        >
            {(formikProps)=> (
                <Form>
                    <TextField displayName="Name" field="name" />

                    <div style={{marginBottom: "1rem"}} >
                        <Maps  />
                    </div>

                    <Button disabled={formikProps.isSubmitting} type="submit" >
                        Save Changes
                        </Button>
                        <Link className="btn btn-secondary" to="/movietheaters" >Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface movieTheaterFormProps{
    model: movieTheaterCreationDTO;
    onSubmit(values:movieTheaterCreationDTO, actions: FormikHelpers<movieTheaterCreationDTO>): void;
}