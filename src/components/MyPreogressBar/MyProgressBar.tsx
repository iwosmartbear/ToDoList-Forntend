
import './MyProgressBar.css'

type Props ={
    percentage: number;
}
export const MyProgressBar = ({percentage}: Props)=>{

    const fillerStyles = {
        width: `${percentage}%`,
    }
//@TODO change styling of progress bar text to show text of percentage on to of bar. not it can be covered
    return <div className="progress-bar__all">
        {percentage}% closed
        <div  className="filler" style={fillerStyles}>
        </div>
    </div>
}