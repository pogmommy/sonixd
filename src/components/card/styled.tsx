import { Panel, Button, IconButton } from 'rsuite';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Card {
  cardsize: number;
}

/* const getcardsize = (props: any) => {
  return props.cardsize === 'xs'
    ? props.theme.cardXs
    : props.cardsize === 'sm'
    ? props.theme.cardSm
    : props.cardsize === 'md'
    ? props.theme.cardMd
    : props.cardsize === 'lg'
    ? props.theme.cardLg
    : props.theme.cardSm;
}; */

export const StyledPanel = styled(Panel)<Card>`
  text-align: center;
  width: ${(props) => props.cardsize + 2};
  height: ${(props) => props.cardsize + 55};
  &:hover {
    border: 1px solid ${(props) => props.theme.main};
  }
`;

export const InfoPanel = styled(Panel)<Card>`
  width: ${(props) => props.cardsize};
`;

export const InfoSpan = styled.div`
  color: ${(props) => props.theme.subtitleText};
`;

export const CardButton = styled(Button)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardTitleButton = styled(CardButton)`
  padding-top: 5px;
  padding-bottom: 2px;
  color: ${(props) => props.theme.titleText};
  width: ${(props) => props.cardsize};
`;

export const CardSubtitleButton = styled(CardButton)`
  padding-bottom: 5px;
  color: ${(props) => props.theme.subtitleText};
  width: ${(props) => props.cardsize};
`;

export const CardSubtitle = styled.div<Card>`
  padding-bottom: 5px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${(props) => props.cardsize};
`;

export const CardImg = styled.img<Card>`
  height: ${(props) => props.cardsize};
  width: ${(props) => props.cardsize};
`;

export const LazyCardImg = styled(LazyLoadImage)<Card>`
  height: ${(props) => props.cardsize};
  width: ${(props) => props.cardsize};
`;

export const Overlay = styled.div<Card>`
  background-color: #1a1d24;
  position: relative;
  height: ${(props) => props.cardsize};
  width: ${(props) => props.cardsize};
  &:hover {
    background-color: #000;
    opacity: 0.5;
    cursor: pointer;
    display: block;
  }

  &:hover .rs-btn {
    display: block;
  }
`;

export const HoverControlButton = styled(IconButton)`
  display: none;
  opacity: 0.9;
  border: 1px solid #fff;
  position: absolute !important;
  width: 0px;
  height: 0px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background: ${(props) => props.theme.background};

  &:hover {
    opacity: 1;
    background: ${(props) => props.theme.main};
  }
`;