import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import QuizScreen from './screens/QuizScreen.jsx';
import Header from './components/Header.jsx';

const App = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Switch>
                    <Route path="/login" component={LoginScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/quiz" component={QuizScreen} />
                    <Route path="/" component={HomeScreen} exact />
                </Switch>
            </main>
        </Router>
    );
};

export default App;
