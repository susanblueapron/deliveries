import Link, { prefetch } from '../components/link'

// we just render a list of 3 accounts having 2 with prefetched data
export default () => (
  <main>
    <h1>Next.js - with data prefetch example</h1>
    <ul>
      <li>
        <Link href='/account?id=1' prefetch withData>
          <a>Account 1</a>
        </Link>
      </li>
      <li>
        <Link href='/account?id=2' prefetch>
          <a>Account 2</a>
        </Link>
      </li>
      <li>
        <Link href='/account?id=3'>
          <a onMouseOver={e => prefetch('/account?id=3')}>Account 3</a>
        </Link>
      </li>
    </ul>
  </main>
)
