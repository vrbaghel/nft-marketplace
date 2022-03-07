import Image from "next/image"

/**
 * header component : includes header info like brand name, logo, search bar etc
 *
 * @export
 * @return {*}
 */
export default function Header() {
  return (
    <section className='absolute bg-transparent w-full top-0 left-0 z-20 px-5 lg:px-20 py-5 flex justify-between items-center'>
      {/* brand details: name, logo */}
      <div className='header-brand flex gap-2 items-center cursor-pointer'>
        <Image priority src='/assets/icons/app-logo.svg' height={30} width={30} alt='app-icon' />
        <h1 className='font-family-serif text-white text-2xl'>OpenSea</h1>
      </div>
      {/* header interactions: search, wallet, sidebar */}
      <div className='flex gap-4 justify-end lg:gap-8 items-center'>
        {/* searchbar */}
        <div className='w-1/2 relative shadow-sm'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Image priority src='/assets/icons/search.png' height={17} width={18} alt='search' />
          </div>
          <input type='text' name='price' id='price' className='bg-white/10 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-10 sm:text-sm border-gray-300 text-white rounded-sm' placeholder='Search' />
        </div>
        {/* nft wallet */}
        <Image className='cursor-pointer' priority src='/assets/icons/wallet.png' height={17} width={18} alt='app-icon' />
        {/* hamburger menu */}
        <Image className='cursor-pointer' priority src='/assets/icons/hamburger.png' height={14} width={20} alt='app-icon' />
      </div>
    </section>
  )
}
