import React, { Component } from 'react';
import Nav from './Nav';
import './App.css';
import firebase, { auth, provider } from './firebase';

class App extends Component {
  state = {
    currentItem: '',
    username: '',
    items: [],
    user: null,
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user,
        });
      }
      this.setState({
        items: newState,
      });
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = () => {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user,
      });
    });
  };

  logout = () => {
    auth.signOut().then(() => {
      this.setState({
        user: null,
      });
    });
  };

  removeItem = itemId => {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  };

  handleSubmit = e => {
    e.preventDefault();
    //we need to carve out a space in our Firebase database where we'd like to store all of the recipes. We do this by calling the ref method and passing in the destination we'd like them to be stored (items).
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.user.displayName || this.state.user.email,
    };
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: '',
    });

    // view a snapshot of what is in your database under .ref('items')

    // itemsRef.on('value', (snapshot) => {
    //   console.log(snapshot.val());
    // });
  };

  render() {
    // if (this.state.items.length < 1) {
    //   return "loading...";
    // }

    return (
      <div className="app">
        <Nav logout={this.logout} login={this.login} user={this.state.user} />
        {this.state.user ? (
          <div>
            <div className="container">
              <section className="add-item">
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="username"
                    placeholder="What's your name?"
                    value={this.state.user.displayName || this.state.user.email}
                  />
                  <input
                    type="text"
                    name="currentItem"
                    placeholder="What are you bringing?"
                    onChange={this.handleChange}
                    value={this.state.currentItem}
                  />
                  <button>Add Item</button>
                </form>
              </section>
            </div>
            <div className="container">
              <section className="display-item">
                <div className="wrapper">
                  <ul>
                    {this.state.items.map(item => {
                      return (
                        <li key={item.id}>
                          <h3>{item.title}</h3>
                          <p>
                            brought by: {item.user}
                            {item.user === this.state.user.displayName ||
                            item.user === this.state.user.email ? (
                              <button onClick={() => this.removeItem(item.id)}>
                                Remove Item
                              </button>
                            ) : null}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <div className="wrapper">
            <p>You must be logged in to see</p>
          </div>
        )}
      </div>
    );
  }
}
export default App;
