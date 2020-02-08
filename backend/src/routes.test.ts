import request from 'supertest'
import server from './server'

const fake_id = '5e39f9109773671b60f2ed0d'

describe(' ROUTES: ', () => {
  test('[GET] /users:id', async () => {
    const res = await request(server).get('/users/' + fake_id)
    expect(res.status).toEqual(200)
    expect(res.body).toBeCalledWith(
      expect.objectContaining({ _id: expect(fake_id) })
    )
  })
})
