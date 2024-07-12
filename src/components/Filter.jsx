import '../CSS/Filter.css';

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre"
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="5"
        step="0.1"
        placeholder="Filtrer par note minimale"
        onChange={(e) => onRatingChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
