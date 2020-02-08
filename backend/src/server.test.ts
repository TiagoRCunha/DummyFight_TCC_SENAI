import req from 'supertest'
import server from './server'

beforeAll(async () => {
  console.log(' TDD with Jest')
})

describe(' SERVER: ', () => {
  test('[GET] /', async () => {
    const res = await req(server).get('/')
    expect(res.body).toStrictEqual({ message: 'Ok' })
  })
})
