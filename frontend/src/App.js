import React from "react";

import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { apiUrl } from "./config";

import "./App.css";

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get(`${apiUrl}/users`).then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <div className="App">
        <Tab.Container defaultActiveKey="index">
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="create">Criar Usuario</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="update">Atualizar um usuario</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="delete">Deletar um usuario</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="show">Procure um usuario</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="index">Listar usuarios</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="index">
              <div className="jumbotron">
                <div className="row">
                  <div id="create" className="control col-6">
                    <div className="card pt-3">
                      <form action="#" method="post">
                        <div className="form-group col-8 mx-auto">
                          <input
                            className="form-control"
                            type="text"
                            name="newEmail"
                            id="newEmail"
                          />
                        </div>
                        <div className="form-group col-8 mx-auto">
                          <input
                            className="form-control "
                            type="text"
                            name="newFirstName"
                            id="newFirstName"
                          />
                        </div>
                        <div className="form-group col-8 mx-auto">
                          <input
                            className="form-control "
                            type="text"
                            name="newLastName"
                            id="newLastName"
                          />
                        </div>
                        <div className="form-group col-6 mx-auto">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            Enviar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card col-6 mx-auto">
                    <ul className="form-group">
                      {this.state.users.map(user => (
                        <li key={user._id}>
                          {user.firstName} {user.lastName}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="show">
              <div className="jumbotron bg-info">
                <div className="row">
                  <div id="create" className="control col-6">
                    <div className="card pt-3">
                      <form action="#" method="post">
                        <div className="form-group col-8 mx-auto">
                          <input
                            className="form-control"
                            type="text"
                            name="newEmail"
                            id="newEmail"
                          />
                        </div>
                        <div className="form-group col-8 mx-auto">
                          <input
                            className="form-control "
                            type="text"
                            name="newFirstName"
                            id="newFirstName"
                          />
                        </div>
                        <div className="form-group col-8 mx-auto">
                          <input
                            className="form-control "
                            type="text"
                            name="newLastName"
                            id="newLastName"
                          />
                        </div>
                        <div className="form-group col-6 mx-auto">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            Enviar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card col-6 mx-auto">
                    <ul className="form-group">
                      {this.state.users.map(user => (
                        <li key={user._id}>
                          {user.firstName} {user.lastName}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="delete">
              <div className="jumbotron bg-info">
                <div className="row">
                  <div id="create" className="control col-6">
                    <div className="card pt-3">
                      <form action="#" method="post">
                        <div className="form-group col-8 mx-auto">
                          <input
                            className="form-control"
                            type="text"
                            name="newEmail"
                            id="newEmail"
                          />
                        </div>
                        <div className="form-group col-8 mx-auto">
                          <input
                            className="form-control "
                            type="text"
                            name="newFirstName"
                            id="newFirstName"
                          />
                        </div>
                        <div className="form-group col-8 mx-auto">
                          <input
                            className="form-control "
                            type="text"
                            name="newLastName"
                            id="newLastName"
                          />
                        </div>
                        <div className="form-group col-6 mx-auto">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            Enviar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card col-6 mx-auto">
                    <ul className="form-group">
                      {this.state.users.map(user => (
                        <li key={user._id}>
                          {user.firstName} {user.lastName}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="update">
              <div className="jumbotron bg-info">
                <div className="row">
                  <div id="create" className="control col-6">
                    <div className="card pt-3">
                      <form action="#" method="post">
                        <div className="form-group col-8 mx-auto">
                          <input
                            className="form-control"
                            type="text"
                            name="newEmail"
                            id="newEmail"
                          />
                        </div>
                        <div className="form-group col-8 mx-auto">
                          <input
                            className="form-control "
                            type="text"
                            name="newFirstName"
                            id="newFirstName"
                          />
                        </div>
                        <div className="form-group col-8 mx-auto">
                          <input
                            className="form-control "
                            type="text"
                            name="newLastName"
                            id="newLastName"
                          />
                        </div>
                        <div className="form-group col-6 mx-auto">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            Enviar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card col-6 mx-auto">
                    <ul className="form-group">
                      {this.state.users.map(user => (
                        <li key={user._id}>
                          {user.firstName} {user.lastName}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="create">
              <div className="jumbotron bg-info">
                <div className="row">
                  <div id="create" className="control col-6">
                    <div className="card pt-3">
                      <form action="#" method="post">
                        <div className="form-group col-8 mx-auto">
                          <input
                            className="form-control"
                            type="text"
                            name="newEmail"
                            id="newEmail"
                          />
                        </div>
                        <div className="form-group col-8 mx-auto">
                          <input
                            className="form-control "
                            type="text"
                            name="newFirstName"
                            id="newFirstName"
                          />
                        </div>
                        <div className="form-group col-8 mx-auto">
                          <input
                            className="form-control "
                            type="text"
                            name="newLastName"
                            id="newLastName"
                          />
                        </div>
                        <div className="form-group col-6 mx-auto">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            Enviar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card col-6 mx-auto">
                    <ul className="form-group">
                      {this.state.users.map(user => (
                        <li key={user._id}>
                          {user.firstName} {user.lastName}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  }
}

export default App;
