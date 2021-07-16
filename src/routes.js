import { Route, Switch } from 'react-router-dom';

import Dashboard from './views/Dashboard';
import Login from './views/Login';
import Patients from './views/Patients';
import Queues from './views/Queues';
import Recordings from './views/Recordings';
import NotFound from './views/404';


const Routes = (props) => {
    return (
        <div className="site-layout-content">
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/patients" component={Patients} />
                <Route exact path="/queues" component={Queues} />
                <Route exact path="/recordings" component={Recordings} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    );
};

export default Routes;