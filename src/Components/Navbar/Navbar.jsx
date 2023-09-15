import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg nav-color px-5 py-4">
  <div class="container-fluid">
    <Link class="navbar-brand text-white fs-2 fw-bold" to="">START FRAMEWORK</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
        <li class="nav-item">
          <Link class="nav-link" to="about">ABOUT</Link>
        </li>
        <li class="nav-item ms-2">
          <Link class="nav-link" to="portfolio">PORTFOLIO</Link>
        </li>
        <li class="nav-item ms-2">
          <Link class="nav-link" to="contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
