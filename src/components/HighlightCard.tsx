import InnerCard from "./InnerCard";

export default function HighlightCard() {
  return (
    <div>
      <div
        style={{ width: '60%' }}
        className="flex px-2 py-4 flex-col items-start justify-center gap-5"
      >
        <h4 className="text-gray-500 text-xl">Why should I care</h4>
        <h1 className="font-bold text-3xl">
          Businesses make an average of 11% more within 20 days of setup.
        </h1>
        <button className="rounded-full px-4 py-2 bg-blue-600 text-white">
          Book a Demo
        </button>
      </div>
      <div className="flex flex-col">
        <InnerCard
          highlight="33x"
          title="What's the ROI?"
          content="Clear revenue attribution. 30-day free trial."
        />
        <InnerCard
          highlight="13ms"
          title="Will this slow down my store?"
          content="Time is money and Suggestr is built for extreme performance. Loads faster than a Google search."
        />
      </div>
    </div>
  )
}
