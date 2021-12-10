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
    //console.log(storageKey, 'in app storage key')
    if (storageKey) {
      fetch(userVerifyURL, {
        method: 'GET',
        headers: {
          authorization: `Token ${storageKey}`

        }
      }).then((res) => res.json()).then((user) => {
        //console.log(user, 'user inside then');

        this.updateUser(user);

      })
    } else {
      this.setState({ isVerifying: false })
    }
  }

  updateUser = (user) => {
    //console.log('user in App component', user)

    this.setState({
      isLoggedIn: true,
      user: user,
      isVerifying: false,
    })
    localStorage.setItem(localStorageKey, user.user.token);



  }

  updateOnLogout = () => {
    this.setState({
      isLoggedIn: false,
      isVerifying: false,
    })
    localStorage.clear();
  }
  render() {
    if (this.state.isVerifying) {
      return <FullPageSpinner />

    } else {

      return (
        <>



          <Header userInfo={this.state} updateUser={this.updateOnLogout} />
          {
            this.state.isLoggedIn ? <AuthenticatedApp user={this.state.user} /> : <UnauthenticatedApp updateUser={this.updateUser} user={this.state.user} />
          }






        </>
      )
    }
  }
}

function AuthenticatedApp(props) {
  return (
    <Switch>

      <Route path="/" exact><Home /></Route>
      <Route path="/Hero" > <Hero /></Route>
      <Route path="/newPost" > <NewPost user={props.user} /></Route>
      <Route path="/settings" > <Setting /></Route>
      <Route path="/profile" > <Profile user={props.user} /></Route>



      <Route path="/article/:slug" >
        <SingleArticle user={props.user} />
      </Route>
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


      <Route path="/article/:slug" >
        <SingleArticle user={props.user} />
      </Route>
      <Route path="*"><Error /></Route>
    </Switch>


  )
}


export default App;
