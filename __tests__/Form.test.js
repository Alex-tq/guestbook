/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
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

describe("Form", () => {
    it('should be able to type into name input', async () => {
        render(<Form />)

        const nameInput = screen.getByPlaceholderText('Name')
        fireEvent.change(nameInput, { target: {value: 'John'} })
        expect(nameInput.value).toBe('John')
    });

    it('should be able to type into message input', async () => {
        render(<Form />)

        const textarea = screen.getByPlaceholderText('Message')
        fireEvent.change(textarea, { target: {value: 'Hello'} })
        expect(textarea.value).toBe('Hello')
    });

    it('should clear name input and text area when submit is clicked', async () => {
        render(<Form />)

        const nameInput = screen.getByPlaceholderText('Name')
        fireEvent.change(nameInput, { target: {value: 'John'} })
        const textarea = screen.getByPlaceholderText('Message')
        fireEvent.change(textarea, { target: {value: 'Hello'} })
        const submitButton = screen.getByRole('button')

        fireEvent.click(submitButton)
        
        expect(nameInput.value).toBe('')
        expect(textarea.value).toBe('')
        
    });
})