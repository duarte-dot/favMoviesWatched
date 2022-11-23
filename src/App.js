import React from 'react';
import './style.css';

const data = {
  name: 'Jhon Connor',
  module: 'Front-end',
  bornIn: 1989,
  watchedMovies: [
    { title: 'Titanic', release: 2000, favorite: true },
    { title: 'Terminator Salvation', release: 2009, favorite: true },
    { title: 'The Lord of The Rings', release: 2002, favorite: true },
    { title: 'Helloween Kills', release: 2022, favorite: false },
  ],
};

// D E S A F I O

// exibir todos os dados acima na tela (name, module, bornIn, watchedMovies)
// exibir apenas os dados referentes aos filmes favoritados (favorite === true)
// se o ano de nascimento for <= 2004 o nome da pessoa deve ficar verde, senão vermelho

class App extends React.Component {
  render() {
    console.log('teste aqui 12312313');
    return (
      <div>
        <h1>who</h1>
        <p style={{ color: data.bornIn <= 2004 ? 'green' : 'red' }}>
          {data.name}
        </p>
        <p>{data.module}</p>
        <p>{data.bornIn}</p>
        <h2>favorite movies watched:</h2>
        <ul>
          {data.watchedMovies.map((movie) => {
            if (movie.favorite === true) {
              return (
                <li>
                  {movie.title}, release: {movie.release}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default App;
