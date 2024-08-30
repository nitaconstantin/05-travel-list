export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span className={`${item.packed ? "line-through" : ""}`}>
        {item.quantity} {item.description}
      </span>
      <button onClick={(e) => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}
