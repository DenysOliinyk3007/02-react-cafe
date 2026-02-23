import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import type { Votes } from '../../types/votes';
import { useState } from 'react';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';


export default function App(){  




    const [votes, setVotes] = useState<Votes>({
        good: 0,
        neutral: 0,
        bad: 0,
    })


    const handleVote = (type: keyof Votes) => {
        setVotes({
            ...votes,
            [type]: votes[type] +1,
        })
        
    };

    const totalVotes = votes.bad + votes.good + votes.neutral;
    const resetVote = () => {
        setVotes({good: 0, neutral: 0, bad: 0})
    };

    const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0

    return(<div className={css.app}>
            <CafeInfo/>
            {totalVotes > 0 ? <VoteOptions onVote = {handleVote} onReset={resetVote} canReset = {true}/>: <VoteOptions onVote = {handleVote} onReset={resetVote} canReset = {false}/>}
            
            {totalVotes > 0 ? <VoteStats vote={votes} totalVotes = {totalVotes} positiveRate={positiveRate}/> : <Notification/>}
        </div>)
}