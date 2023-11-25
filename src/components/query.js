import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

const Query = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const button = document.getElementById('myButton');
        const handleClick = () => {
            setMessage('버튼이 클릭되었습니다!'); // 상태 업데이트
        };

        // 버튼에 클릭 이벤트 리스너 추가
        button.addEventListener('click', handleClick);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            button.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
            <Button id="myButton">클릭</Button>
            {message && <div>{message}</div>} {/* 화면에 메시지 표시 */}
        </>
    );
};

export default Query;