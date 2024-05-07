import GlobalStyle from '../src/theme/GlobalStyle'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    return(
     <>
         <Head>
                                          {/*   <!-- Google tag (gtag.js) --> */}

                        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3BHSEMMZQ7"></script>
                        <script 
                           dangerouslySetInnerHTML={{
                              __html: `
                              window.dataLayer = window.dataLayer || [];
                              function gtag(){dataLayer.push(arguments);}
                              gtag('js', new Date());
      
                              gtag('config', 'G-3BHSEMMZQ7');
                               
                              `
                           }}
                        
                        />
                       
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
         </Head>
        <GlobalStyle />
        <Component {...pageProps} />
     </>
    )
  }

