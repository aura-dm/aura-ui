import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const BreadcrumbItem = styled.div`
  color: ${props => props.theme.breadcrumb.color};
  fill: ${props => props.theme.breadcrumb.color};
  font-family: ${props => props.theme.breadcrumb.fontFamily};
  font-size: ${props => props.theme.breadcrumb.fontSize};
  font-weight: ${props => props.theme.breadcrumb.fontWeight};
  line-height: ${props => props.theme.breadcrumb.lineHeight};
`;

export const BreadcrumbDivider = styled.div`
  fill: ${props => props.theme.breadcrumb.color};
`;

export const BreadcrumbLink = styled(BreadcrumbItem)`
  cursor: pointer;
  display: flex;
`;
