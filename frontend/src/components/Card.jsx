import PropTypes from "prop-types";

const Card = ({ children }) => {
  return (
    <div className="bg-white outline outline-1 rounded-lg outline-cardBorder md:outline-none md:radius-none">
      {children}
    </div>
  );
};

Card.propTypes = {
  // Validate that `children` is required and can be any renderable React node
  children: PropTypes.node.isRequired,
};

export default Card;
