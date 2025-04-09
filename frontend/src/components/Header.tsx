import { useLocation } from 'preact-iso';

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/" class="secondary">
              #
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Task App with Preact + Picocss</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/about" class="secondary">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
