import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/lightbody');
  // The redirect function throws an error, so nothing below this will be executed.
  // Adding a return null to satisfy linting or type checking if necessary,
  // though practically unreachable.
  return null; 
}
