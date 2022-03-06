import Accordion from "../accordion/accordion"

export default function Faqs({ data }) {
  return (
    <section className='px-16 py-8 lg:py-16 lg:px-32 grid gap-y-10 grid-cols-6 grid-rows-2 lg:grid-rows-none items-start justify-between' style={{ backgroundColor: "#E5E5E5" }}>
      <div className='col-span-6 lg:col-span-2'>
        <h1 className='text-primary font-family-serif text-4xl'>{data.header}</h1>
        <p className='mt-5 font-normal font-family-sans text-lg'>{data.description}</p>
      </div>
      <div className='col-span-6 lg:col-span-3 lg:col-start-4 lg:pl-20'>
        <Accordion data={data.items}></Accordion>
        <button type='button' className={`w-36 mt-12 text-center font-family-sans font-regular items-center px-4 py-2 rounded-sm shadow-sm text-sm text-gray-100 bg-blue-400 focus:outline-none`}>
          View all
        </button>
      </div>
    </section>
  )
}
