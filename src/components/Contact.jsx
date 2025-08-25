import React from 'react'
import resume from '../data/resume.json'
import config from '../data/config.json'

export default function Contact() {
  const email = config.social?.email || resume.basics.email
  const github = config.social?.github
  const linkedin = config.social?.linkedin
    return (
      <section id="contact" className="section reveal">
        <h2>Contact</h2>
        <p>
        {email && (
          <>
            <a href={`mailto:${email}`}>{email}</a>
            <br />
          </>
        )}
        {resume.basics.phone && <a href={`tel:${resume.basics.phone}`}>{resume.basics.phone}</a>}
      </p>
      <p>
        {github && (
          <>
            <a href={github}>{github.replace('https://', '')}</a>
            <br />
          </>
        )}
        {linkedin && <a href={linkedin}>{linkedin.replace('https://', '')}</a>}
      </p>
    </section>
  )
}
