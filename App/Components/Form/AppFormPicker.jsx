import React from 'react'
import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'
import AppPicker from '../AppPicker/AppPicker'

const AppFormPicker = ({name, categories, ...otherProps}) => {
    const { errors, setFieldValue,values, touched} = useFormikContext()
    return (
        <>
             <AppPicker 
                setSelectedItem={(item)=>setFieldValue(name, item)}
                {...otherProps}
                items={categories} 
                selectedItem={values[name]} 
            />
            <ErrorMessage isTouched={touched[name]} error={errors[name]}/>
        </>
    )
}
export default AppFormPicker
