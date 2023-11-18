import { Outlet, NavLink } from "react-router-dom"

export default function HelpLayout() {
  return (
    <div>
      <div className="help-layout">
        <h2>Website Help</h2>
        <p>lorem10</p>

        <nav>
            <NavLink to="faq">view the FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>

        <Outlet/>
      </div>
    </div>
  )
}
