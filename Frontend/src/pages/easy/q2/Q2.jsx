import Button from '@/components/easy/q2/Button'
import img from '@/assets/easy/q2/images/avatar-jessica.jpeg'

import './q2.scss'
import './_colors.scss'
import './_typography.scss'

const BUTTONS = [
  {
    text: 'Github',
    link: 'https://github.com/jessicarandall'
  },
  {
    text: 'Frontend Mentor',
    link: 'https://www.frontendmentor.io/profile/jessicarandall'
  },
  {
    text: 'Linkedin',
    link: 'https://www.linkedin.com/in/jessicarandall/'
  },
  {
    text: 'Twitter',
    link: 'https://twitter.com/jessicarandall'
  },
  {
    text: 'Instagram',
    link: 'https://www.instagram.com/jessicarandall/'
  }
]

function Q2() {
  return (
    <div id='easy-q2'>
      <div className='bg--dark h-100 d-flex justify-content-center align-items-center p-4'>
        <div className='container bg--dark-light p-8 br-2 text-center'>
          <img className='mb-7' src={img} />
          <div className='text--white fw-bold title mb-4'>Jessica Randall</div>
          <div className='text--lime fw-bold mb-7'>London, United Kingdom</div>
          <div className='text--white mb-6'>{`"Front-end developer and avid reader"`}</div>

          <div className='d-flex flex-column gap-4'>
            {
              BUTTONS.map(({ text, link }, index) => (
                <Button
                  text={text}
                  link={link}
                  key={index}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Q2
