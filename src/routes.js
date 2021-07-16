import { Route, Switch } from 'react-router-dom';

import Dashboard from './views/Dashboard';
import Patients from './views/Patients';
import Queues from './views/Queues';
import Recordings from './views/Recordings';

const Routes = (props) => {
    return (
        <div className="site-layout-content">
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/patients" component={Patients} />
                <Route exact path="/queues" component={Queues} />
                <Route exact path="/recordings" component={Recordings} />
            </Switch>
        </div>
    );
};

export default Routes;