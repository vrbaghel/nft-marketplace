import Interactions from "./interactions/interactions"
import styles from "../../../styles/Explore.module.css"

/**
 * explore component : guides user through getting started, browse NFT's
 *
 * @export
 * @param {*} {data}
 * @return {*} 
 */
export default function Explore({data}) {
  return (
    <section className={styles.container}>
      {/* interactions */}
      <div className='px-10 lg:px-20 relative'>
        <Interactions data={data}></Interactions>
      </div>
    </section>
  )
}
