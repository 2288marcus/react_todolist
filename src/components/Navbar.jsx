export default function Navbar({ items, clearItems }) {
  return (
    <nav className="navbar bg-dark px-1 py-3 border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand text-white">React to-do-list</a>
        {items.length > 0 && (
          <button
            className="btn btn-outline-success"
            onClick={() => clearItems()}
          >
            Clear Items
          </button>
        )}
      </div>
    </nav>
  );
}
