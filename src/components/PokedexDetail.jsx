import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const PokedexDetail = () => {

  const [pokemon, setPokemon] = useState({})
  const navigate = useNavigate()
  const { id } = useParams()

  const userName = useSelector(state => state.name)

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokemon(res.data))
  }, [id])

  console.log(pokemon);

  const goBack = () => {
    navigate('/pokedex')
  }

  const backgroundImage = (type) => {
    if (type === "grass") {
      return "url('src/assets/grassbackground.jpg')";
    } else if (type === "fire") {
      return "url('src/assets/firebackground.jpg')";
    } else if (type === "fairy") {
      return "url('src/assets/fayribackground.jpg')"
    } else if (type === "normal") {
      return "url('src/assets/normalbackground.jpg')";
    } else if (type === "water") {
      return "url('src/assets/waterbackground.jpg')";
    } else if (type === "bug") {
      return "url('src/assets/bugbackground1.jpg')";
    } else if (type === "ghost") {
      return "url('src/assets/ghostbackground.jpg')";
    } else if (type === "rock") {
      return "url('src/assets/rockbackground.jpg')";
    } else if (type === "dark") {
      return "url('src/assets/darkbackground.jpg')";
    } else if (type === "dragon") {
      return "url('src/assets/dragonbackground.jpg')";
    } else if (type === "electric") {
      return "url('src/assets/electricbackground.jpg')";
    } else if (type === "poison") {
      return "url('src/assets/poisonbackground.jpg')";
    } else if (type === "ice") {
      return "url('src/assets/icebackground.jpg')";
    } else if (type === "steel") {
      return "url('src/assets/steelbackground.jpg')";
    } else if (type === "ground") {
      return "url('src/assets/groundbackground.jpg')";
    } else if (type === "fighting") {
      return "url('src/assets/groundbackground.jpg')";
    } else if (type === "psychic") {
      return "url('src/assets/psychicbackground.jpg')";
    } else if (type === 'flying') {
      return "url('src/assets/flyingbackground.jpg')"
    } else {
      return 'white'
    }
  }

  const backgroundColor = (type) => {
    if (type === "grass") {
      return "linear-gradient(#55ff53, #acf2ab, #55ff53)";
    } else if (type === "fire") {
      return "linear-gradient(#E6901E, #E75C35)";
    } else if (type === "water") {
      return "linear-gradient(#133258, #1479FB, #82B2F1)";
    } else if (type === "bug") {
      return "linear-gradient(#62DB60, #3BB039, #AAFFA8)";
    } else if (type === "normal") {
      return "linear-gradient(#afac9f, #e3dfcd, #afac9f)";
    } else if (type === "fairy") {
      return "linear-gradient(#fabaff, #fdddff, #fabaff)";
    } else if (type === "ghost") {
      return "linear-gradient(#323569, #454AA8, #787DDA)";
    } else if (type === "rock") {
      return "linear-gradient(#7E7E7E, #8D8D94, #D3D3D3)";
    } else if (type === "dark") {
      return "linear-gradient(#030706, #0D1211, #5A5E5D)";
    } else if (type === "dragon") {
      return "linear-gradient(#478A93, #56A4AE, #A2BEC1)";
    } else if (type === "electric") {
      return "linear-gradient(#ffb300, #fae934, #ffd700)";
    } else if (type === "poison") {
      return "linear-gradient(#5B3184, #A564E3, #CE9BFF)";
    } else if (type === "ice") {
      return "linear-gradient(#6FBEDF, #64CBF5, #BDEBFE)";
    } else if (type === "steel") {
      return "linear-gradient(#5E736C, #728881, #A8A8A8)";
    } else if (type === "ground") {
      return "linear-gradient(#654008, #895C1A, #D69638)";
    } else if (type === "fighting") {
      return "linear-gradient(#96402A, #F1613C, #CB735D)";
    } else if (type === 'flying') {
      return 'linear-gradient(#699fff, #9bbfff, #699fff)';
    } else if (type === "psychic") {
      return "linear-gradient(#971B45, #C23867, #CD7D98)";
    } else {
      return 'black'
    }
  }
  const styleType = (style) => {
    if (style !== undefined) {
      return { background: backgroundColor((pokemon.types?.[1].type?.name)), border: '1px solid black', padding: '5px', borderRadius: '10px', color: 'white', WebkitTextStroke: '1px black', fontSize: '25px' }
    } else {
      return {}
    }
  }


  return (
    <div className='pokedex-detail' style={{ backgroundImage: backgroundImage(pokemon.types?.[0].type?.name), backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <div className='pokedex-detail-nav'>
        <img src="src\assets\pokebola2.png" alt="" style={{ width: '40px' }} />
        <h2 style={{ color: 'white', padding: '0 2rem' }}>Look {userName}! This is {pokemon.name}</h2>
        <img src="src\assets\pokebola2.png" alt="" style={{ width: '40px' }} />
      </div>
      <button onClick={goBack}><i className="fa-solid fa-arrow-left"></i></button>
      <h1 style={{ WebkitTextStroke: '2px black', color: 'white', fontSize: '40px' }}>{pokemon.name} #{pokemon.id}</h1>
      <img src={pokemon.sprites?.other.dream_world.front_default} alt="" style={{ zIndex: '1', width: '15rem', height: '15rem' }} />
      <div className='pokedex-detail-content' style={{ background: backgroundColor(pokemon.types?.[0].type?.name) }}>
        <div className='pokedex-detail-stats'>
          <div>
            <p><b>Weight: </b></p>
            <h3>{pokemon.weight}</h3>
          </div>
          <div>
            <p><b>Heigth: </b></p>
            <h3>{pokemon.height}</h3>
          </div>
        </div>

        <div>
          <div>
            <h2>Type:</h2>
            <div>
              <h3>
                <b style={{ background: backgroundColor((pokemon.types?.[0].type?.name)), border: '1px solid black', padding: '5px', borderRadius: '10px', color: 'white', WebkitTextStroke: '1px black', fontSize: '25px' }}>
                  {pokemon.types?.[0].type.name}
                </b>
                {pokemon.types?.[1] ? ' ' : null}
                <b style={styleType(pokemon.types?.[1])}>
                  {pokemon.types?.[1] ? pokemon.types[1].type.name : ''}
                </b>
              </h3>

            </div>
          </div>
          <div>
            <h2>Abilities:</h2>
            <div>
            <h3>
                <b style={{ background: backgroundColor((pokemon.types?.[0].type?.name)), border: '1px solid black', padding: '5px', borderRadius: '10px', color: 'white', WebkitTextStroke: '1px black', fontSize: '25px' }}>
                  {pokemon.types?.[0].type.name}
                </b>
                {pokemon.types?.[1] ? ' ' : null}
                <b style={styleType(pokemon.types?.[1])}>
                  {pokemon.types?.[1] ? pokemon.types[1].type.name : ''}
                </b>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexDetail;