import Article from "./Components/Articles";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Tags from "./Components/Tags";
import { localStorageKey, userVerifyURL } from "./utils/constant";
import { Route, Switch } from 'react-router-dom';
import Error from './Components/Error';
import SingleArticle from './Components/SingleArticle';
import React from "react";
import FullPageSpinner from "./Components/FullPageSpinner";
import NewPost from "./Components/NewPost";
import Setting from "./Components/Setting";
import Profile from './Components/Profile';


class App extends React.Component {
  state = {
    isLoggedIn: false,
    user: null,
    isVerifying: true,

  }

  componentDidMount() {
    let storageKey = localStorage[localStorageKey]
    if (storageKey) {
      fetch(userVerifyURL, {
        method: 'GET',
        headers: {
          authorization: `Token ${storageKey}`

        }
      }).then((res) => {
        if (res.ok) {
          return res.json().then(({ errors }) => {
            return Promise.reject(errors);
          })
        }
      }).then((user) => {
        this.updateUser(user);

      }).catch((errors) => console.log(errors));
    } else {
      this.setState({ isVerifying: false })
    }
  }

  updateUser = (user) => {

    this.setState({
      isLoggedIn: true,
      user: user,
      isVerifying: false,
    })
    localStorage.setItem(localStorageKey, user.token);



  }
  render() {
    if (this.state.isVerifying) {
      return <FullPageSpinner />
    } else {
      return (
        <>



          <Header userInfo={this.state} />
          {
            this.state.isLoggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp updateUser={this.updateUser} />
          }






        </>
      )
    }
  }
}
function AuthenticatedApp() {
  return (
    <Switch>

      <Route path="/" exact><Home /></Route>
      <Route path="/Hero" > <Hero /></Route>
      <Route path="/newPost" > <NewPost /></Route>
      <Route path="/settings" > <Setting /></Route>
      <Route path="/profile" > <Profile /></Route>



      <Route path="/article/:slug" component={SingleArticle}></Route>
      <Route path="*"><Error /></Route>
    </Switch>


  )
}
function UnauthenticatedApp(props) {
  return (
    <Switch>

      <Route path="/" exact><Home /></Route>
      <Route path="/Hero" > <Hero /></Route>
      <Route path="/Login" ><Login updateUser={props.updateUser} /></Route>
      <Route path="/Signup" ><Signup updateUser={props.updateUser} /></Route>


      <Route path="/article/:slug" component={SingleArticle}></Route>
      <Route path="*"><Error /></Route>
    </Switch>


  )
}


export default App;
