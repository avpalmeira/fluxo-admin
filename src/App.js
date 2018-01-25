import React from 'react';
import { Admin, Resource, jsonServerRestClient, Delete} from 'admin-on-rest';

import { DeviceList, DeviceEdit, DeviceCreate } from './views/devices';
import { CostumerList, CostumerEdit, CostumerCreate } from './views/costumers';
import Dashboard from './components/Dashboard';
import DeviceIcon from 'material-ui/svg-icons/hardware/phone-iphone';
import CostumerIcon from 'material-ui/svg-icons/social/group';

const App = () => (
    <Admin
        title="A1 Admin"
        dashboard={Dashboard}
        restClient={jsonServerRestClient('http://localhost:2000')}
        >
        <Resource
            name="devices"
            list={DeviceList}
            icon={DeviceIcon}
            create={DeviceCreate}
            edit={DeviceEdit}
            remove={Delete} />
        <Resource
            name="costumers"
            list={CostumerList}
            icon={CostumerIcon}
            create={CostumerCreate}
            edit={CostumerEdit}
            remove={Delete}/>
    </Admin>
);

export default App;
