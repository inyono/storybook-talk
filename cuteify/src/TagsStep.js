import Chip from 'material-ui/Chip';
import { green200, grey200 } from 'material-ui/styles/colors';
import React from 'react';

const tags = ['cute', 'funny', 'awesome'];

const TagsStep = ({ setState, state }) => {
  const selectedTags = state.selectedTags || {};

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {tags.map((tag, i) => {
        return (
          <Chip
            onTouchTap={() =>
              setState({
                selectedTags: { ...selectedTags, [i]: !selectedTags[i] }
              })}
            key={i}
            style={{
              margin: '5px',
              backgroundColor: selectedTags[i] ? green200 : grey200
            }}
          >
            {tag}
          </Chip>
        );
      })}
    </div>
  );
};

export default TagsStep;
