import { describe, expect, it, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('group', () => {
  it('renders learn testing', () => {
    render(<Header />)
    const linkElement = screen.getByText(/header/i)
    expect(linkElement).toBeDefined()
  })
  
  it('renders home', () => {
    render(<Header />)
    const linkElement = screen.getByText(/home/i)
    expect(linkElement).toBeDefined()
  })
})
