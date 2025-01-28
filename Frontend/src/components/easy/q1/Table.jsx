import TableRow from "./TableRow"

const ITEMS = [
  [
    'Calories',
    '277kcal'
  ],
  [
    'Carbs',
    '0g'
  ],
  [
    'Protein',
    '20g'
  ],
  [
    'Fats',
    '5g'
  ]
]

function Table() {
  return (
    <>
      <h2 className="subtitle color--brandy-red">Nutrition</h2>

      <p className="color--wenge-brown my-6">
        The table below shows nutritional values per serving without the additional fillings.
      </p>

      <table className="table w-100">
        <tbody>
          {
            ITEMS.map((([first, second], index) => (
              <TableRow
                key={index}
                first={first}
                second={second}
              />
            )))
          }
        </tbody>
      </table>
    </>
  )
}

export default Table
