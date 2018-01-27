// in src/posts.js
import React from 'react';
import { Show, List, Edit, SimpleShowLayout, DateField, LongTextField,
        ReferenceField, TextField, EditButton, SimpleForm, TextInput, DateInput,
        DisabledInput, Datagrid, ShowButton } from 'admin-on-rest';

export const WorkOrderList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="date" />
            <ReferenceField source="workObjectId"
                label="Object" reference="devices">
                <TextField source="productName" />
            </ReferenceField>
            <ReferenceField source="workObjectId"
                label="Owner" reference="devices">
                <ReferenceField source="costumerId"
                    reference="costumers">
                    <TextField source="name" />
                </ReferenceField>
            </ReferenceField>
            <TextField source="objState" label="State"/>
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export const WorkOrderShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="date" />
            <ReferenceField source="workObjectId"
                label="Object" reference="devices">
                <TextField source="productName" />
            </ReferenceField>
            <TextField source="objState" label="State"/>
        </SimpleShowLayout>
    </Show>
);

export const WorkOrderEdit = (props) => (
    <Edit {...props} title="Edit Work Order">
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="objState" label="State" />
            <TextInput source="date" />
        </SimpleForm>
    </Edit>
);
