import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
//
import { Card, Container, Typography, CardContent } from '@mui/material';
//
import { getStudy } from '../../_actions/user_actions';
import { StudyListCard } from '../_dashboard/study';
import MyProgress from '../_dashboard/MyProgress';

export default function UserStudyList() {
  // STATE
  const [myStudyList, setMyStudyList] = useState([]);
  const [loading, setLoading] = useState(false);

  // INIT
  const dispatch = useDispatch();
  const getStudyList = async () => {
    setLoading(true);
    dispatch(getStudy())
      .then((response) => {
        if (response.payload.data > 0) {
          setMyStudyList(response.payload.data);
        } else {
          setMyStudyList(false);
        }
      })
      .catch((err) => {
        setTimeout(() => {}, 3000);
        console.log(err, '나의 스터디 받아오기 실패');
      });
    setLoading(false);
  };

  // RENDER
  useEffect(() => {
    getStudyList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // CONDITIONAL PAGE
  const showEachStudy = () => {
    if (loading) {
      return <MyProgress />;
    }
    if (!myStudyList) {
      return (
        <Typography variant="h3" color="primary" sx={{ mt: '10%', ml: '30%' }}>
          스터디가 없습니다.
        </Typography>
      );
    }
    return myStudyList.map((pjt) => <StudyListCard key={pjt.teamSeq} project={pjt} />);
  };
  return (
    <Container fixed>
      <Card sx={{ minWidth: 275, minHeight: 250 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, mb: 5 }} color="primary" gutterBottom>
            스터디 내역
          </Typography>
          {showEachStudy()}
        </CardContent>
      </Card>
    </Container>
  );
}
