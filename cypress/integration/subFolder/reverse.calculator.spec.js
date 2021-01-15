describe('reverseCalculator', () => {
  it('reverseDS', () => {
    var a = 16
    var p1 = a / 2
    var p2 = p1 / 2
    expect(p1).to.equal(parseInt(Cypress.env('DS_reverse_result1')))
    expect(p2).to.equal(parseInt(Cypress.env('DS_reverse_result2')))
  })
  it('reverseDSNAME', () => {
      var a = "Result Dataset"
      expect(a).to.equal(Cypress.env('DSNAME'))
    })
})
