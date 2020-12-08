import React from 'react'
import { Button, Paper } from '@material-ui/core'

const TableUser = props => (
<Paper style={{display:'flex', width:'80%', padding:'10px', margin:'0 auto',  flexDirection:'row', justifyContent:'space-around'}}>
		
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.gender}</td>
            <td>
              <Button variant="contained" 
                style={{marginLeft:'5px'}} 
                color="primary" 
                onClick={() => {
                  props.editRow(user)
                }}
              >
                Edit
              </Button>
              <Button variant="contained" 
                style={{marginLeft:'5px'}} 
                color="primary" 
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td>No users</td>
        </tr>
      )}
    </tbody>
  </table>
</Paper>
)

export default TableUser