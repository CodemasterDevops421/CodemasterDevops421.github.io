import React from 'react'
import resume from '../data/resume.json'

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {resume.basics.name}. All rights reserved.
    </footer>
  )
}
