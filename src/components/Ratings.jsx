import { AiFillStar,AiOutlineStar  } from "react-icons/ai";

const Ratings = ({rating}) => {
    return (
        <>
        <span> {rating > 1 ? (
            <AiFillStar size="20" />        )
            : (
                <AiOutlineStar size="20" />
            )} </span>
    </>
    )
}

export default Ratings
