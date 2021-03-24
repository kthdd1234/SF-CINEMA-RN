import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Dimensions, Alert, StatusBar, Text } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Trailer = ({ videoId, playing }) => {
  return (
    <View>
      <StatusBar hidden={true} />

      <YoutubePlayer
        width={SCREEN_WIDTH}
        height={hp('50%')}
        play={playing}
        videoId={videoId}
        webViewProps={{
          injectedJavaScript: `
      var element = document.getElementsByClassName('container')[0];
      element.style.position = 'unset';
      element.style.paddingBottom = 'unset';
      true;
    `,
        }}
        onPlaybackQualityChange={(quality) => {
          console.log(quality);
        }}
      />
    </View>
  );
};

export default Trailer;
