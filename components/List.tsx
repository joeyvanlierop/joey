import styled from "styled-components";
interface ListItemProps {
  color: string;
  title: string;
  date: string;
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <ListItemContent>
      <Dot color={props.color} />
      <Title>{props.title}</Title>
      <Date>{props.date}</Date>
      <Expand />
    </ListItemContent>
  );
};

const Dot = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  min-width: 8px;
  min-height: 8px;
  margin-right: 16px;
`;

const Title = styled.h4`
  width: 100%;
  height: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 16px;
`;

const Date = styled.h4`
  color: #272727;
  opacity: 0.3;
  transition: all 0.25s;
`;

const Expand = styled.svg`
  background-image: url(expand.svg);
  background-repeat: no-repeat;
  background-position: center bottom;
  width: 0;
  height: 20px;
  opacity: 0;
  margin-left: 0;
  transform: rotate(-90deg);
  transition: all 0.25s;
`;

const ListItemContent = styled.li`
  display: flex;
  align-items: center;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: -1px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  transition: all 0.25s;
  cursor: pointer;

  :hover {
    opacity: 1 !important;
  }
  :hover ${Expand} {
    width: 20px;
    opacity: 1;
    margin-left: 4px;
  }
  :hover ${Date} {
    opacity: 1;
  }
`;

export const List = styled.ul`
  width: 100%;

  :hover ${ListItemContent} {
    opacity: 0.3;
  }
`;
