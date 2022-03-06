import styles from "../../../styles/Landing.module.css"
import Header from "../header/header"

/**
 * landing component : displays application dashboard, header, and promo information
 *
 * @export
 * @return {*} 
 */
export default function Landing() {
  return (
    <div className={`${styles.container}  bg-promo-banner bg-top lg:bg-center bg-contain lg:bg-cover bg-no-repeat relative`}>
      {/* background overlay */}
      <div className='absolute bg-black opacity-50 h-full w-full'></div>
      {/* header section */}
      <Header></Header>
      {/* body section of landing page */}
      <main className='static lg:absolute h-max lg:h-full w-full grid grid-cols-11 grid-rows-2 lg:grid-rows-none'>
        <div className={`${styles.leftSection} text-lime-50 col-span-11 lg:col-span-5 flex flex-col justify-center items-start px-10 lg:px-20 pt-32 lg:pt-10`}>
          {/* title text */}
          <div className='text-6xl font-family-serif'>
            <h1 className='pb-1'>Discover.</h1>
            <h1 className='pb-1'>Collect. &#38; Sell.</h1>
            <h1 className=''>Extraordinary.</h1>
            <div className='bg-ellipse-svg bg-left bg-contain bg-no-repeat ml-[-20px] pl-12 py-5'>
              <span className={styles.gradientText}>NFT&apos;s</span>
            </div>
          </div>
          {/* subtitle text */}
          <h1 className='py-5 w-1/2'>On the world&apos;s first and largest NFT marketplace.</h1>
          {/* dashboard buttons */}
          <div className='flex justify-start items-center gap-10 mt-14'>
            <button type='button' className={`w-36 text-center font-family-sans font-regular items-center px-4 py-2 rounded-sm shadow-sm text-sm text-gray-100 bg-blue-400 focus:outline-none`}>
              Explore
            </button>
            <button type='button' className={`w-36 text-center font-family-sans font-regular items-center px-4 py-2 rounded-sm shadow-sm text-sm text-gray-100 bg-transparent border border-blue-500 focus:outline-none`}>
              Create
            </button>
          </div>
          {/* dashboard link */}
          <h1 className='font-family-sans text-gray-400 hover:text-white underline decoration-gray-400 decoration-1 font-light py-5 mt-10 cursor-pointer'>Get featured on the Homepage</h1>
        </div>
        {/* promo nft details */}
        <div className='text-white bg-white lg:bg-transparent z-10 col-span-11 lg:col-span-6 flex flex-col justify-start lg:justify-center items-center lg:items-end px-10 lg:px-20 pt-10 lg:pt-32'>
          <div className={`${styles.promoNft} bg-promo-with-frame bg-center bg-cover w-96 h-60`}></div>
          <h1 className={`${styles.promoNftName} font-family-serif text-blue-500 underline decoration-blue-500 mt-10 text-2xl cursor-pointer`}>SoulCurryArt</h1>
          <h1 className={`${styles.promoNftDescription} font-family-sans text-black lg:text-gray-100 font-light text-center lg:text-right py-5`}>
            A play of light and shade, chairoscurso is the <br /> realm between the light and dark
          </h1>
          <button type='button' className={`w-36 text-center font-family-sans font-regular items-center px-4 py-2 rounded-sm shadow-sm text-sm text-black lg:text-gray-100 bg-gray-50/20 border border-gray-200 focus:outline-none`}>
            Place Bid
          </button>
        </div>
      </main>
    </div>
  )
}
