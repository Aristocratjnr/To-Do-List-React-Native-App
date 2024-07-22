import { Formik } from 'formik'
import React from 'react'


const AppForm = ({initialValues,validationSchema, children, onSubmit}) => {
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
       {({})=>(
           <>
            {children}
           </>
       )}
    </Formik>
    )
}

export default AppForm

