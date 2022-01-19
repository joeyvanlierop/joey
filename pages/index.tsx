import styled from "styled-components";
import { List, ListItem } from "../components/List";

export default function Home() {
  return (
    <Center>
      <Column>
        <List>
          <ListItem color="#ff9aa2" title="This is a test post" date="28th" />
          <ListItem
            color="#85e3ff"
            title="This is another test post"
            date="26th"
          />
          <ListItem
            color="#ffdb65"
            title="This is not a test post"
            date="19th"
          />
          <ListItem
            color="#ff9aa2"
            title="This may or may not be a test post"
            date="8th"
          />
          <ListItem
            color="#85e3ff"
            title="This is most definitely a test post"
            date="2nd"
          />
        </List>
      </Column>
    </Center>
  );
}

const Center = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  width: 50%;
`;
