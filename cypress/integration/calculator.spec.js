describe('Calculator', () => {
  it('add', () => {
    var a = 5
    var b = 12
    expect(a + b).to.equal(parseInt(Cypress.env('CUF_CPG_add_result')))
  })
  it('mult', () => {
    var a = 2
    var b = 4
    expect(a * b).to.equal(parseInt(Cypress.env('CUF_IT_mult_result')))
  })
  it('sub', () => {
    var a = 10
    var b = 5
    expect(a - b).to.equal(parseInt(Cypress.env('CUF_TC_sub_result')))
  })
  it('div', () => {
    var a = 10
    var b = 5
    expect(a / b).to.equal(parseInt(Cypress.env('CUF_TS_div_result')))
  })
})
