import styled from 'styled-components';
import textStyle from './styles/Text.style';

export const API_URL = 'https://api.coinlore.net/api/';

export const TOTAL_PAGES = 6;

export const searchIcon = 'data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 20 20\'><path fill=\'%23838D99\' d=\'M13.22 14.63a8 8 0 1 1 1.41-1.41l4.29 4.29a1 1 0 1 1-1.41 1.41l-4.29-4.29zm-.66-2.07a6 6 0 1 0-8.49-8.49 6 6 0 0 0 8.49 8.49z\'></path></svg>';

export const rightArrowIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iIAogICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIKICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAJPGcgaWQ9ImFycm93LWJhY2siPjxwYXRoIGQ9Ik0yMCwxMUg3LjhsNS42LTUuNkwxMiw0bC04LDhsOCw4bDEuNC0xLjRMNy44LDEzSDIwVjExeiIvPjwvZz4KPC9zdmc+Cgo=';

export const HeaderTitle = styled.h1`${textStyle.titleHeader}`;

export const TextFull = styled.span`${textStyle.text}`;

export const TextFillContent = styled.span`${textStyle.textFillContent}`;
