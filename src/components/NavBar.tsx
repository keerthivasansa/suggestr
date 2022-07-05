import './NavBar.css'

export default function NavBar() {
  return (
    <div className="nav-outer">
      <img
        src="https://uploads-ssl.webflow.com/61024a7430eba47b88a58edb/6103b98f1083a01f0828c8df_123.png"
        alt="Logo"
        className="logo"
      />

      <div className="hamburger">
        <img
          width="22px"
          src="https://uploads-ssl.webflow.com/61024a7430eba47b88a58edb/61024a7430eba42f7ea5901d_menu.svg"
        />
      </div>

      <div className="nav-list">
        <div className="nav-link-wrapper">
          <a
            href="https://ai.suggestr.co/app?utm_source=suggestr.co&utm_medium=website&utm_campaign=website_funnel&utm_content=nav_link"
            className="nav-link"
          >
            Demo Store
          </a>
          <div className="nav-bg nav-link"></div>
        </div>
        <div className="nav-link-wrapper">
          <a
            href="https://ai.suggestr.co/app?utm_source=suggestr.co&utm_medium=website&utm_campaign=website_funnel&utm_content=nav_link"
            className="nav-link"
          >
            Shopify
          </a>
          <div className="nav-bg nav-link"></div>
        </div>

        <div className="nav-link-wrapper">
          <a
            href="https://ai.suggestr.co/app?utm_source=suggestr.co&utm_medium=website&utm_campaign=website_funnel&utm_content=nav_link"
            className="nav-link"
          >
            Pricing
          </a>
          <div className="nav-bg nav-link"></div>
        </div>
        <div className="nav-link-wrapper">
          <a
            href="https://ai.suggestr.co/app?utm_source=suggestr.co&utm_medium=website&utm_campaign=website_funnel&utm_content=nav_link"
            className="nav-link"
          >
            Contact Us
          </a>
          <div className="nav-bg nav-link"></div>
        </div>
        <div className="nav-link-wrapper">
          <a
            href="https://ai.suggestr.co/app?utm_source=suggestr.co&utm_medium=website&utm_campaign=website_funnel&utm_content=nav_link"
            className="nav-link"
          >
            Book a Demo
          </a>
          <div className="nav-bg nav-link "></div>
        </div>
      </div>
    </div>
  )
}
