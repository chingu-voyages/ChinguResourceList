const membership = [
  {status: 'ACTIVE', statusDt: '2020-09-29'},
  {status: 'INACTIVE', statusDt: '2020-09-29'},
  {status: 'COMPLETED', statusDt: '2020-09-29'},
  {status: 'ACTIVE', statusDt: '2020-09-30'},
]

// Before refactoring: Two passes over the membership object array.
// But what if the membership array grows to 10K entries? What impact
// would this have on performance?
const count = membership.reduce((count, current) => {
  return ['ACTIVE', 'COMPLETED'].includes(current.status) ? count + 1 : count
}, 0)

const mostRecentDt = membership.reduce((mostRecentDt, current) => {
  return mostRecentDt >= current.statusDt ? mostRecentDt : current.statusDt
}, '' )

console.log(`Before: resulting count: ${ count } mostRecentDt: ${ mostRecentDt }`)

// After refactoring: one pass over the membership object array and return an
// object containing the aggregated results. Note that this is destructured 
// into two discrete constants containing the resulting values so we don't have
// to use object notation to reference them.
const {newCount, newMostRecentDt} = membership.reduce((result, current) => {
  result.newCount = ['ACTIVE', 'COMPLETED'].includes(current.status) 
    ? result.newCount + 1 : result.newCount
  result.newMostRecentDt = result.newMostRecentDt >= current.statusDt 
    ? result.newMostRecentDt : current.statusDt
  return result
}, { newCount: 0, newMostRecentDt: '1969-01-01' } )

console.log(`\nAfter:  resulting count: ${ newCount } mostRecentDt: ${ newMostRecentDt }`)