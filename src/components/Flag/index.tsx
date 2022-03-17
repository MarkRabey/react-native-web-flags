import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

interface Props {
  countryCode: string;
  size?: number;
  style?: any;
  variant?: 'emoji' | {image: 'flat' | '3d'};
}

const Flag = ({countryCode, size = 32, style, variant = 'emoji'}: Props) => {
  const [flag, setFlag] = useState<string | null>(null);
  useEffect(() => {
    if (variant === 'emoji') {
      const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
      setFlag(String.fromCodePoint(...codePoints));
    } else {
      setFlag('not available');
    }
  }, [countryCode, variant]);

  return (
    <View style={{...style}}>
      <Text style={{fontSize: size}}>{flag}</Text>
    </View>
  );
};

export default Flag;