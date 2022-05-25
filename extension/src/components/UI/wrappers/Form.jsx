import './Form.css'

import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const Form = (props) => {
    // Props
    const { children, onSubmit, className = '' , schema} = props

    // Hooks
    const methods = useForm({ resolver: yupResolver(schema || {}) })
    
    // Return
    return (
        <FormProvider {...methods}>
            <>
                <form
                    className={`Form ${className}`}
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    {children}
                </form>
            </>
        </FormProvider>
    )
}

export default Form
