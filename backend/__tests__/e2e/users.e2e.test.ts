import request from "supertest";
import {app} from "../../src";
import {HTTP_STATUS} from "../../src/constants";


describe('/users', () => {
    beforeAll(async () => {
        await request(app).delete ('/testing/all-data')
    })

    it('1 - GET: /users - return 200 & empty array', async () => {
        const getUsers = await request(app)
            .get('/users')
            .auth('admin', 'qwerty', {type: 'basic'})

        expect(getUsers).toBeDefined()
        expect(getUsers.status).toEqual(HTTP_STATUS.OK_200)
        expect(getUsers.body).toEqual({ pagesCount: 0, page: 1, pageSize: 10, totalCount: 0, items: [] })
    })

    let createdUser1: any = null
    const password1 = 'qwerty1'
    it('2 - POST: /users - return 201 & create user', async () => {
        const firstUser = {
            login: 'lg-647449',
            password: 'qwerty1',
            email: 'valid-email@mail.ru'
        }
        const createFirstUserResponse = await request(app)
            .post('/users')
            .auth('admin', 'qwerty', {type: 'basic'})
            .send({
                login: firstUser.login,
                password: firstUser.password,
                email: firstUser.email
            })
            .expect(HTTP_STATUS.CREATED_201)

        expect(createFirstUserResponse).toBeDefined()
        expect(createFirstUserResponse.status).toEqual(HTTP_STATUS.CREATED_201)
        createdUser1 = createFirstUserResponse.body
        expect(createdUser1).toEqual({
            id: expect.any(String),
            login: firstUser.login,
            email: firstUser.email,
            createdAt: expect.any(String),
        })

        await request(app)
            .get('/users')
            .auth('admin', 'qwerty', {type: 'basic'})
            .expect(HTTP_STATUS.OK_200, { pagesCount: 1, page: 1, pageSize: 10, totalCount: 1, items: [createdUser1] })

        expect.setState({firstUser})
    })

    let token: string = ''
    it('3 - POST: /auth/login - login to system', async () => {
        const createResponse = await request(app)
            .post('/auth/login')
            .send({
                loginOrEmail: createdUser1.login,
                password: password1,
            })
            .expect(HTTP_STATUS.OK_200)

        //чтобы .split не ругался на возможный undefined
        if (!createResponse.headers.authorization) return new Error()
        token = createResponse.headers.authorization.split(' ')[1]
        await request(app)
            .get('/auth/me')
            .auth('token', {type: 'bearer'})
            .expect(HTTP_STATUS.OK_200, {
                email: createdUser1.email,
                login: createdUser1.login,
                userId: createdUser1.userId
            })
    })
})