import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Quiz from '../src/containters/Quiz/Quiz'
import QuizList from './containters/QuizList/QuizList';
import Auth from './containters/Auth/Auth';
import QuizCreator from './containters/QuizCreator/QuizCreator';


class App extends Component{
  render() {
    return (
      <Layout>
          <Switch>
            <Route path='/auth' component={Auth}/>
            <Route path='/quiz-creator' component={QuizCreator}/>
            <Route path='/quiz/:id' component={Quiz}/>
            <Route path='/' component={QuizList}/>
          </Switch>
      </Layout>
    );
  }
}

export default App;
