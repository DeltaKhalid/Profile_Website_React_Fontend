const menuItems = [
  { href: '#about-card', icon: 'ion-person', label: 'About', isActive: true },
  { href: '#resume-card', icon: 'ion-android-list', label: 'Resume' },
  { href: '#works-card', icon: 'ion-paintbrush', label: 'Works' },
  // { href: '#blog-card', icon: 'ion-chatbox-working', label: 'Blog' },
  { href: '#contacts-card', icon: 'ion-at', label: 'Contact' },
]

function MenuBar() {
  return (
    <div className='top-menu'>
      <ul>
        {menuItems.map((item) => (
          <li key={item.href} className={item.isActive ? 'active' : undefined}>
            <a href={item.href}>~
              <span className={`icon ${item.icon}`}></span>
              <span className='link'>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuBar