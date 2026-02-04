import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Greeting from './Greeting'

describe('greeting', () => {
  it('默认显示 Hello, World!', () => {
    render(<Greeting />)
    expect(screen.getByTestId('greeting')).toHaveTextContent('Hello,World!')
  })

  it('传入 name 时显示对应问候', () => {
    render(<Greeting name="Vitest" />)
    expect(screen.getByTestId('greeting')).toHaveTextContent('Hello,Vitest!')
  })

  it('点击按钮时 count 增加', async () => {
    const user = userEvent.setup()
    render(<Greeting />)

    expect(screen.getByTestId('count')).toHaveTextContent('Count:0')

    await user.click(screen.getByTestId('increment'))
    expect(screen.getByTestId('count')).toHaveTextContent('Count:1')

    await user.click(screen.getByTestId('increment'))
    expect(screen.getByTestId('count')).toHaveTextContent('Count:2')
  })
})
