import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Star from 'material-ui/svg-icons/toggle/star';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import React from 'react';

const images = [
  {
    img: 'images/cat.jpg',
    title: 'Cat'
  },
  {
    img: 'images/puppy-1903313_1920.jpg',
    title: 'Dog'
  },
  {
    img: 'images/black-and-white-1711000_1920.jpg',
    title: 'Giant panda'
  },
  {
    img: 'images/hedgehog-child-1777957_1920.jpg',
    title: 'Hedgehog'
  },
  {
    img: 'images/chicks-573377_1920.jpg',
    title: 'Chick'
  },
  {
    img: 'images/guinea-pig-542917_1920.jpg',
    title: 'Guinea pig'
  }
];

const AnimalsStep = ({ setState, state }) => {
  const favedImages = state.favedImages || {};

  return (
    <GridList cellHeight={180}>
      {images.map((tile, i) => {
        const icon = favedImages[i]
          ? <Star color="white" />
          : <StarBorder color="white" />;

        return (
          <GridTile
            key={tile.img}
            title={tile.title}
            onTouchTap={() =>
              setState({
                favedImages: { ...favedImages, [i]: !favedImages[i] }
              })}
            actionIcon={<IconButton>{icon}</IconButton>}
          >
            <img src={tile.img} />
          </GridTile>
        );
      })}
    </GridList>
  );
};

export default AnimalsStep;
