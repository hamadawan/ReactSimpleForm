import React, { useState, Fragment } from 'react'
import InputForm from './components/InputForm'
import EditForm from './components/EditForm'
import TableUser from './components/TableUser'
import { Paper } from '@material-ui/core'

function App() {

  const usersData = []
	const initialFormState = { id: null, name: '', gender: '' }

	const [ users, setUsersData ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ isEditing, setEditing ] = useState(false)

	const add = user => {
		user.id = users.length + 1
		setUsersData([ ...users, user ])
	}

	const deleteU = id => {
		setEditing(false)

		setUsersData(users.filter(user => user.id !== id))
	}

	const update = (id, updatedUser) => {
		setEditing(false)

		setUsersData(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)
		setCurrentUser({ id: user.id, name: user.name, gender: user.gender })
	}
	console.log("Users",usersData)
	return (
		<Paper style={{display:'flex', width:'90%', padding:'10px', margin:'0 auto',  flexDirection:'column', justifyContent:'center'}}>
	
			<h1>Simple React Form</h1>
			<div>
				<div>
					{isEditing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditForm
								editing={isEditing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={update}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<InputForm addUser={add} />
						</Fragment>
					)}
				</div>
				<div>
					<h2>View users</h2>
					<TableUser users={users} editRow={editRow} deleteUser={deleteU} />
				</div>
			</div>
		</Paper>
  );
}

export default App;
