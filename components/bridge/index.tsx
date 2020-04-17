import React, {useCallback} from 'react';
import Head from 'next/head';
import ZigzagLogo from 'components/svg/ZigzagLogo';
import PillButton from 'components/atom/PillButton';
import Layout from 'components/bridge/Layout';
import MainText from 'components/bridge/MainText';
import SubText from 'components/bridge/SubText';
import detectMobileOS from 'utils/detectMobileOS';

export default function Bridge() {

  const handleClickButton = useCallback(() => {
    const mobileOS = detectMobileOS();
    if (mobileOS === 'iphone') {
      return console.log('iphone');
    } else if (mobileOS === 'android') {
      return console.log('android');
    }
    return alert('지원하지 않는 기기입니다.');
  }, []);

  return (
    <Layout
      logo={<ZigzagLogo/>}
      button={(
        <PillButton onClick={handleClickButton}>
          지그재그 앱으로 보기
        </PillButton>
      )}>
      <MainText>
        지그재그<br/>
        2000만<br/>
        다운로드 돌파 !
      </MainText>
      <SubText>
        매일 업데이트 되는 취향저격 신상 보러가세요.
      </SubText>
    </Layout>
  );
}