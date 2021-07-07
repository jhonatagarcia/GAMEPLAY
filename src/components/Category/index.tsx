import React from 'react';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

type Props = RectButtonProperties &{
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    ...rest
}: Props){
    return (
  <RectButton>

  </RectButton>
)
}