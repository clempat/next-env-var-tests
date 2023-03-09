function Page2({
  VAR_1,
  VAR_2,
  VAR_3,
  NODE_ENV,
}: {
  VAR_1: string;
  VAR_2: string;
  VAR_3: string;
  NODE_ENV: string;
}) {
  return (
    <div>
      <h1>From Server</h1>
      <ul>
        <li>VAR_1: {VAR_1}</li>
        <li>VAR_2: {VAR_2}</li>
        <li>VAR_3: {VAR_3}</li>
        <li>NODE_ENV: {NODE_ENV}</li>
      </ul>
      <h1>From Client</h1>
      <ul>
        <li>VAR_1: {process.env.NEXT_PUBLIC_VAR_1}</li>
        <li>VAR_2: {process.env.NEXT_PUBLIC_VAR_2}</li>
        <li>VAR3: {process.env.VAR_3}</li>
        <li>NODE_ENV: {process.env.NODE_ENV}</li>
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      VAR_1: process.env.NEXT_PUBLIC_VAR_1,
      VAR_2: process.env.NEXT_PUBLIC_VAR_2,
      VAR_3: process.env.VAR_3,
      NODE_ENV: process.env.NODE_ENV,
    }, // will be passed to the page component as props
  };
}

export default Page2;
