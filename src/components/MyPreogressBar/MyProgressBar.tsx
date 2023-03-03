import './MyProgressBar.css'

type Props ={
    percentage: number;
}
export const MyProgressBar = ({percentage}: Props)=>{

    const fillerStyles = {
        width: `${percentage}%`,
    }
//@TODO change styling of progress bar text to show text of percentage on to of bar. not it can be covered
    return <div className={`progress-bar__all ${Number(percentage)>= 40 && " text-hidden"}`}>
        {/*{Number(percentage)<= 30 && `${percentage} % closed`}*/}
        <p>{percentage}% closed</p>
        {Number(percentage) > 0 && <div  className="filler" style={fillerStyles}>{Number(percentage) >= 40 && `${percentage} % closed`}</div>}
    </div>
}