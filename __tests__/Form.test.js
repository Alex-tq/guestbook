/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Form from '../components/Form'

test('The form renders correctly', ()=>{
    render(<Form />)
    const heading = screen.getByRole('heading', {
        name: /Add guest name and message/i,
    })
    const nameInput = screen.getByPlaceholderText('Name')
    const textarea = screen.getByPlaceholderText('Message')
    const submitButton = screen.getByText('Submit')
    
    expect(heading).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
    expect(textarea).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()

})
