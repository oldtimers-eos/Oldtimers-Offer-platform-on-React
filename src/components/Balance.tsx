import React, { useEffect, useState } from "react";
import { useAccount, useBalance } from 'wagmi';


const Balance=()=>{
    const { address, isConnected } = useAccount();
    const { data, isError, isLoading } = useBalance({address:address});

  
        if (isLoading) return <div>Balance loading…</div>
        if (isError) return <div>Error fetching balance</div>
        const balanceAmount = data?.formatted.slice();
        return (
          <div>
            Balance: {Number(balanceAmount).toFixed(4)} EOS EVM
          </div>
        )
    
}

export default Balance;