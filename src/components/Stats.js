export default function Stats({ items, numItems }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some itmes to your packing list 🚀🚀🚀</em>
      </footer>
    );
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPacked / items.length) * 100);

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? `You got everything! Ready to go ✈️`
          : `💼 You have ${numItems} items on your list, and you already packed
          ${numPacked}(${percentagePacked}%)`}
      </em>
    </footer>
  );
}
