// /app/components/Button.js
export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="my-button">
      {children}
    </button>
  );
}
