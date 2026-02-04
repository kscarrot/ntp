import { describe, expect, it } from 'vitest'
import { add } from './add'

describe('add', () => {
  it('相加两个正数', () => {
    expect(add(1, 2)).toBe(3)
  })

  it('相加正负数的和为零', () => {
    expect(add(5, -5)).toBe(0)
  })

  it('相加小数', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3)
  })
})
