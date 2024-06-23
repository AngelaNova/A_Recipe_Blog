import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span style={{color:'orange', fontSize:'75%'}} className='text-center'> The Best Recipes</span>
    </h1>
    <div style={{paddingLeft:'280px',
                paddingRight:'280px',
                marginBottom:'-40px'
        }}>
      <p className='desc text-center'>
        Orange Blog is a platform for culinary enthusiasts to explore, craft, and exchange inventive cooking and baking recipes.
      </p>
    </div>

    <Feed />
  </section>
);

export default Home;