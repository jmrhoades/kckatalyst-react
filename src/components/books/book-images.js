import styled from 'styled-components';
import { bottomSpace } from "../../theme/global-styles";

export const BookImagesContainer = styled.div`
    padding-bottom: ${bottomSpace};
`;

export const BookImageCover = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding-bottom: ${bottomSpace};
`;

export const BookImageSpread = styled(BookImageCover)`
    /* max-width: 648px; */
    max-width: 100%;
`;


