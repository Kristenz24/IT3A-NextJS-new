import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Kristenz. I am a Software Engineer.</p>

        <hr></hr>

        <strong>1. Introduce yourself.  What are your hobbies, favorite music, favorite food, and other things you can tell me about yourself?
        </strong>
        <p>I am Kristenz Reyes Mingoy, 21 years old, and I live in Candaba Pampanga. My hobbies are watching movies, coding and playing video games. My current favorite music is “bad by wave to earth”. My favorite food is french fries and dark chocolates.</p>
        
        <hr></hr>

        <strong>2.  Why did you take up IT?
        </strong>
        <p>Funnily enough, I should be taking computer science as my sister and cousins were already IT professionals. I just spun a wheel on my phone and it landed on computer science. But the problem is that most schools in my area don’t offer computer science so I just picked computer engineering and picked University of the Assumption as my school, but for some reason, after researching more on computer engineering, I like IT more as I’m more interested in software than hardwares so I just changed it to Information Technology. So in the end, there's four IT in our family now.</p>
        
        <hr></hr>

        <strong>3.  What career do you see yourself exploring after graduation?
        </strong>
        <p>As of right now, I’m really not sure as technology is constantly changing. There might be new careers and some careers might just disappear. </p>
        
        <hr></hr>

        <strong>4.  What do you expect to learn in this subject?</strong>
        <p>I expect this subject to solidify my learning and fill the gaps of what I’m missing in terms of various techniques on programming and other stuff as well.</p>
        
        <hr></hr>
        
        <strong>5.  What topics do you want to be discussed in this subject?
        </strong>
        <p>I am interested in learning new technologies as well as how to integrate different technologies all together such as connecting a database into a frontend application. I also want to learn different javascript libraries like react.</p>

        <hr></hr>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}