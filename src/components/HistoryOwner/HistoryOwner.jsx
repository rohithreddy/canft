import React from 'react';
import styled from 'styled-components';
import Badge from '../Badge/Badge';

const Flex = styled.div`
    display: flex;
`;

const ProfileBadge = styled(Badge)`
    margin-left: -10px;
`;

const HistoryOwner = () => {

    const data = [
        {
            address: '0x',
        },
        {
            address: '0x',
        },
        {
            address: '0x',
        }
    ];

    return ( 
        <Flex>
            {
                data.map(e => <ProfileBadge />)
            }
        </Flex>
    )
};

export default HistoryOwner;
