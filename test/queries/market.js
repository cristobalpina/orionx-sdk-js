import test from 'ava'
import Orionx from '../../src'
import setOrionxCredentials from '../../src/helpers/setOrionxCredentials'
import delay from '../../src/helpers/delay'

test.beforeEach(t => {
  setOrionxCredentials()
})
test('Market returns LTC BTC market', async t => {
  t.plan(2)
  try {
    const market = await Orionx.market({code: 'LTCBTC'})
    t.is(market.code, 'LTCBTC')
    t.is(market.name, 'LTC/BTC')
  } catch (e) {
    t.fail(e.message)
  }
})

test.afterEach(async t => {
  await delay()
})
