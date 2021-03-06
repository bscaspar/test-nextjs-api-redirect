import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const testRedirect = async () => {
    const res = await fetch('/api/hello');
    console.log(res.status);
    console.log(res);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <button onClick={testRedirect}>Click to test redirect!</button>
      </main>
    </div>
  );
}
