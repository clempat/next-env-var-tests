export default function Page1() {
  return (
    <ul>
      <li>NODE_ENV: {process.env.NODE_ENV}</li>
      <li>VAR_1: {process.env.NEXT_PUBLIC_VAR_1}</li>
      <li>VAR_2: {process.env.NEXT_PUBLIC_VAR_2}</li>
      <li>VAR_3: {process.env.VAR_3}</li>
    </ul>
  );
}
