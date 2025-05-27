const Item = ({ title, isDropdown = false }) => {
  return (
    <li className="item">
      {title}
      <svg
        className={isDropdown ? "item-show" : "item-hide"}
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </li>
  );
};

export default Item;
