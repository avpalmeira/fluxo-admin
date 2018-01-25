// in src/posts.js
import React from 'react';
import { List, Edit, Create, Filter, Datagrid, TextField, EditButton, SimpleList,
        DisabledInput, EmailField, SimpleForm, TextInput, Responsive } from 'admin-on-rest';

const CostumersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const CostumerList = (props) => (
    <List {...props} filters={<CostumersFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.id}
                    secondaryText={record => record.name}
                    tertiaryText={record => record.email}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="telephone_number" />
                    <EmailField source="email" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const CostumerTitle = ({record}) => {
    return <span>Costumer {record ? `"${record.product_name}"` : ''}</span>;
};

export const CostumerEdit = (props) => (
    <Edit title={<CostumerTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="name" />
            <TextInput source="telephone_number" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
)

export const CostumerCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="telephone_number" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
)
