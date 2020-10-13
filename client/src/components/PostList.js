import React from 'react'
import { List, Filter, TextInput, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'


const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

const PostList = (props) => {
    return (
        <List {...props} filters={<PostFilter />}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='title' />
                <TextField source='publishedAt' />
                <EditButton basePath='/posts' />
                <DeleteButton basePath='/posts' />

            </Datagrid>

        </List>
    )
}

export default PostList;