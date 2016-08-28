'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import { Card, CardText } from 'material-ui/Card';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton/IconButton';
import IconClose from 'material-ui/svg-icons/navigation/close';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import { Table, Th, Tr, Td, Tbody, Thead, unsafe } from 'reactable'
import { grey500 } from 'material-ui/styles/colors';

class SOPList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sopOpen: true
    }
  }

  componentDidMount() {
    console.log('Fetch sop data from server again')
  }

  generateTableRows(data) {
    return data.map((item) => {
      return (
        <Tr
          key={item.id}
          data-sopid={item.id}
          onClick={() => {
            this.props.router.push('/view/' + item.id);
          }}
        >
          <Td column="name">
            <ListItem
              disabled={true}
              leftAvatar={
                <Avatar 
                  src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/12651018_1062657850424367_4182394999684715139_n.jpg?oh=e30402d713797115f5a4494747504458&oe=5859B02B" 
                  style={{ left: 0 }}
                />
              }
              style={{ fontSize: '13px' }}
            >
              Image Avatar
            </ListItem>
          </Td>
          <Td column="age">{item.age}</Td>
          <Td column="id">{item.id}</Td>
          <Td column="action">
            <div>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation()
                  this.props.router.push('/edit/' + item.id);
                }}
              >
                <IconEdit color={grey500} />
              </IconButton>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation()
                  if(confirm("確定刪除?")) {
                    console.log('Delete SOP No.' + item.id)
                    this.props.router.push('/list');
                  }
                }}
              >
                <IconDelete color={grey500} />
              </IconButton>
            </div>
          </Td>
        </Tr>
      )
    })
  }
  
  getReactTable() {
    const data = [
      {name: 'hwkao', age: 12, id: 1},
      {name: 'hwao', age: 122, id: 2},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3},
      {name: 'hkao', age: 16, id: 3}
    ]

    return (
      <Table
        className="table"
        sortable={['id', 'name', 'age']}
        itemsPerPage={7} 
        filterable={['name', 'age']}
      >
        <Thead>
          <Th column="id">Id</Th>
          <Th column="name">Name</Th>
          <Th column="age">Age</Th>
          <Th column="action">Action</Th>
        </Thead>
        {this.generateTableRows(data)}
      </Table>
    )
  }

  render() {
    return (
      <Card
        style={{ display: this.state.sopOpen ? '' : 'none' }}
      >
        <CardText>
          {this.getReactTable()}
        </CardText>
      </Card>
    )
  }
}

export default SOPList;
