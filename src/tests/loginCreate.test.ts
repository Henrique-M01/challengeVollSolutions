import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

import app from '../App';
import LoginService from '../services/LoginService';
import { expect, request } from 'chai';

let LoginStub: any;

const mock = {
  role: "user",
  coins: 0
}

const mockFail = null;

describe('Ao fazer uma requisicao POST a rota /login/create', () => {
  beforeEach(async () => {
    LoginStub = await sinon.stub(LoginService, 'createLogin');
  });

  afterEach(() => {
    LoginStub.restore();
  });

  it('Retorna o status 201 e os dados do usuario criado', async () => {
    LoginStub.resolves(mock);

    const chaiHttpResponse = await request(app).post('/login/create')
      .send({
        name: "Jose eduardo",
        email: "zezinho123@email.com",
        password: "secret_zezinho"
    });
    const user = chaiHttpResponse.body;

    expect(chaiHttpResponse.status).to.be.equal(201);
    expect(user.role).to.be.equal('user');
    expect(user.coins).to.be.equal(0);
  })

  it('Retorna o status 400 e a mensagem correta no corpo da requisicao', async () => {
    LoginStub.resolves(mockFail);

    const chaiHttpResponse = await request(app).post('/login/create')
    .send({
      name: "Jose eduardo",
      email: "zezinho123@email.com",
      password: "secret_zezinho"
  });
    const user = chaiHttpResponse.body;

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(user.message).to.be.equal('User already exists')
  })
})