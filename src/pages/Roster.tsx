import { useState } from "react";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 2rem;
`;

const MemberList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MemberItem = styled.li`
  background: #f3f3f3;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #333;
`;
const TeamContainer = styled.div`
  margin-bottom: 2rem;
`;

const TeamHeader = styled.h2`
  color: #4a4a4a;
  margin-bottom: 1rem;
`;

const MemberArea = styled.div`
  width: 500px;
  padding-bottom: 15px;
`;

const teamsData = [
  {
    teamName: "1팀",
    members: [
      { name: "채상애#1124", line: "" },
      { name: "아 뚱깐만요#0000", line: "" },
      { name: "옷보다와꾸#KR1", line: "" },
      { name: "김제훈#1124", line: "" },
      { name: "힐 냥#KR1", line: "" },
    ],
  },
  {
    teamName: "2팀",
    members: [
      { name: "유쟁쓰#RK1", line: "" },
      { name: "피학철#KR1", line: "" },
      { name: "3eo30#kr1", line: "" },
      { name: "BIBI DE PURPLE #0927", line: "" },
      { name: "리 븐#777", line: "" },
    ],
  },
  {
    teamName: "3팀",
    members: [
      { name: "Juйe#KR1", line: "" },
      { name: "영 기#9826", line: "" },
      { name: "polar1s#KR1", line: "" },
      { name: "iamond#KR1 ", line: "" },
      { name: "요염한 핑와도둑#KR0", line: "" },
    ],
  },
  {
    teamName: "4팀",
    members: [
      { name: "powerok#kr1", line: "" },
      { name: "PAKA#fan", line: "" },
      { name: "울 보#0330", line: "" },
      { name: "4so#KR1", line: "" },
      { name: "나 채붕이 아니다#0704", line: "" },
    ],
  },
];

export const Roster = () => {
  const [teams] = useState(teamsData);

  return (
    <Body>
      {teams.map((team, index) => (
        <MemberArea key={index}>
          <TeamContainer>
            <TeamHeader>{team.teamName} 멤버</TeamHeader>
            <MemberList>
              {team.members.map((member, index) => (
                <MemberItem key={index}>
                  {member.name}
                </MemberItem>
              ))}
            </MemberList>
          </TeamContainer>
        </MemberArea>
      ))}
    </Body>
  );
};
