import '@styles/globals.css';
import Nav from "@components/Nav";
import Provider from '@components/Provider';
import Footer from '@components/Footer';

export const metadata ={
  title: "A Recipe Blog",
  description: 'Discover & Share Your Best Recipes'
}


const RootLayout = ({children}) => {
  return(
    <html lang="en">
      <body>
        <Provider>
            <div className="main">
            <div className="gradient"/>
          </div>
          <main className="app">
            <Nav/>
            {children}
          </main>
          <Footer year={2024}/>
        </Provider>
      </body>
    </html>
  )
}


export default RootLayout;