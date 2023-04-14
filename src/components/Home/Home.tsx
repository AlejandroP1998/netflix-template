import Carousel from "./Carousel/Carousel";
import './Home.scss'


const Home = () => {

  const images = ['https://palomaynacho.com/wp-content/uploads/2022/09/3-star-trek-eliminada-del-calendario-de-paramount.jpg',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBu7wIXWRupyVZpBKzOJ6RuV4yfSl9bTJwiewTRZjBsljPqR_ojmrEJUOATXvjptsDzwI_rReXrC4PlngBxnMUhKPyC5E-nNFXSy2JE7BvEEKsqSznCMTEBT22stWtRSGNxgfNfQa_JrhNULktehQrel5T_4y7WpkYNfzyiFRkD8XzLUekOJixqZEs/s1920/Presencias_ViX%20Plus.jpg',
    'https://cinefilosoficial.com/wp-content/uploads/2021/10/dune-2.jpg',
    'https://culturageek.com.ar/wp-content/uploads/2022/12/2a9xr09hclksa6wyhk0vn6lj9r9ud5niq5h1ix0m.jpeg']

  return (
    <section className="home">
      <div className="carousel">
        <Carousel images={images} autoplay={true} />
      </div>
    </section>
  )
}

export default Home;