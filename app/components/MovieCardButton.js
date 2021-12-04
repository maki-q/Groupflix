import React, {useState} from 'react';
import { Image, Pressable } from 'react-native';

export function MovieCardButton(props) {
  const [selected, setSelected] = useState(false);
  let activeImage;
  let inactiveImage;
  let selectedInfo;

  switch(props.title) {
    case 'Like':
      activeImage = require('../../assets/images/icons/SelectedLike.png');
      inactiveImage = require('../../assets/images/icons/UnselectedLike.png');
      break;
    case 'Dislike':
      activeImage = require('../../assets/images/icons/SelectedRemove.png');
      inactiveImage = require('../../assets/images/icons/UnselectedRemove.png');
      break;
    case 'Stream':
      activeImage = require('../../assets/images/icons/SelectedStream.png');
      inactiveImage = require('../../assets/images/icons/UnselectedStream.png');
      break;
    case 'Info':
      activeImage = require('../../assets/images/icons/Info.png');
      inactiveImage = activeImage;
      selectedInfo = require('../../assets/images/icons/InfoSelected.png')
      break;
  }

  function pressAction() {
    setSelected(!selected);
  }

  let currentImage = selected ? activeImage : inactiveImage;

  return (
    <Pressable
      style={[{paddingLeft: 30, paddingRight: 30, width: 25, alignItems: 'center'}]}
      onPress={pressAction}
    >
      {({pressed}) => (
        <Image
        source={pressed && props.title === 'Info' ? selectedInfo : currentImage}
        style={{
          width: 25,
          height: 25,
        }}
        />
      )}
    </Pressable>
  );
}