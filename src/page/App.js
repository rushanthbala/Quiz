import React from "react";
// import Question from "../api/question.json";
import QuizBox from "../component/quizBox";
import Login from "../component/login";
import { useStateValue } from "../component/state/stateProvider";

// import
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [{ user }] = useStateValue();
  console.log(user);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          <Router>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <QuizBox />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
