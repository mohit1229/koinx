import PropTypes from "prop-types";

const Card = ({ children }) => {
  return (
    <div className="bg-white outline outline-1 rounded-lg outline-cardBorder lg:outline-none lg:radius-none px-2.5 py-4">
      {children}
    </div>
  );
};

Card.propTypes = {
  // Validate that `children` is required and can be any renderable React node
  children: PropTypes.node.isRequired,
};

export default Card;
