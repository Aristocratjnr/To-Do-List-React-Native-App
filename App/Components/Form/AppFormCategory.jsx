import React from 'react'
import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'
import AppPickCategory from '../AppCategory/AppPickCategory'

const AppFormCategory = ({
    name, 
    categories,
    category, 
    setCategory, 
    createCategory, 
    loading,
    ...otherProps
}) => {
    const { errors, setFieldValue,values, touched} = useFormikContext()
    return (
        <>
             <AppPickCategory 
                setSelectedItem={(item)=>setFieldValue(name, item)}
                items={categories} 
                selectedItem={values[name]} 
                category={category}
                setCategory={setCategory}
                createCategory={createCategory}
                loading={loading}
                {...otherProps}
            />
            <ErrorMessage isTouched={touched[name]} error={errors[name]}/>
        </>
    )
}
export default AppFormCategory
