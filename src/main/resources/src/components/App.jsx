import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './Home.jsx';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';

class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route path='/Page1' component={Page1} />
                    <Route path='/Page2' component={Page2} />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
