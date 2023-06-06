import styles from './style.module.scss';
import Head from 'next/head';
import LaunchCountdown from "../containers/LaunchCountdown";
import Footer from "../components/Footer";

export default function Home() {
      const daydate = new Date();
      const day = 30-(daydate.getDate());
      const hour = 23-(daydate.getHours());
      const minute = 59-(daydate.getMinutes());
      const second = 59-(daydate.getSeconds());
      return (
            <>
                  <Head>
                        <meta charSet="UTF-8" />
                        <meta name="viewport"
                              content="width=device-width, initial-scale=1.0"
                        />
                        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
                  </Head>

                  <main className={styles.main}>
                        <img src="eduno-white.png" className='h-12 md:h-24 mb-4 md:mb-8' alt="" />
                        <h1 className={styles.title}>
                              We're launching soon a great platform for developers.
                        </h1>
                        <div className={styles.container}>
                              <LaunchCountdown days={day}
                                    hours={hour}
                                    minutes={minute}
                                    seconds={second}
                              />
                        </div>
                        <div class="email-content">
                              <p className='text-black pt-4 md:pt-8 pb-2 md:pb-2 text-xl md:text-3xl'>Subscribe now to get the latest updates!</p>
                              <div class="input-box flex ">
                                    <input type="email" className='bg-gray-white w-full flex-1 rounded border border-gray-500 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-gray-500 transition duration-100 focus:ring' placeholder="Enter your email" />
                                    <button className='inline-block rounded bg-gray-600 px-4 py-2 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-900 focus-visible:ring active:bg-indigo-700 md:text-base'>Notify Me</button>
                              </div>
                        </div>
                        <Footer />
                  </main>
            </>
      );
}
