import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import TextCss from '../../styles/text.styles';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <TextCss.H1>First Post</TextCss.H1>
            <TextCss.H2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </TextCss.H2>
        </Layout>
    )
};
