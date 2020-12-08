import React, { useState } from 'react'
import { Button, Paper, TextField } from '@material-ui/core'

const InputForm = props => {
	const initialFormState = { id: null, name: '', gender: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<Paper style={{display:'flex', width:'80%', height:"40px", padding:'10px', margin:'0 auto',  flexDirection:'row', justifyContent:'space-around'}}>
			<label>Name:</label>
			<TextField type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Gender:</label>
			<TextField type="text" name="gender" value={user.gender} onChange={handleInputChange} />
			<Button variant="contained" style={{marginLeft:'5px'}} color="primary" 
				
				onClick={event => {
					if (!user.name || !user.gender) return
					props.addUser(user)
					setUser(initialFormState)
				}}
			>
				Add new user
			</Button>
			
		</Paper>
	)
}

export default InputForm