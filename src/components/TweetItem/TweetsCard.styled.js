import styled from "styled-components";
import GoIt_Logo from '../../images/Logo_GoIt.svg';
import Tweet_Logo from '../../images/Tweet_Logo.svg';


export const TweetItem = styled.li`
    position: relative;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    background-repeat: no-repeat;
    background-position: top;
    background-attachment: cover;
    display: flex;
    width: 380px;
    justify-content: center;
    
    padding-top: 178px;
    padding-bottom: 36px;
    border-radius: 20px;
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

    &:before {
        content: '';
        width: 308px;
        height: 156px;
        z-index: 100;
        background-image: url(${Tweet_Logo});
        position: absolute;
        top: 28px;
        left: 36px;

    }
    &:after {
        content: '';
        width: 76px;
        height: 23px;
        z-index: 100;
        background-image: url(${GoIt_Logo});
        position: absolute;
        top: 20px;
        left: 20px;

    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;

    &:after {
        content: '';
        width: 380px;
        z-index: 100;
        position: absolute;
        width: 380px;
        height: 8px;
        left: 0px;
        top: 214px;

        background: #EBD8FF;
        box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    }
`;

export const Counts = styled.p`
    margin: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;

    color: #EBD8FF;

`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    justify-content: center;
    align-items: center;
`;

export const Avatar = styled.img`
    z-index: 101;
    position: relative;
    width: 62px;
    height: 62px;
    background: #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
    border-radius: 50%;
    border: 8px solid #EBD8FF;
    object-fit: contain;
`;

export const ButtonFollow = styled.button`
 padding: 14px 28px;
  background: ${(props) => (props.isFollow ? '#5cd3a8' : '#EBD8FF')};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    border: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #373737;
 
&:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
    
`;

export const ButtonText = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: calc(22 / 18);
text-transform: uppercase;
color: #373737;
flex: none;
order: 0;
flex-grow: 0;
`;