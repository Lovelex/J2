import Item from './Item'

const ITEMS = [
  {
    text: "2-3 large eggs"
  },
  {
    text: "Salt, to taste"
  },
  {
    text: "Pepper, to taste"
  },
  {
    text: "1 tablespoon of butter or oil"
  },
  {
    text: "Optional fillings: cheese, diced vegetables, cooked meats, herbs"
  }
]

function Ingredients() {
  return (
    <>
      <h2 className="subtitle color--brandy-red mb-6">Ingredients</h2>

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
    </>
  )
}

export default Ingredients
