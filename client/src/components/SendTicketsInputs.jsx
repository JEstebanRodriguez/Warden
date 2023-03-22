import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {
	Paper,
	TextField,
	Button,
	Box,
	Divider,
	Typography
} from '@mui/material'
import { UserContext } from '../context/UserContext'
import { ApiURL } from '../main'
import { toast, Toaster } from 'react-hot-toast'

const SendTicketsInputs = ({ set, logs }) => {
	const { user } = useContext(UserContext)
	const initialValues = {
		receiverEmail: '',
		quantity: 1
	}

	const {
		register,
		handleSubmit,
		formState,
		formState: { errors, isSubmitSuccessfull, isValid },
		reset
	} = useForm({
		mode: 'onChange',
		defaultValues: initialValues
	})

	const onSubmit = async (values) => {
		const body = {
			email: values.receiverEmail,
			qty: +values.quantity,
			event_id: user._id
		}
		try {
			const { data: ticket } = await ApiURL.post('/tickets/add', body)
			toast.success(ticket.data)
			console.log(ticket)
		} catch (err) {
			console.error(err)
		}

		let aux = [...logs]
		// set new Logs state with de new values
		aux.push(values)
		set(aux)

		// Reset Inputs
		if (isSubmitSuccessfull) {
			reset(initialValues)
		}
	}

	return (
		<>
			<Toaster position='top-center' />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Paper
					sx={{
						width: '100%',
						height: '145px',
						padding: '20px'
					}}>
					<Divider sx={{ marginBottom: '10px' }}>
						<Typography variant='button' display='block'>
							Complete the form and send your tickets
						</Typography>
					</Divider>
					<Box
						sx={{
							display: 'flex',
							gap: '10px',
							justifyContent: 'space-around',
							alignItems: 'top'
						}}>
						<TextField
							{...register('receiverEmail', {
								required: 'An email is required',
								pattern: {
									value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
									message: 'Please enter a valid mail'
								}
							})}
							type='email'
							id='receiverEmail'
							name='receiverEmail'
							label='Email to send the tickets'
							variant='outlined'
							sx={{ flex: 5 }}
							error={errors.receiverEmail ? true : false}
							helperText={errors.receiverEmail?.message}
						/>
						<TextField
							{...register('quantity', {
								required: 'Quantity is required',
								min: {
									value: 1,
									message:
										'Minimun of tickets is 1. Zero or negative numbers are not accepted'
								}
							})}
							name='quantity'
							id='quantity'
							type='number'
							InputProps={{ inputProps: { min: 1 } }}
							min={1}
							label='Quantity of tickets to send'
							error={errors.quantity ? true : false}
							helperText={errors.quantity?.message}
							variant='outlined'
							sx={{ flex: 3 }}
						/>
						<Button
							type='submit'
							variant='contained'
							color='info'
							disableElevation
							size='medium'
							sx={{ height: 'max-content', flex: '1', marginTop: '10px' }}
							disabled={!isValid}>
							Send Ticket/s
						</Button>
					</Box>
				</Paper>
			</form>
		</>
	)
}

export default SendTicketsInputs
