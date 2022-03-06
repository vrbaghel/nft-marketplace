import Image from "next/image"
import parse from "html-react-parser"

/**
 * card component : renders card like visualization - configuration for background, logo, title and description
 *
 * @export
 * @param {*} { data, settings }
 * @return {*} 
 */
export default function Card({ data, settings }) {
  return (
    <section
      style={{ width: (settings && settings.width) || "auto", height: (settings && settings.height) || "auto", backgroundImage: data.image ? `url(${data.image})` : "none" }}
      className={"bg-white rounded-xl  bg-center bg-cover overflow-hidden " +  (settings && settings.border ? "border border-blue-600" : "")}
    >
      {/* add background to card */}
      <div className={"bg-white px-12 pt-8 pb-10" + " " + (data.image ? "h-1/2 mt-52" : "h-full")}>
        {data.icon ? (
          <div className="-mt-16">
            {/* card icon */}
            <Image priority src={data.icon} height={55} width={55} alt='card-icon' />
          </div>
        ) : (
          <></>
        )}
        {/* title */}
        {data.title ? <h1 className='text-primary font-family-serif text-xl h-16 cursor-pointer'>{parse(data.title)}</h1> : <></>}
        {/* description */}
        {data.description ? <h1 className='font-light'>{parse(data.description)}</h1> : <></>}
      </div>
    </section>
  )
}
