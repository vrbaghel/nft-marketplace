import Card from "../card/card"
import parse from "html-react-parser"

/**
 * trending component : displays a list of trending posts
 * uses card component for visualization
 *
 * @export
 * @param {*} { data }
 * @return {*} 
 */
export default function Trending({ data }) {
  return data ? (
    <section className={`flex flex-col justify-center items-center pt-5 pb-16 w-full text-center`} style={{ backgroundColor: "#E5E5E5" }}>
      {/* title */}
      <h1 className={`font-family-serif text-primary text-3xl`}>{parse(data.title) || ""}</h1>
      {/* subtitle */}
      <p className={`font-family-sans font-normal w-full px-5 lg:w-1/4 py-5`}>{data.subtitle || ""}</p>
      {/* list of trending items */}
      {data.items ? (
        <div className='trending-container flex flex-wrap justify-center items-stretch px-10 mt-10 gap-10'>
          {data.items.map((item, index) => {
            return <Card data={item} settings={data.settings} key={index}></Card>
          })}
        </div>
      ) : (
        <></>
      )}
    </section>
  ) : (
    <></>
  )
}
