import PropTypes from 'prop-types';

export const Node = (() => {
  const shape = {
    name: PropTypes.string.isRequired,
    opened: PropTypes.boolean,
    icon: PropTypes.object,
    onClose: PropTypes.function,
    onOpen: PropTypes.function,
  }

  shape.childNodes = PropTypes.arrayOf(PropTypes.shape(shape))

  return PropTypes.shape(shape)
})()

export default {
  Node
}