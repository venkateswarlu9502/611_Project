const assert = require('assert')
const {
  findWeekday,
  findTomorrow,
  findYesterday,
  finShopDays,
  findZodiac
} = require('../src/index')

describe('should display the day for given date', () => {
  it('should display Monday for given date', () => {
    const res = findWeekday('2022-12-12')
    assert.equal(res, 'Monday')
  })
  it('should display Monday for given date', () => {
    const res = findWeekday('2022-10-11')
    assert.equal(res, 'Tuesday')
  })
  it('should display Monday for given date', () => {
    const res = findWeekday('2022-08-18')
    assert.equal(res, 'Thursday')
  })
})

describe('should display next date', () => {
  it('should display next date of Dec 12, 2022', () => {
    const res = findTomorrow('2022-12-12')
    assert.equal(JSON.stringify(res), JSON.stringify('2022-12-13T00:00:00.000Z'))
  })
  it('should display next date of Nov 12, 2022', () => {
    const res = findTomorrow('2022-11-12')
    assert.equal(JSON.stringify(res), JSON.stringify('2022-11-13T00:00:00.000Z'))
  })
  it('should display next date of Aug 12, 2022', () => {
    const res = findTomorrow('2022-08-12')
    assert.equal(JSON.stringify(res), JSON.stringify('2022-08-13T00:00:00.000Z'))
  })
})

describe('should display previous date', () => {
  it('should display previous date of Dec 12, 2022', () => {
    const res = findYesterday('2022-12-12')
    assert.equal(JSON.stringify(res), JSON.stringify('2022-12-11T00:00:00.000Z'))
  })
  it('should display previous date of Mar 12, 2022', () => {
    const res = findYesterday('2022-03-12')
    assert.equal(JSON.stringify(res), JSON.stringify('2022-03-11T00:00:00.000Z'))
  })
  it('should display previous date of Apr 11, 2022', () => {
    const res = findYesterday('2022-04-11')
    assert.equal(JSON.stringify(res), JSON.stringify('2022-04-10T00:00:00.000Z'))
  })
})

describe('"should display number of shopping days', () => {
  it('should display number of shopping days to christmas from Dec 12, 2022', () => {
    const res = finShopDays('2022-12-12')
    assert.equal(res, '12 Days')
  })
  it('should display number of shopping days to christmas from Dec 12, 2022', () => {
    const res = finShopDays('2021-10-12')
    assert.equal(res, '64 Days')
  })
  it('should display number of shopping days to christmas from Dec 12, 2022', () => {
    const res = finShopDays('2020-09-12')
    assert.equal(res, '89 Days')
  })
})

describe('zodiac function for given date', () => {
  it('should display Capricon for given date', () => {
    const res = findZodiac('2020-10-12')
    assert.equal(res, 'Scorpio')
  })
  it('should display Capricon for given date', () => {
    const res = findZodiac('2021-12-10')
    assert.equal(res, 'Capricon')
  })
  it('should display Capricon for given date', () => {
    const res = findZodiac('2020-09-12')
    assert.equal(res, 'Libra')
  })
})