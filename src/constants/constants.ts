import styled from 'styled-components';
import textStyle from './styles/Text.style';

export const API_URL = 'https://api.coinlore.net/api/';

export const TOTAL_PAGES = 6;

export const searchIcon = 'data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 20 20\'><path fill=\'%23838D99\' d=\'M13.22 14.63a8 8 0 1 1 1.41-1.41l4.29 4.29a1 1 0 1 1-1.41 1.41l-4.29-4.29zm-.66-2.07a6 6 0 1 0-8.49-8.49 6 6 0 0 0 8.49 8.49z\'></path></svg>';

export const HeaderTitle = styled.h1`${textStyle.titleHeader}`;

export const TextFull = styled.span`${textStyle.text}`;

export const TextFillContent = styled.span`${textStyle.textFillContent}`;
