import Item from './Item'

const ITEMS = [
  {
    prefix: "Beat the eggs",
    text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
  },
  {
    prefix: "Heat the pan",
    text: "Place a non-stick frying pan over medium heat and add butter or oil."
  },
  {
    prefix: "Cook the omelette",
    text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
  },
  {
    prefix: "Add fillings (optional)",
    text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
  },
  {
    prefix: "Fold and serve",
    text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
  },
  {
    prefix: "Enjoy",
    text: "Serve hot, with additional salt and pepper if needed."
  }
]

function Instructions() {
  return (
    <>
      <h2 className="subtitle color--brandy-red mb-6">Instructions</h2>

      <ul className="d-flex flex-column gap-4">
        {
          ITEMS.map(({ prefix, text }, index) => (
            <Item
              ol
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

export default Instructions
