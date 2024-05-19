import PropTypes from "prop-types";
import queryString from 'query-string';
const CategoryBox = ({ label, icon: Icon }) => {
  const handleClick=()=>{
    let currentQuery={category:label}
    const url=queryString.stringify({
      url:'/',
      query:currentQuery
    })
  }
  
  return (
    <div
    onClick={handleClick}
      className={`flex
      flex-col 
  items-center 
  justify-center 
  gap-2
  p-3
  border-b-2
  hover:text-neutral-800
  transition
  cursor-pointer`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
};

export default CategoryBox;
