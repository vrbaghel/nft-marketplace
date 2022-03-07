import styles from "../../../styles/Footer.module.css"
import Image from "next/image"

/**
 * footer component : adds navigation links and additional info about brand
 *
 * @export
 * @param {*} { data }
 * @return {*}
 */
export default function Footer({ data }) {
  return <>
    {data ? (
      <section className={`${styles.container} grid grid-cols-6`}>
      {data.brand ? (
        <div className={`${styles.leftSection} col-span-6 lg:col-span-3 flex flex-col px-10 lg:px-20 py-5 lg:py-20 justify-between`}>
          {/* brand details */}
          <div>
            <div className='flex gap-2 items-center cursor-pointer'>
              <Image priority src={data.brand.logo} height={50} width={50} alt='app-icon' />
              <h1 className='font-family-serif text-white text-2xl'>{data.brand.name || ""}</h1>
            </div>
            <p className='text-white mt-10 pr-20'>{data.brand.description || ""}</p>
          </div>
          {/* social media */}
          <div className='flex mt-5 lg:mt-0 gap-5'>
            <div className='rounded-md cursor-pointer bg-blue-500 py-2 px-3'>
              <Image priority src='/assets/icons/facebook.svg' height={12} width={15} alt='facebook-icon' />
            </div>
            <div className='rounded-md cursor-pointer bg-red-500 py-2 px-3'>
              <Image priority src='/assets/icons/youtube.svg' height={12} width={15} alt='youtube-icon' />
            </div>
            <div className='rounded-md cursor-pointer bg-violet-500 py-2 px-3'>
              <Image priority src='/assets/icons/discord.svg' height={12} width={13} alt='discord-icon' />
            </div>
            <div className='rounded-md cursor-pointer bg-blue-400 py-2 px-3'>
              <Image priority src='/assets/icons/twitter.svg' height={12} width={16} alt='twitter-icon' />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* footer navigation */}
      {data.navigation ? (
        <div className={`${styles.rightSection} col-span-6 lg:col-span-3 flex flex-wrap justify-between gap-x-4 lg:gap-x-16 gap-y-6 px-16 lg:px-20 py-10 lg:py-20`}>
          {data.navigation.map((item, index) => {
            return (
              <div key={`${item.name}_${index}`}>
                <h1 className='text-primary font-family-serif text-2xl py-5 cursor-pointer'>{item.name}</h1>
                {item.links ? (
                  <div className='flex flex-col gap-50'>
                    {item.links.map((link, idx) => {
                      return (
                        <h1 key={`${link.label}_${idx}`} className='text-primary text-lg cursor-pointer py-1'>
                          {link.label}
                        </h1>
                      )
                    })}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            )
          })}
          {/* licenses and copyright info */}
          <div className='ml-auto w-full flex justify-center lg:justify-end items-center gap-5'>
            <p className='text-primary cursor-pointer'>Privacy Policy</p>
            <p className='text-primary cursor-pointer'>Terms and Conditions</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
    ) : (<></>)}
    </>
}
