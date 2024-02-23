import PropTypes from 'prop-types'
import classNames from 'classnames'


const propTypes = {
  prefix: PropTypes.string,
  text: PropTypes.string.isRequired,
  ul: PropTypes.bool,
  ol: PropTypes.bool
}

const defaultProps = {
  prefix: ''
}

function Item({ prefix, text, ul, ol }) {
  return (
    <li className={classNames(
      "item color--wenge-brown d-flex",
      { 'item__ul': ul, 'item__ol': ol }
    )}>
      <div>
        {
          prefix && (<strong className='mr-1'>{prefix}:</strong>)
        }
        {text}
      </div>
    </li>
  )
}

Item.propTypes = propTypes
Item.defaultProps = defaultProps

export default Item
