import Explore from "./explore/explore"
import Faqs from "./faqs/faqs"
import Landing from "./landing/landing"
import Trending from "./trending/trending"
import { faqsData, footerData, interactionProps, trendingItems } from "../../resources/mockdata"
import Footer from "./footer/footer"

/**
 * main component : renders different components of the app
 *
 * @export
 * @return {*}
 */
export default function Marketplace() {
  return (
    <>
      {/* landing section */}
      <Landing></Landing>
      {/* explore */}
      <Explore data={interactionProps}></Explore>
      {/* trending */}
      <Trending data={trendingItems}></Trending>
      {/* faqs */}
      <Faqs data={faqsData}></Faqs>
      {/* footer */}
      <Footer data={footerData}></Footer>
    </>
  )
}
