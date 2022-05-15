import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

import app from '../App';
import LoginService from '../services/LoginService';
import { expect, request } from 'chai';

let LoginStub: any;

const mock = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJIZW5yaXF1ZSBTaWx2YSIsInJvbGUiOiJhZG1pbiIsImNvaW5zIjoxMDB9LCJpYXQiOjE2NTI2MDUyMTYsImV4cCI6MTY1MjY5MTYxNn0.fdLF9Xjwc7v_MBeyCNIDPlYlqOCzb9qJTyed9qIyzwQ",
  name: "Henrique Silva",
  role: "admin",
  coins: 100
}

const mockFail = null;

describe('Ao fazer uma requisicao POST a rota /login/validate', () => {
  beforeEach(async () => {
    LoginStub = await sinon.stub(LoginService, 'loginValidate');
  });

  afterEach(() => {
    LoginStub.restore();
  });

  it('Retorna o status 200 e os dados do usuario logado', async () => {
    LoginStub.resolves(mock);

    const chaiHttpResponse = await request(app).post('/login/validate')
      .send({
        email: 'silvahenrique@email.com',
        password: 'secret_silva',
      });
    const user = chaiHttpResponse.body;

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(user.name).to.be.equal('Henrique Silva');
    expect(user.role).to.be.equal('admin');
    expect(user.coins).to.be.equal(100);
  })

  it('Retorna o status 404 e a mensagem correta no corpo da requisicao', async () => {
    LoginStub.resolves(mockFail);

    const chaiHttpResponse = await request(app).post('/login/validate')
    .send({
      email: 'silvahenrique@email.com',
      password: 'secret_silva',
    });
    const user = chaiHttpResponse.body;

    expect(chaiHttpResponse.status).to.be.equal(404);
    expect(user.message).to.be.equal('Email or password invalid')
  })
})