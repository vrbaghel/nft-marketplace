import React from "react"
import Image from "next/image"

export default class Accordion extends React.Component {
  /**
   * Creates an instance of Accordion.
   * @param {*} props
   * @memberof Accordion
   */
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
    this.click = this.onPanelClick.bind(this)
  }
  /**
   * life cycle hook
   * @memberof Accordion
   */
  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    let items = []

    this.props.data.forEach((item) => {
      items.push({
        title: item.title,
        content: item.content,
        open: false,
      })
    })

    this.setState({
      items: items,
    })
  }

  /**
   *
   * @param {*} event
   * @memberof Accordion
   */
  onPanelClick(event) {
    const updatedItems = this.state.items.slice()
    const index = updatedItems.indexOf(event)

    updatedItems[index].open = !updatedItems[index].open
    this.setState({ items: updatedItems })
  }

  /**
   * renders a list of accordion items
   *
   * @return {*}
   * @memberof Accordion
   */
  render() {
    return (
      <div className={`bg-transparent`}>
        {this.state.items.map((item, index) => (
          <div key={index}>
            <div className={`relative text-left hover:cursor-pointer`} onClick={() => this.onPanelClick(item)}>
              <div className='absolute right-0'>
                <Image className={`${item.open ? "rotate-180" : ""}`} priority src={"/assets/icons/caret.svg"} height={15} width={15} alt='caret'></Image>
              </div>
              <h1 className='text-primary font-family-sans text-lg py-2 font-semibold'>{item.title}</h1>
            </div>
            <div className={`bg-transparent text-left text-lg pr-10 mb-5 ${item.open ? "h-max" : "h-0"}`}>
              <div className={`${item.open ? "visible" : "invisible"}`}> {item.content}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
