import { useState } from "react";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 2rem;
`;

const Button = styled.button`
  background-color: #ad8aff;
  border: none;
  color: #ffffff;
  font-size: 28px;
  width: 120px;
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
  &:hover {
    background-color: #916cff !important;
  }
  &:disabled {
    background-color: #cccccc;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const MemberList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MemberItem = styled.li`
  background: #f3f3f3;
  margin: 1rem 1rem 0 0;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 32px;
  color: #333;
  cursor: pointer;
`;

const LineEmoji = styled.span`
  margin-left: 1rem;
  font-size: 32px;
  color: #666;
`;

const MemberArea = styled.div`
  width: 700px;
  padding-bottom: 15px;
`;

interface Member {
  name: string;
  line: string;
  revealed: boolean;
}

interface Team {
  teamName: string;
  members: Member[];
}

const initialTeamsData: Team[] = [
  {
    teamName: "1팀",
    members: [
      { name: "채상애#1124", line: "", revealed: false },
      { name: "아 뚱깐만요#0000", line: "", revealed: false },
      { name: "옷보다와꾸#KR1", line: "", revealed: false },
      { name: "김제훈#1124", line: "", revealed: false },
      { name: "힐 냥#KR1", line: "", revealed: false },
    ],
  },
  {
    teamName: "2팀",
    members: [
      { name: "유쟁쓰#RK1", line: "", revealed: false },
      { name: "피학철#KR1", line: "", revealed: false },
      { name: "3eo30#kr1", line: "", revealed: false },
      { name: "BIBI DE PURPLE #0927", line: "", revealed: false },
      { name: "리 븐#777", line: "", revealed: false },
    ],
  },
  {
    teamName: "3팀",
    members: [
      { name: "Juйe#KR1", line: "", revealed: false },
      { name: "영 기#9826", line: "", revealed: false },
      { name: "polar1s#KR1", line: "", revealed: false },
      { name: "iamond#KR1 ", line: "", revealed: false },
      { name: "요염한 핑와도둑#KR0", line: "", revealed: false },
    ],
  },
  {
    teamName: "4팀",
    members: [
      { name: "powerok#kr1", line: "", revealed: false },
      { name: "PAKA#fan", line: "", revealed: false },
      { name: "울 보#0330", line: "", revealed: false },
      { name: "4so#KR1", line: "", revealed: false },
      { name: "나 채붕이 아니다#0704", line: "", revealed: false },
    ],
  },
];

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const Line = () => {
  const [teams, setTeams] = useState<Team[]>(initialTeamsData);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const lines = ["탑", "정글", "미드", "원딜", "서폿"];

  const handleTeamClick = (teamIndex: number) => {
    setSelectedTeam(teams[teamIndex]);
  };

  const assignRandomLines = () => {
    if (selectedTeam) {
      const updatedTeams = teams.map((team) => {
        if (team.teamName === selectedTeam.teamName) {
          const shuffledLines = shuffleArray([...lines]);
          team.members = team.members.map((member, index) => ({
            ...member,
            line: shuffledLines[index],
          }));
        }
        return team;
      });
      setTeams(updatedTeams);
      setSelectedTeam(
        updatedTeams.find((team) => team.teamName === selectedTeam.teamName) || null
      );
    }
  };

  const handleMemberClick = (teamName: string, memberIndex: number) => {
    const updatedTeams = teams.map((team) => {
      if (team.teamName === teamName) {
        team.members[memberIndex].revealed = true;
      }
      return team;
    });
    setTeams(updatedTeams);
  };

  const resetSelectedTeam = () => {
    if (selectedTeam) {
      const updatedTeams = teams.map((team) => {
        if (team.teamName === selectedTeam.teamName) {
          team.members = team.members.map((member) => ({
            ...member,
            line: "",
            revealed: false,
          }));
        }
        return team;
      });
      setTeams(updatedTeams);
      setSelectedTeam(
        updatedTeams.find((team) => team.teamName === selectedTeam.teamName) || null
      );
    }
  };

  const copyToClipboard = () => {
    if (selectedTeam) {
      let copyText = `${selectedTeam.teamName}\n`;
      selectedTeam.members.forEach((member) => {
        copyText += `${member.name}: ${member.line ? member.line : "라인 미정"}\n`;
      });
      navigator.clipboard.writeText(copyText).then(() => {
        alert('정보가 클립보드에 복사되었습니다.');
      });
    }
  };

  return (
    <Body>
      <ButtonGroup>
        {teams.map((team, index) => (
          <Button key={index} onClick={() => handleTeamClick(index)}>
            {team.teamName}
          </Button>
        ))}
      </ButtonGroup>
      {selectedTeam && (
        <div>
          <MemberArea>
            <MemberList>
              {selectedTeam.members.map((member, index) => (
                <MemberItem
                  key={index}
                  onClick={() => handleMemberClick(selectedTeam.teamName, index)}
                >
                  {member.name}
                  <LineEmoji>{member.line ? (member.revealed ? member.line : "🤔") : ""}</LineEmoji>
                </MemberItem>
              ))}
            </MemberList>
          </MemberArea>
          <Button onClick={assignRandomLines}>돌려!</Button>
          <Button onClick={resetSelectedTeam}>초기화</Button>
          <Button onClick={copyToClipboard}>복사하기</Button>
        </div>
      )}
    </Body>
  );
};

export default Line;
