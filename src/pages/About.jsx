import khalidProfileImage01 from '../assets/images/khalid_profile_image_01.jpg'

function About() {
	return (
		<div className='card-inner animated active' id='about-card'>
			<div className='card-wrap'>
				<div className='content about'>
					<div className='title'>About Me</div>

					<div className='row'>
						<div className='col col-d-6 col-t-6 col-m-12 border-line-v'>
							<div className='text-box' style={{ textAlign: 'justify' }}>
								<p>
									Hello! I&apos;m Khalid Ahmad. Android App Developre. Also developed some website with
									wordpress and CodeIgniter framework of PHP. I like to work in an environment where
									there is an opportunity of self-improvement in individual and group based work that
									will ultimately lead to the further development of the organization and me.
								</p>
							</div>
						</div>
						<div className='col col-d-6 col-t-6 col-m-12 border-line-v'>
							<div className='info-list'>
								<ul>
									<li>
										<strong>Age :</strong> 33
									</li>
									<li>
										<strong>Residence :</strong> Bangladesh
									</li>
									<li>
										<strong>Freelance :</strong> Available
									</li>
									<li>
										<strong>Address :</strong> Dhaka, Bangladesh.
									</li>
								</ul>
							</div>
						</div>
						<div className='clear'></div>
					</div>
				</div>

				<div className='content services'>
					<div className='title'>My Services</div>

					<div className='row service-items border-line-v'>
						<div className='col col-d-6 col-t-6 col-m-12 border-line-h'>
							<div className='service-item' style={{ minHeight: '250px' }}>
								<div className='icon'>
									<span className='fa fa-mobile'></span>
								</div>
								<div className='name'>
									<span>Mobile App Development</span>
								</div>
								<div className='desc'>
									<div>
										<p>Android applications crafted for performance, usability, clean architecture, seamless interaction, and reliability.</p>
									</div>
								</div>
							</div>
						</div>
						<div className='col col-d-6 col-t-6 col-m-12 border-line-h'>
							<div className='service-item' style={{ minHeight: '250px' }}>
								<div className='icon'>
									<span className='fa fa-code'></span>
								</div>
								<div className='name'>
									<span>Web Development</span>
								</div>
								<div className='desc'>
									<div>
										<p>Responsive websites designed for performance, usability, clean code, smooth navigation, and scalability.</p>
									</div>
								</div>
							</div>
						</div>

					</div>
					<div className='clear'></div>
				</div>

				<div className='content clients'>
					<div className='title'>Clients</div>

					<div className='row client-items'>
						<div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
							<div className='client-item'>
								<div className='image'>
									<a target='_blank' rel='noreferrer' href='https://www.google.com'>
										<img src='/assets/images/clients/client_1.png' alt='Client 1' />
									</a>
								</div>
							</div>
						</div>
						<div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
							<div className='client-item'>
								<div className='image'>
									<a target='_blank' rel='noreferrer' href='https://www.google.com'>
										<img src='/assets/images/clients/client_2.png' alt='Client 2' />
									</a>
								</div>
							</div>
						</div>
						<div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
							<div className='client-item'>
								<div className='image'>
									<a target='_blank' rel='noreferrer' href='https://www.google.com'>
										<img src='/assets/images/clients/client_3.png' alt='Client 3' />
									</a>
								</div>
							</div>
						</div>
						<div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
							<div className='client-item'>
								<div className='image'>
									<a target='_blank' rel='noreferrer' href='https://www.google.com'>
										<img src='/assets/images/clients/client_4.png' alt='Client 4' />
									</a>
								</div>
							</div>
						</div>
						<div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
							<div className='client-item'>
								<div className='image'>
									<a target='_blank' rel='noreferrer' href='https://www.google.com'>
										<img src='/assets/images/clients/client_5.png' alt='' />
									</a>
								</div>
							</div>
						</div>
						<div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
							<div className='client-item'>
								<div className='image'>
									<a target='_blank' rel='noreferrer' href='https://www.google.com'>
										<img src='/assets/images/clients/client_6.png' alt='' />
									</a>
								</div>
							</div>
						</div>
						<div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
							<div className='client-item'>
								<div className='image'>
									<a target='_blank' rel='noreferrer' href='https://www.google.com'>
										<img src='/assets/images/clients/client_7.png' alt='' />
									</a>
								</div>
							</div>
						</div>
						<div className='col col-d-3 col-t-3 col-m-6 border-line-v'>
							<div className='client-item'>
								<div className='image'>
									<a target='_blank' rel='noreferrer' href='https://www.google.com'>
										<img src='/assets/images/clients/client_8.png' alt='' />
									</a>
								</div>
							</div>
						</div>
						<div className='clear'></div>
					</div>
				</div>

				<div className='content quote'>
					<div className='title'>Quote</div>

					<div className='row'>
						<div className='col col-d-12 col-t-12 col-m-12 border-line-v'>
							<div className='revs-item'>
								<div className='text'>
									<div>
										I build mobile apps and websites that are clean, reliable, and focused on real
										business results for every client.
									</div>
								</div>
								<div className='user'>
									<div className='img'>
										<img src={khalidProfileImage01} alt='Khalid Ahmad' />
									</div>
									<div className='info'>
										<div className='name'>Khalid Ahmad</div>
										<div className='company'>Mobile App Developer</div>
									</div>
									<div className='clear'></div>
								</div>
							</div>
						</div>
						<div className='clear'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
