import { Button, Paper, TextField } from '@material-ui/core'
import React, { useState, useEffect } from 'react'


const EditForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <Paper style={{display:'flex', width:'80%', height:"40px", padding:'10px', margin:'0 auto',  flexDirection:'row', justifyContent:'space-around'}}>
	
      <label>Name</label>
      <TextField type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Gender</label>
      <TextField type="text" name="gender" value={user.gender} onChange={handleInputChange} />
      <Button variant="contained" style={{marginLeft:'5px'}} color="primary" 
        onClick={() => {
          props.setEditing(false)
          props.updateUser(user.id, user)
        }}
      >
        Update
      </Button>
      <Button variant="contained"  style={{marginLeft:'5px'}} color="primary"
        onClick={() => {
          props.setEditing(false)
        }}
      >
        Cancel
      </Button>

    </Paper>
  )
}

export default EditForm