import { NextSeo } from 'next-seo';

function App() {
  return (
    <>
      <NextSeo
        title="測試 SEO"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: '測試 SEO',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://ithelp.ithome.com.tw/storage/image/fbpic.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://ithelp.ithome.com.tw/storage/image/fbpic.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://ithelp.ithome.com.tw/storage/image/fbpic.jpg' },
            { url: 'https://ithelp.ithome.com.tw/storage/image/fbpic.jpg' },
          ],
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div>xxx</div>
    </>
  );
}

export default App;
