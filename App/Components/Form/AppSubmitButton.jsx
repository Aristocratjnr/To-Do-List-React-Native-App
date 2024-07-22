import { useFormikContext } from 'formik'
import React from 'react'
import AppButton from '../AppButton/AppButton'

const AppSubmitButton = ({title}) => {
    const {handleSubmit} = useFormikContext()
    return (
        <AppButton 
            title={title}
            // color={primary} 
            onPress={handleSubmit} 
        />
    )
}

export default AppSubmitButton

