import './App.css'
import HighlightCard from './components/HighlightCard'
import InnerCard from './components/InnerCard'
import NavBar from './components/NavBar'
import VideoCard from './components/VideoCard'

function App() {
  return (
    <div className="App lg:mx-10 align-center">
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </header>
      <NavBar />
      <div className="my-5"></div>
      <VideoCard
        videoSrc="https://uploads-ssl.webflow.com/61024a7430eba47b88a58edb/61026868d660e73f263f5661_a_guy_on_ecommerce_site_choosing_clothes_2021_04_06_23_50_49_utc-transcode.mp4"
        title="Make more money with better product recommendations"
        content="Increase revenue by 11%+ with no additional work. See what Suggestr can do for your store."
        callToAction="Book a Demo"
        actionUrl="https://www.suggestr.co/book-demo"
      />
      <main className="mx-4">
        <section
          className="px-4 py-3 text-left rounded-2xl flex gap-2 justify-around"
          style={{
            background:
              'radial-gradient(circle farthest-side at 0 100%,#fff1eb,#ace0f9)',
          }}
        >
          <HighlightCard />
        </section>
      </main>
    </div>
  )
}

export default App
