import React, { useEffect } from "react";
import { Box, TextField, Paper, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { ApiURL } from '../main'
import { toast, Toaster } from 'react-hot-toast'

const ClientCreateInputs = ({ setEvents }) => {
	const initialValues = {
		userName: '',
		userPassword: '',
		eventName: '',
		maxTickets: 1
	}

	const {
		register,
		handleSubmit,
		formState,
		formState: { errors, isSubmitSuccessful, isValid },
		reset
	} = useForm({
		mode: 'onChange',
		defaultValues: initialValues
	})

	const onSubmit = async (values) => {
		try {
			const { data: newEvent } = await ApiURL.post('/events/add', values)
			toast.success(newEvent.data.message)
			setEvents((prevState) => [...prevState, newEvent.data.savedEvent])
		} catch (err) {
			console.error(err)
		}

		if (isSubmitSuccessful) {
			console.log('is true')
			reset(initialValues)
		}
		// send data to client
		// save data in a table
	}

	useEffect(() => {
		// console.log(formState.errors);
	}, [errors])

	return (
		<Box>
			<Toaster />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Paper
					sx={{
						width: '100%',
						height: '120px',
						display: 'flex',
						gap: '10px',
						justifyContent: 'space-around',
						alignItems: 'top',
						padding: '20px'
					}}>
					<TextField
						{...register('userName', {
							required: 'userName is required',
							minLength: { value: 2, message: 'Needs 2 characters or more' }
							// maxLength: {value: 30, message: 'Too long'},
						})}
						name='userName'
						id='userName'
						variant='outlined'
						label='Username'
						error={formState.errors.userName ? true : false}
						helperText={formState.errors.userName?.message}
						sx={{ flex: '2' }}
					/>

					<TextField
						{...register('userPassword', {
							required: 'User Password is required',
							minLength: {
								value: 4,
								message: 'Password needs 4 characters or more'
							}
							// maxLength: {value: 25, message: 'Too long'},
						})}
						nama='userPassword'
						id='userPassword'
						variant='outlined'
						label='User password'
						type='password'
						error={formState.errors.userPassword ? true : false}
						helperText={formState.errors.userPassword?.message}
						sx={{ flex: '2' }}
					/>

					<TextField
						{...register('eventName', {
							required: 'Event Name is required',
							minLength: {
								value: 2,
								message: 'Event name needs 2 characters or more'
							},
							maxLength: {
								value: 30,
								message: 'Too long'
							}
						})}
						name='eventName'
						id='eventName'
						variant='outlined'
						label='Event name'
						multiline
						maxRows={2}
						error={formState.errors.eventName ? true : false}
						helperText={formState.errors.eventName?.message}
						sx={{ flex: '4' }}
					/>

					<TextField
						{...register('maxTickets', {
							required: 'Tickets number is required'
						})}
						name='maxTickets'
						id='maxTickets'
						type='number'
						InputProps={{ inputProps: { min: 1 } }}
						min={0}
						label='Tickets for event'
						variant='outlined'
						helperText={formState.errors.maxTickets?.message}
						sx={{ flex: '2' }}
					/>
					<Button
						type='submit'
						variant='contained'
						color='info'
						disableElevation
						size='medium'
						sx={{ height: 'max-content', flex: '1', marginTop: '10px' }}
						disabled={!isValid}>
						Create event
					</Button>
				</Paper>
			</form>
		</Box>
	)
}

export default ClientCreateInputs;
