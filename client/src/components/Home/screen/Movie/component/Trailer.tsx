import React from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface ITrailer {
  videoId: string;
  playing: boolean;
}

const Trailer = ({ videoId, playing }: ITrailer) => {
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
            true; `,
        }}
      />
    </View>
  );
};

export default Trailer;
