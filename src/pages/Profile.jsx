function Profile() {
	return (
		<div className='card-inner' id='resume-card'>
			<div className='card-wrap'>
				<div className='content resume'>
					<div className='title'>Resume</div>

					<div className='row'>
						<div className='col col-d-6 col-t-6 col-m-12 border-line-v'>
							<div className='resume-title border-line-h'>
								<div className='icon'>
									<i className='fa fa-briefcase'></i>
								</div>
								<div className='name'>Experience</div>
							</div>
							<div className='resume-items'>
								<div className='resume-item border-line-h active'>
									<div className='date'>Oct 2023 - Present</div>
									<div className='name'>Mobile App Developer</div>
									<div className='company'>TK Group (Delta Agrofood Industries Ltd)</div>
									<p>Developing mobile applications using Dart and Flutter framework.</p>
								</div>
								<div className='resume-item border-line-h'>
									<div className='date'>Feb 2023 - Sep 2023</div>
									<div className='name'>Mobile App Developer</div>
									<div className='company'>Soft Expert Zone</div>
									<p>Built mobile applications using Dart and Flutter framework.</p>
								</div>
								<div className='resume-item border-line-h'>
									<div className='date'>May 2021 - Jan 2023</div>
									<div className='name'>Android App Developer</div>
									<div className='company'>Sky X Digital</div>
									<p>Developed Android applications using Java.</p>
								</div>
								<div className='resume-item border-line-h'>
									<div className='date'>Jul 2019 - Apr 2021</div>
									<div className='name'>Android App Developer</div>
									<div className='company'>Coder Hand</div>
									<p>Developed Android applications using Java.</p>
								</div>
								<div className='resume-item'>
									<div className='date'>6 Months</div>
									<div className='name'>Android Developer Intern</div>
									<div className='company'>Talha Soft</div>
									<p>Internship in Android development using Java.</p>
								</div>
							</div>
						</div>

						<div className='col col-d-6 col-t-6 col-m-12 border-line-v'>
							<div className='resume-title border-line-h'>
								<div className='icon'>
									<i className='fa fa-university'></i>
								</div>
								<div className='name'>Education</div>
							</div>
							<div className='resume-items'>
								<div className='resume-item border-line-h'>
									<div className='date'>2018</div>
									<div className='name'>Bachelor of Science (EEE)</div>
									<div className='company'>IUBAT − International University of Business Agriculture and Technology</div>
									<p>Electrical and Electronics Engineering. CGPA: 3.47 out of 4.00</p>
								</div>
								<div className='resume-item border-line-h'>
									<div className='date'>2013</div>
									<div className='name'>Diploma In Engineering</div>
									<div className='company'>Dhaka Polytechnic Institute (BTEB)</div>
									<p>Department of Electronics. CGPA: 3.33 out of 4.00</p>
								</div>
								<div className='resume-item'>
									<div className='date'>2009</div>
									<div className='name'>Secondary School Certificate (SSC)</div>
									<div className='company'>Tongi Islamia Senior Madrasah</div>
									<p>Science Group. GPA: 5.00 — Bangladesh Madrasah Education Board, Dhaka</p>
								</div>
							</div>
						</div>

						<div className='clear'></div>
					</div>
				</div>

				<div className='content skills'>
					<div className='title'>My Skills</div>

					<div className='row'>
						<div className='col col-d-6 col-t-6 col-m-12 border-line-v'>
							<div className='skills-list'>
								<div className='skill-title border-line-h'>
									<div className='icon'>
										<i className='fa fa-mobile'></i>
									</div>
									<div className='name'>Mobile Development</div>
								</div>
								<ul>
									<li className='border-line-h'>
										<div className='name'>Flutter / Dart</div>
										<div className='progress'>
											<div className='percentage' style={{ width: '85%' }}></div>
										</div>
									</li>
									<li className='border-line-h'>
										<div className='name'>Android / Java</div>
										<div className='progress'>
											<div className='percentage' style={{ width: '80%' }}></div>
										</div>
									</li>
									<li className='border-line-h'>
										<div className='name'>Git (Gitlab / GitHub)</div>
										<div className='progress'>
											<div className='percentage' style={{ width: '75%' }}></div>
										</div>
									</li>
									<li>
										<div className='name'>SQLite</div>
										<div className='progress'>
											<div className='percentage' style={{ width: '70%' }}></div>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<div className='col col-d-6 col-t-6 col-m-12 border-line-v'>
							<div className='skills-list dotted'>
								<div className='skill-title border-line-h'>
									<div className='icon'>
										<i className='fa fa-flag'></i>
									</div>
									<div className='name'>Languages</div>
								</div>
								<ul>
									<li className='border-line-h'>
										<div className='name'>Bangla</div>
										<div className='progress'>
											<div className='percentage' style={{ width: '100%' }}></div>
										</div>
									</li>
									<li className='border-line-h'>
										<div className='name'>English</div>
										<div className='progress'>
											<div className='percentage' style={{ width: '70%' }}></div>
										</div>
									</li>
									<li className='border-line-h'>
										<div className='name'>Arabic (Reading)</div>
										<div className='progress'>
											<div className='percentage' style={{ width: '50%' }}></div>
										</div>
									</li>
									<li>
										<div className='name'>Hindi (Understanding)</div>
										<div className='progress'>
											<div className='percentage' style={{ width: '40%' }}></div>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<div className='col col-d-6 col-t-6 col-m-12 border-line-v'>
							<div className='skills-list circles'>
								<div className='skill-title border-line-h'>
									<div className='icon'>
										<i className='fa fa-code'></i>
									</div>
									<div className='name'>Coding</div>
								</div>
								<ul>
									<li>
										<div className='name'>Dart / Flutter</div>
										<div className='progress p85'>
											<span>85%</span>
										</div>
									</li>
									<li>
										<div className='name'>Java (Android)</div>
										<div className='progress p80'>
											<span>80%</span>
										</div>
									</li>
									<li>
										<div className='name'>C</div>
										<div className='progress p60'>
											<span>60%</span>
										</div>
									</li>
									<li>
										<div className='name'>HTML / CSS</div>
										<div className='progress p70'>
											<span>70%</span>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<div className='col col-d-6 col-t-6 col-m-12 border-line-v'>
							<div className='skills-list list'>
								<div className='skill-title border-line-h'>
									<div className='icon'>
										<i className='fa fa-list'></i>
									</div>
									<div className='name'>Knowledge</div>
								</div>
								<ul>
									<li><div className='name'>Android SDK &amp; Android Studio</div></li>
									<li><div className='name'>Flutter &amp; Dart</div></li>
									<li><div className='name'>Git, Gitlab, GitHub</div></li>
									<li><div className='name'>SQLite Database</div></li>
									<li><div className='name'>REST API &amp; Retrofit</div></li>
									<li><div className='name'>Windows OS</div></li>
									<li><div className='name'>Eclipse IDE</div></li>
									<li><div className='name'>Mobile App Architecture</div></li>
								</ul>
							</div>
						</div>

						<div className='clear'></div>
					</div>
				</div>

				<div className='content testimonials'>
					<div className='title'>Testimonials</div>

					<div className='row testimonials-items'>
						<div className='col col-d-12 col-t-12 col-m-12 border-line-v'>
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<div className='revs-item'>
									<div className='text'>
										Delivering dependable mobile apps and modern websites with clean code, smooth user
										experience, and practical business value.
									</div>
									<div className='user'>
										<div className='img'>
											<img src='/src/assets/images/khalid_profile_image_01.jpg' alt='Khalid Ahmad' />
										</div>
										<div className='info'>
											<div className='name'>Khalid Ahmad</div>
											<div className='company'>Mobile App Developer</div>
										</div>
										<div className='clear'></div>
									</div>
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

export default Profile
