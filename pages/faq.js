import FAQScreen from '../src/screens/FAQScreen';

export async function getStaticProps() {
    const URL_FAQ_API = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
        const faq = await fetch(URL_FAQ_API)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return res;
            })
    
    return {
        props: {faq},
    };
}

export default FAQScreen;

/*import Link from '../src/components/Link';
import PageTitle from '../src/components/PageTitle';


export default function FAQPage({ faq }) {
    return (
        <div>
            <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
            <h1>Alura Cases - FAQ</h1>
            <Link href="/" passhref>
                Ir para o Home
            </Link>
            <ul>
                {faq.map(({ answer, question }) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}*/