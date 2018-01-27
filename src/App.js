import React from 'react';
import { Admin, Resource, Delete} from 'admin-on-rest';

import { DeviceList, DeviceEdit, DeviceCreate } from './views/devices';
import { CostumerList, CostumerEdit, CostumerCreate } from './views/costumers';
import { WorkOrderList, WorkOrderEdit, WorkOrderShow } from './views/workOrders';
import Dashboard from './components/Dashboard';
import DeviceIcon from 'material-ui/svg-icons/hardware/phone-iphone';
import CostumerIcon from 'material-ui/svg-icons/social/group';
import jsonRestClient from 'aor-json-rest-client';
import data from './data';

const App = () => (
    <Admin
        title="A1 Admin"
        dashboard={Dashboard}
        restClient={jsonRestClient(data, true)}
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
        <Resource
            name="workOrders"
            list={WorkOrderList}
            show={WorkOrderShow}
            edit={WorkOrderEdit}/>
    </Admin>
);

export default App;
