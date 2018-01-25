// in src/posts.js
import React from 'react';
import { List, Edit, Filter, Create, Datagrid, TextField, EditButton,
        LongTextInput, SimpleForm, ReferenceField, ReferenceInput,
        TextInput, SelectInput, DisabledInput, Responsive, SimpleList } from 'admin-on-rest';

const DevicesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput source="costumerId"
            label="Owner" reference="costumers" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const DeviceList = (props) => (
    <List {...props} filters={<DevicesFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.id}
                    secondaryText={record => record.product_name}
                    tertiaryText={record => record.imei}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="product_name" />
                    <ReferenceField source="costumerId"
                        label="Owner" reference="costumers">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="imei" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const DeviceTitle = ({record}) => {
    return <span>Device {record ? `"${record.product_name}"` : ''}</span>;
};

export const DeviceEdit = (props) => (
    <Edit title={<DeviceTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <ReferenceInput source="costumerId"
                label="Owner" reference="costumers">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="product_name" />
            <TextInput source="imei" />
        </SimpleForm>
    </Edit>
)

export const DeviceCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="costumerId"
                label="Owner" reference="costumers" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="product_name" />
            <TextInput source="imei" />
        </SimpleForm>
    </Create>
)
