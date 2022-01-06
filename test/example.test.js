// eslint-disable-next-line object-curly-newline
import { describe, it, expect, run } from 'https://gitlab.com/internetarchive/eslint/-/raw/main/test/test.js'


describe('test imports', () => {
  it('importing', () => {
    expect(typeof expect).toEqual('function')
    expect(typeof nope).toEqual('undefined')
  })
})


run()
