export default function Button({ href, children }) {
    return (
      <a href={href} className="button">
        {children}
      </a>
    );
  }
  