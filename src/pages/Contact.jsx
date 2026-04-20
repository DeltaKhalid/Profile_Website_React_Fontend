import { useState } from 'react'

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [submitState, setSubmitState] = useState('idle')
	const [errorMessage, setErrorMessage] = useState('')

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData((current) => ({
			...current,
			[name]: value,
		}))
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		setSubmitState('submitting')
		setErrorMessage('')

		try {
			const payload = new FormData()
			payload.append('name', formData.name)
			payload.append('email', formData.email)
			payload.append('message', formData.message)

			const response = await fetch('/mailer/feedback.php', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
				},
				body: payload,
			})

			const result = await response.json()

			if (!response.ok || result.status !== 1) {
				throw new Error('Unable to send your message right now.')
			}

			setFormData({ name: '', email: '', message: '' })
			setSubmitState('success')
		} catch (error) {
			setSubmitState('error')
			setErrorMessage(error.message)
		}
	}

	return (
		<div className='card-inner contacts' id='contacts-card'>
			<div className='card-wrap'>
				<div className='content contacts'>
					<div className='title'>Get in Touch</div>

					<div className='row'>
						<div className='col col-d-12 col-t-12 col-m-12 border-line-v'>
							<div className='map'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4753790836608!2d90.39987777606075!3d23.872756084066612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c511487209bd%3A0x1b9b398b80e1e382!2sHouse%2019!5e0!3m2!1sbn!2sbd!4v1776671115424!5m2!1sbn!2sbd'
									width='100%'
									height='100%'
									style={{ border: 0 }}
									allowFullScreen
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
									title='Khalid Ahmad location map'
								></iframe>
							</div>
							<div className='info-list'>
								<ul>
									<li>
										<strong>Address :</strong> House # 19, Road # 1, Sector # 6, Uttara, Dhaka - 1230.
									</li>
									<li>
										<strong>Email :</strong> khalid.ahmad063@gmail.com
									</li>
									<li>
										<strong>Phone :</strong> 01955209050
									</li>
									<li>
										<strong>Freelance :</strong> Available
									</li>
								</ul>
							</div>
						</div>
						<div className='clear'></div>
					</div>
				</div>

				<div className='content contacts'>
					<div className='title'>Contact Form</div>

					<div className='row'>
						<div className='col col-d-12 col-t-12 col-m-12 border-line-v'>
							<div className='contact_form'>
								<form onSubmit={handleSubmit}>
									<div className='row'>
										<div className='col col-d-6 col-t-6 col-m-12'>
											<div className='group-val'>
												<input
													type='text'
													name='name'
													placeholder='Full Name'
													value={formData.name}
													onChange={handleChange}
													required
												/>
											</div>
										</div>
										<div className='col col-d-6 col-t-6 col-m-12'>
											<div className='group-val'>
												<input
													type='email'
													name='email'
													placeholder='Email Address'
													value={formData.email}
													onChange={handleChange}
													required
												/>
											</div>
										</div>
										<div className='col col-d-12 col-t-12 col-m-12'>
											<div className='group-val'>
												<textarea
													name='message'
													placeholder='Your Message'
													value={formData.message}
													onChange={handleChange}
													required
												></textarea>
											</div>
										</div>
									</div>
									<div className='align-left'>
										<button type='submit' className='button' disabled={submitState === 'submitting'}>
											<span className='text'>Send Message</span>
											<span className='arrow'></span>
										</button>
									</div>
								</form>
								<div
									className='alert-success'
									style={{ display: submitState === 'success' ? 'block' : 'none' }}
								>
									<p>Thanks, your message is sent successfully.</p>
								</div>
								{submitState === 'error' ? <p>{errorMessage}</p> : null}
							</div>
						</div>
						<div className='clear'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
