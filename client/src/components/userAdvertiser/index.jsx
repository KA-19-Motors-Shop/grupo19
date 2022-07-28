import { UserAdvertiserContainer } from "./style"


const UserAdvertiser = ({userName, color, isWhite=false})=>{
    userName = userName.split(' ').filter(word=>word.length).join(' ')
    return(
        <UserAdvertiserContainer color={color} isWhite={isWhite}>
            <div className="circle">
                {userName.split(' ').reduce((acc, letter)=>acc+letter.toUpperCase()[0],'').slice(0,2)}
            </div>
            <span>{userName}</span>

        </UserAdvertiserContainer>
    )
}

export default UserAdvertiser
