/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen, fireEvent } from '@testing-library/react'
 import Nav from '../components/Nav'

 describe('Nav', () => {
     it('Has a navigation tab to go to the Form Page', () => {
        render(<Nav />)
        const formNavigationTab = screen.getByText(/form/i)
        
        expect(formNavigationTab).toBeInTheDocument()
     })

     it('Has a navigation tab to go to the Guestbook Page', () => {
        render(<Nav />)
        const guestbookNavigationTab = screen.getByText(/guestbook/i)
        
        expect(guestbookNavigationTab).toBeInTheDocument()
     })
 })