import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <header></header>
      <Link href='/users'> go to users </Link>
      <ProductCard />

      <select data-choose-theme>
        <option value=''>Default</option>
        <option value='coffee'>Coffee</option>
        <option value='winter'>winter</option>
        <option value='acid'>acid</option>
        <option value='cmyk'>cmyk</option>
      </select>
    </main>
  );
}
