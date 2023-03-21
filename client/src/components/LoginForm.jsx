import { useState } from 'react'
import {
	TextField,
	Button,
	Container,
	FormControl,
	InputLabel,
	InputAdornment,
	IconButton,
	OutlinedInput
} from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { useForm } from 'react-hook-form'
import { ApiURL } from '../main'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm()
	const [showPassword, setShowPassword] = useState(false)
	const handleClickShowPassword = () => setShowPassword((show) => !show)

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

	watch('email')
	const onSubmit = async (body) => {
		try {
			const { data: userData } = await ApiURL.post('/auth/login', body)
			localStorage.setItem('token', userData.data.token)
			localStorage.setItem('user', JSON.stringify(userData.data.user))
			navigate('/admin/home')
		} catch (err) {
			return toast.error(err.response.data.message)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Container
				sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<TextField
					{...register('email', {
						required: true,
						pattern: {
							value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
							message: 'Please enter a valid mail'
						}
					})}
					type='email'
					id='email'
					label='email'
					variant='outlined'
					sx={{ width: '100%' }}
					margin='normal'
					required
				/>
				<FormControl sx={{ width: '100%' }} required variant='outlined'>
					<InputLabel htmlFor='password'>Password</InputLabel>
					<OutlinedInput
						{...register('password', { required: true })}
						id='password'
						type={showPassword ? 'text' : 'password'}
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
					variant='outlined'
					type='submit'
					sx={{
						marginTop: '10px',
						display: 'block',
						width: '100%',
						padding: '7px'
					}}>
					Login
				</Button>
			</Container>
		</form>
	)
}

export default LoginForm
