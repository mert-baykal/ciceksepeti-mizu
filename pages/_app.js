import Layout from '@/components/Layout'
import stores from '@/stores';

import '@/styles/globals.scss'
import { Provider } from 'react-redux'

export default function App({ Component, ...rest }) {
  // NextJS üzerinde Redux'a erişebilmek için Wrapper Store kütüphanesini kullanıyoruz
  const { store,props} = stores.useWrappedStore(rest);
  const { pageProps }= props;

  return (
    <Provider store={store}>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </Provider>
  )
}
