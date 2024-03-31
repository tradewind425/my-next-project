import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/GameStore'; // 正しいパスに修正してください
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const BlockCounter: React.FC = () => {
  // gameStoreのblockCountスライスからtotalBlocksの値を取得
  const totalBlocks = useSelector((state: RootState) => state.blockCount.totalBlocks);

  return (
    <Paper elevation={3} sx={{ p: 2, display: 'inline-flex', borderRadius: '10px', bgcolor: 'background.paper', color: 'text.primary' }}>
      <Typography variant="h6" component="div">
        Total Blocks: {totalBlocks}
      </Typography>
    </Paper>
  );
};

export default BlockCounter;
