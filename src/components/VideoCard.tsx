import './VideoCard.css'

export default function VideoCard({
  videoSrc,
  title,
  content,
  callToAction,
  actionUrl,
}: Record<string, string>) {
  return (
    // <div className="video-container py-4 gap-10">
    //     <video autoPlay={true} muted className='lg:rounded-3xl' loop>
    //         <source src={videoSrc} />
    //     </video>
    //     <div className="content-outer lg:rounded-3xl bg-opacity-90 flex justify-center bg-black">
    //         <div className="video-inner caption mx-10 w-8/12 text-center font-bold flex flex-col gap-10 justify-center items-center text-white">
    //             <h1 className="text-7xl title">{title}</h1>
    //             <p className='content text-2xl font-normal'>{content}</p>
    //             <a href={actionUrl}>
    //                 <button className='action-btn rounded-full px-8 py-4 bg-white text-black text-xl font-normal'>{callToAction}</button>
    //             </a>
    //         </div>
    //     </div>
    // </div>

    <div className="video-wrapper">
      <video playsInline autoPlay muted loop src={videoSrc}></video>
      <div className="header">
        <h1 className="text-7xl title">{title}</h1>
        <p className="content text-2xl font-normal">{content}</p>
        <a href={actionUrl}>
          <button className="action-btn rounded-full px-8 py-4 bg-white text-black text-xl font-normal">
            {callToAction}
          </button>
        </a>
      </div>
    </div>
  )
}
