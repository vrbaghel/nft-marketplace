import Card from "../../card/card"
import parse from "html-react-parser"
import styles from "../../../../styles/Interactions.module.css"

/**
 * interactions component : show nft interactions like set up wallet, create collection etc
 * uses card component for visualization
 *
 * @export
 * @param {*} { data }
 * @return {*} 
 */
export default function Interactions({ data }) {
  return data ? (
    <section className={`${styles.container} z-20 relative flex flex-col justify-center items-center pt-28 pb-16 w-full text-center rounded-lg border-2 border-gray-200`}>
      {/* title */}
      <h1 className={`font-family-serif text-primary text-3xl`}>{parse(data.title) || ""}</h1>
      {/* subtitle */}
      <p className={`font-family-sans font-normal w-full px-5 lg:w-1/4 py-5`}>{data.subtitle || ""}</p>
      {/* list of interactions */}
      {data.items ? (
        <div className='interactions-container flex flex-wrap justify-center items-stretch px-10 mt-10 gap-10'>
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
