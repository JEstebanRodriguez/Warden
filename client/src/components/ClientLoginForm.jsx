import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
	Box,
	Container,
	TextField,
	InputAdornment,
	InputLabel,
	IconButton,
	FormControl,
	OutlinedInput,
	Button,
	Typography
} from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { UserContext } from '../context/UserContext'

const ClientLoginForm = () => {
	const { setUser } = useContext(UserContext)
	const {
		register,
		handleSubmit,
		formState,
		formState: { errors, isValid }
	} = useForm()

	const [showPassword, setShowPassword] = useState(false)
	const handleClickShowPassword = () => setShowPassword((show) => !show)

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Container
				sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Box
					sx={{
						backgroundColor: 'lightgray',
						padding: '5px',
						textAlign: 'center',
						marginTop: '10px'
					}}>
					<Typography variant='overline' component='h3'>
						Please sign-in with provided credentials
					</Typography>
				</Box>
				<TextField
					{...register('username', {
						required: true
					})}
					id='username'
					name='username'
					variant='outlined'
					sx={{ width: '100%' }}
					margin='normal'
					label='Username'
					required
				/>
				<FormControl sx={{ width: '100%' }} required variant='outlined'>
					<InputLabel htmlFor='password'>Password</InputLabel>
					<OutlinedInput
						{...register('password', { required: true })}
						id='password'
						type={showPassword ? 'text' : 'password'}
						required
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label='Password'
					/>
				</FormControl>

				<Button
					variant='contained'
					type='submit'
					color='secondary'
					sx={{ marginY: '10px', width: '100%', padding: '7px' }}
					disabled={!isValid}>
					Login
				</Button>
			</Container>
		</form>
	)
}

export default ClientLoginForm
