
import './MyProgressBar.css'

type Props ={
    percentage: number;
}
export const MyProgressBar = ({percentage}: Props)=>{

    const fillerStyles = {
        width: `${percentage}%`,
    }

    return <div className="progress-bar__all">
        {percentage}% closed
        <div  className="filler" style={fillerStyles}>
        </div>
    </div>
}