import '@styles/globals.css';
import Nav from "@components/Nav";
import Provider from '@components/Provider';

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
            <h6> Copyright © 2024 Angela Novakovic - All Rights Reserved </h6>
          </main>
        </Provider>
      </body>
    </html>
  )
}


export default RootLayout;