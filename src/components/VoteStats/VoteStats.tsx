import styles from './VoteStats.module.css';
import type { Votes } from '../../types/votes';

interface Stats{
    vote: Votes;
    totalVotes: number;
    positiveRate: number;
}
export default function VoteStats({vote, totalVotes, positiveRate}: Stats){


    




    return(<div className={styles.container}>
        <p className={styles.stat}>Good: <strong>{vote.good}</strong></p>
        <p className={styles.stat}>Neutral: <strong>{vote.neutral}</strong></p>
        <p className={styles.stat}>Bad:<strong>{vote.bad}</strong></p>
        <p className={styles.stat}>Total: <strong>{totalVotes}</strong></p>
        <p className={styles.stat}>Positive: <strong>{positiveRate}%</strong></p>
    </div>)
    
}

