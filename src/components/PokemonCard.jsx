import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const PokemonCard = ({ url }) => {

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
  }, [])

  console.log(pokemon);

  const textColor = (type) => {
    if (type === "grass") {
      return '#416460'
    } else if (type === "fairy") {
      return '#fabaff'
    } else if (type === "fire") {
      return '#E75C35'
    } else if (type === "water") {
      return '#1479FB'
    } else if (type === "bug") {
      return '#4AB648'
    } else if (type === "normal") {
      return '#afac9f'
    } else if (type === "ghost") {
      return '#323569'
    } else if (type === "rock") {
      return '#7E7E7E'
    } else if (type === "dark") {
      return '#030706'
    } else if (type === "dragon") {
      return '#478A93'
    } else if (type === "electric") {
      return '#ffb300'
    } else if (type === "poison") {
      return '#5B3184'
    } else if (type === "ice") {
      return '#6FBEDF'
    } else if (type === "steel") {
      return '#5E736C'
    } else if (type === "ground") {
      return '#654008'
    } else if (type === "fighting") {
      return '#96402A'
    } else if (type === "psychic") {
      return '#971B45'
    } else {
      return 'black'
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
    } else if(type === 'flying'){
      return 'linear-gradient(#699fff, #9bbfff, #699fff)';
    } else if (type === "psychic") {
      return "linear-gradient(#971B45, #C23867, #CD7D98)";
    } else {
      return 'black'
    }
  }

  const borderColor = (type) => {
    if (type === "grass") {
      return "#B1DBBC";
    } else if (type === "fire") {
      return "#E6901E";
    } else if (type === "fairy") {
      return '#fabaff'
    } else if (type === "normal") {
      return "#afac9f";
    } else if (type === "water") {
      return "#1479FB";
    } else if (type === "bug") {
      return "#62DB60";
    } else if (type === "normal") {
      return "#735259)";
    } else if (type === "ghost") {
      return "#323569";
    } else if (type === "rock") {
      return "#7E7E7E";
    } else if (type === "dark") {
      return "#030706)";
    } else if (type === "dragon") {
      return "#478A93";
    } else if (type === "electric") {
      return "#ffb300";
    } else if (type === "poison") {
      return "#5B3184";
    } else if (type === "ice") {
      return "#6FBEDF";
    } else if (type === "steel") {
      return "#5E736C";
    } else if (type === "ground") {
      return "#654008";
    } else if (type === "fighting") {
      return "#96402A";
    } else if (type === "psychic") {
      return "#971B45";
    } else if(type === 'flying'){
      return '#699fff'
    } else {
      return 'black'
    }
  }

  const backgroundImage = (type) => {
    if (type === "grass") {
      return "url('src/assets/grassenergy.png')";
    } else if (type === "fire") {
      return "url('src/assets/fireenergy.jpg')";
    } else if (type === "fairy") {
      return "url('src/assets/faityenergy.jpg')"
    } else if (type === "normal") {
      return "url('src/assets/normalenergy.png')";
    } else if (type === "water") {
      return "url('src/assets/waterenergy.jpg')";
    } else if (type === "bug") {
      return "url('src/assets/bugenergy.png')";
    } else if (type === "ghost") {
      return "url('src/assets/ghostenergy.jpg')";
    } else if (type === "rock") {
      return "url('src/assets/rockenergy.png')";
    } else if (type === "dark") {
      return "url('src/assets/darkenergy.jpg')";
    } else if (type === "dragon") {
      return "url('src/assets/dragonenergy.jpg')";
    } else if (type === "electric") {
      return "url('src/assets/electricenergy.jpg')";
    } else if (type === "poison") {
      return "url('src/assets/poisonenergy.png')";
    } else if (type === "ice") {
      return "url('src/assets/iceenergy.jpg')";
    } else if (type === "steel") {
      return "url('src/assets/steelenergy.jpg')";
    } else if (type === "ground") {
      return "url('src/assets/groundenergy.jpg')";
    } else if (type === "fighting") {
      return "url('src/assets/groundenergy.jpg')";
    } else if (type === "psychic") {
      return "url('src/assets/psychicenergy.jpg')";
    } else if(type === 'flying'){
      return "url('src/assets/flyingenergy.jpg')"
    } else {
      return 'white'
    }
  }

const styleType = (style) => {
  if(style !== undefined){
    return { background: backgroundColor((pokemon.types?.[1].type?.name)),border: '1px solid black', padding: '5px', borderRadius: '10px', color: 'white', WebkitTextStroke: '1px black', fontSize: '25px' }
  }else{
    return{}
  }
}

  return (
    <div className='pokemon-card' style={{}}>
      <Link to={`/pokedex/${pokemon.id}`} style={{ textDecoration: 'none', border: `6px solid ${borderColor((pokemon.types?.[0].type?.name))}`, backgroundImage: backgroundImage(pokemon.types?.[0].type?.name), backgroundSize: '100% 100%'}}>
        <img
          className='pokedex-img'
          src={pokemon.sprites?.other.dream_world.front_default}
          alt=""
          style={{ background: 'transparent', borderRadius: '10%' }}
        />
        <h2 style={{ color: textColor(pokemon.types?.[0].type?.name), webkitTextStroke: '1px black'}}>{pokemon.name} #{pokemon.id}</h2>
        <p>Type:</p>
        <h3>
          <b style={{ background: backgroundColor((pokemon.types?.[0].type?.name)),border: '1px solid black', padding: '5px', borderRadius: '10px', color: 'white', WebkitTextStroke: '1px black', fontSize: '25px' }}>
            {pokemon.types?.[0].type.name}
          </b>
             {pokemon.types?.[1] ? ' ' : null}
          <b style={styleType(pokemon.types?.[1])}>
           {pokemon.types?.[1] ? pokemon.types[1].type.name : ''}
          </b>
        </h3>
        <div className='separator'></div>
        <div className='card-stats'>
          <div className='card-stats-details-1'>
            <p>HP</p>
            <h3 style={{color: 'black'}}>{pokemon.stats?.[0].base_stat}</h3>
          </div>
          <div className='card-stats-details-2'>
            <p>ATQ</p>
            <h3 style={{color: 'black'}}>{pokemon.stats?.[1].base_stat}</h3>
          </div>
          <div className='card-stats-details-1'>
            <p>DEF</p>
            <h3 style={{color: 'black'}}>{pokemon.stats?.[2].base_stat}</h3>
          </div>
          <div className='card-stats-details-2'>
            <p>SPE</p>
            <h3 style={{color: 'black'}}>{pokemon.stats?.[5].base_stat}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;