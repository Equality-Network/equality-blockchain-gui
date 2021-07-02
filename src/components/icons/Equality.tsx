import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as EqualityIcon } from './images/equality.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={EqualityIcon} viewBox="0 0 150 58" {...props} />;
}
