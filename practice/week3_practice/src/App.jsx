import { useState } from "react";
import { members } from "./constants/members";
import styled from "@emotion/styled";
import Card from "./Card";

function App() {
  console.log(members);
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Practice</h1>
      <Grid>
        {members.map((member) => (
          <Card
            key={`Card-${member.id}`}
            id={member.id}
            name={member.name}
            englishName={member.englishName}
            github={member.github}
            gender={member.gender}
            role={member.role}
            firstWeekGroup={member.firstWeekGroup}
            secondWeekGroup={member.secondWeekGroup}
          ></Card>
        ))}
      </Grid>
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;

  width: 100vw;
  height: 100vh;
`;

export default App;
