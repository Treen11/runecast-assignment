import commonClientParser from '../../../../src/module/common/client/commonClientParser.js'

describe('commonClientParser.js', () => {
  it('parses number value correctly', () => {
    const value = commonClientParser.parseString(5)

    expect(value).toBe('5')
  })

  it('parses nil values correctly', () => {
    const nullValue = commonClientParser.parseString(null)
    const undefinedValue = commonClientParser.parseString(undefined)

    expect(nullValue).toBe('')
    expect(undefinedValue).toBe('')
  })

  it('parses array and object values correctly', () => {
    const value = commonClientParser.parseString([0, {}])

    expect(value).toBe('0,[object Object]')
  })
})
