import React from 'react'
import { Icons } from '../assets'
import { Persona, Spacer } from '../components'
import { useMedia } from '../styles'

export const ContactSection: React.FC = () => {
  const { cond } = useMedia()

  return (
    <section>
      <Spacer>
        {cond({ max: 'medium' }) && (
          <Persona links={contactLinks} details={contactDetails} direction="vertical" />
        )}
        {cond({ min: 'large' }) && (
          <Persona links={contactLinks} details={contactDetails} direction="horizontal" />
        )}
      </Spacer>
    </section>
  )
}

const contactDetails = {
  name: 'Jakub Wadas',
  headline: 'Front-end Developer & Designer',
}

const contactLinks = [
  { Icon: Icons.Round.Github, title: `Github`, url: `https://github.com/vadistic` },
  { Icon: Icons.Round.Linkedin, title: `LinkedIn`, url: `https://www.linkedin.com/in/jakubwadas` },
  { Icon: Icons.Round.Behance, title: `Behance`, url: `https://www.behance.net/vadistic` },
  { Icon: Icons.Round.Skype, title: `Skype`, url: `skype:vadistic` },
  { Icon: Icons.Round.Mail, title: `Main`, url: `mailto:vadistic@gmail.com` },
]
