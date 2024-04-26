import Feed from '@components/Feed.jsx';

const Home = () => {
  return (
    <section className="w-full flex -center flex-col">
      <h1 className="head_text text-center">
        Discovery & Share
        <br className="max-mid:hidden"
        />
        <span className="orange_gradient">
          Best Recipes at Orange Blog
        </span>
      </h1>
      <p className='desc text-center'>
      Orange Blog is an recipe sharing tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed/>
    </section>
  
  )
}

export default Home;