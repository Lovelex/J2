import Item from './Item'

const ITEMS = [
  {
    prefix: 'Total',
    text: 'Approximately 10 minutes'
  },
  {
    prefix: 'Preparation',
    text: '5 minutes'
  },
  {
    prefix: 'Cooking',
    text: '5 minutes'
  }
]

function Card() {
  return (
    <div className="card mb-8 p-7 br-3">
      <h3 className="card__title color--brandy-red mb-4">Preparation time</h3>

      <ul className="d-flex flex-column gap-4">
        {
          ITEMS.map(({ prefix, text }, index) => (
            <Item
              ul
              key={index}
              prefix={prefix}
              text={text}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default Card
