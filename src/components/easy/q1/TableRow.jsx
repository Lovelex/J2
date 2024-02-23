import PropTypes from 'prop-types'

const propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired
}

function TableRow({first, second}) {
  return (
    <tr className="tr">
      <td className="td color--wenge-brown py-4">{first}</td>

      <td className="td color--brandy-red fw-bold py-4">{second}</td>
    </tr>
  )
}

TableRow.propTypes = propTypes

export default TableRow
