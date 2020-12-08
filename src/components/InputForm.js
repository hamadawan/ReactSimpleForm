import React, { useState } from 'react'
import { Button, Paper, TextField } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const InputForm = props => {
	const initialFormState = { id: null, name: '', gender: 'male' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<Paper style={{display:'flex', width:'80%', height:"150px", padding:'10px', margin:'0 auto',  flexDirection:'row', justifyContent:'space-around'}}>
			<label>Name:</label>
			<TextField type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Gender:</label>

			<FormControl component="fieldset">
				<RadioGroup aria-label="gender" name="gender" value={user.gender} onChange={handleInputChange}>
					<FormControlLabel value="female" control={<Radio />} label="Female" />
					<FormControlLabel value="male" control={<Radio />} label="Male" />
					<FormControlLabel value="other" control={<Radio />} label="Other" />
				</RadioGroup>
			</FormControl>
			{/* <TextField type="text" name="gender" value={user.gender} onChange={handleInputChange} /> */}
			
			<Button variant="contained" style={{marginLeft:'5px', height:'50px'}} color="primary" 
				
				onClick={event => {
					if (!user.name || !user.gender) return
					props.addUser(user)
					setUser(initialFormState)
					console.log("added",user)
				}}
			>
				Add new user
			</Button>
			
		</Paper>
	)
}

export default InputForm