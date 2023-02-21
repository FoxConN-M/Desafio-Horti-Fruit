import './App.css';

import React, { Fragment } from "react";
import { Products } from "./components/Main";
import { data } from './data';
import carrinho from './imagem/carrinho.png'

export class App extends React.Component {
	state = {
		characters: data,
	};

	render() {
		const { characters } = this.state;

		return (
			<Fragment>
				<header>
            <div className="titulo">
                <h1>HortiFruit</h1>
                <h3>VnW</h3>
            </div>
				</header>

				<main>
          <div className="subtitulo">
          <h2>Nossos Produtos</h2>
          </div>

					<section>
            <div className="Frutas">
            {characters
							? characters.map(({ id, name, image }) => (
									<Products name={name} image={image} key={id} />
							  ))
							: undefined}
            </div>
            <div className="Carrinho">
              <img src={carrinho}/>
            </div>
					</section>
				</main>
			</Fragment>
		);
	}
}

export default App;
