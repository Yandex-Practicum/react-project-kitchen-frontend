import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: auto minmax(320px, 1108px) auto;
	grid-template-rows: auto 1fr;
	min-height: 100vh;
	grid-template-areas: 
		"head head head"
		". main .";
	
	background: ${props => props.theme.colors.primaryBg};
	color: ${props => props.theme.colors.primary};
`;
